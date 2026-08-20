import { z } from "zod";

export const disputeFindingStateSchema = z.enum([
  "confirmed",
  "discrepancy",
  "missing",
  "ambiguous",
  "requires_verification",
  "unsupported",
]);
export type DisputeFindingState = z.infer<typeof disputeFindingStateSchema>;

export const disputeFindingSchema = z.object({
  id: z.string(),
  state: disputeFindingStateSchema,
  title: z.string(),
  detail: z.string(),
  sourceExcerpt: z.string().optional(),
  severity: z.enum(["high", "medium", "low"]),
});
export type DisputeFinding = z.infer<typeof disputeFindingSchema>;

export const evidenceItemSchema = z.object({
  id: z.string(),
  description: z.string(),
  status: z.enum(["missing", "requested", "provided", "verified", "rejected", "not_applicable"]),
  supportsFindingIds: z.array(z.string()).default([]),
});
export type EvidenceItem = z.infer<typeof evidenceItemSchema>;

export const disputeAnalysisSchema = z.object({
  documentId: z.string(),
  classification: z.object({ type: z.string(), confidence: z.number().min(0).max(1) }),
  facts: z.array(z.object({ label: z.string(), value: z.string(), sourceExcerpt: z.string().optional() })),
  findings: z.array(disputeFindingSchema),
  evidence: z.array(evidenceItemSchema),
  strategy: z.array(z.string()),
  blockingIssues: z.array(z.string()),
});
export type DisputeAnalysis = z.infer<typeof disputeAnalysisSchema>;

/**
 * Deterministic first-pass credit-report analysis. This is deliberately
 * conservative: it identifies explicit gaps and claims from the user's
 * supplied text rather than inventing bureau findings.
 */
export function analyzeCreditReportInput(input: {
  documentId: string;
  text: string;
  bureau?: string;
  accountNumber?: string;
  reportDate?: string;
  errorType?: string;
  facts?: string;
  objective?: string;
}): DisputeAnalysis {
  const text = input.text.trim();
  const facts = input.facts?.trim() ?? "";
  const objective = input.objective?.trim() ?? "";
  const findings: DisputeFinding[] = [];
  const evidence: EvidenceItem[] = [];
  const blockingIssues: string[] = [];

  const addMissing = (id: string, title: string, detail: string) => {
    findings.push({ id, state: "missing", title, detail, severity: "high" });
    evidence.push({ id: `evidence-${id}`, description: detail, status: "missing", supportsFindingIds: [id] });
    blockingIssues.push(detail);
  };

  if (!text) addMissing("source-text", "Source document text missing", "A source document must be available before findings can be grounded.");
  if (!input.bureau) addMissing("bureau", "Credit bureau not identified", "Identify the bureau receiving the dispute before mailing.");
  if (!facts) addMissing("facts", "User facts missing", "Describe the disputed item and why it is inaccurate using verifiable facts.");
  if (!objective) addMissing("objective", "Requested correction missing", "State what correction or investigation the user is requesting.");

  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const normalizedFacts = [
    input.bureau ? { label: "credit_bureau", value: input.bureau } : null,
    input.accountNumber ? { label: "account_reference", value: input.accountNumber } : null,
    input.reportDate ? { label: "report_date", value: input.reportDate } : null,
    input.errorType ? { label: "error_type", value: input.errorType } : null,
  ].filter((value): value is { label: string; value: string } => Boolean(value));

  if (input.accountNumber && !text.includes(input.accountNumber)) {
    const id = "account-reference-not-found";
    findings.push({
      id,
      state: "requires_verification",
      title: "Account/reference number not found in supplied text",
      detail: "Verify the account/reference number against the uploaded source document before mailing.",
      severity: "medium",
    });
    evidence.push({ id: `evidence-${id}`, description: "Source document containing the disputed account/reference number", status: "requested", supportsFindingIds: [id] });
  }

  if (input.reportDate && lines.length > 0 && !text.includes(input.reportDate)) {
    const id = "report-date-not-found";
    findings.push({
      id,
      state: "requires_verification",
      title: "Report date not found in supplied text",
      detail: "Verify the report date against the uploaded source document before relying on it in the dispute.",
      severity: "low",
    });
  }

  if (facts) {
    findings.push({
      id: "user-facts-present",
      state: "confirmed",
      title: "User supplied dispute facts",
      detail: "The workflow has user-provided factual assertions that can be reviewed against source evidence.",
      severity: "medium",
      sourceExcerpt: facts.slice(0, 500),
    });
  }

  const strategy: string[] = [];
  if (input.bureau) strategy.push(`Address the dispute to ${input.bureau} and identify the specific item under dispute.`);
  if (facts) strategy.push("Use only verifiable facts and preserve the user's wording where it can be supported by the source documents.");
  if (objective) strategy.push(`Request the specific correction described by the user: ${objective.slice(0, 300)}`);
  if (evidence.length) strategy.push("Resolve missing or verification-required evidence before approval and mailing.");

  return disputeAnalysisSchema.parse({
    documentId: input.documentId,
    classification: { type: "credit-report-dispute", confidence: text ? 0.9 : 0 },
    facts: normalizedFacts.map((item) => ({ ...item, sourceExcerpt: undefined })),
    findings,
    evidence,
    strategy,
    blockingIssues,
  });
}

export function canApproveDispute(analysis: DisputeAnalysis): boolean {
  return analysis.blockingIssues.length === 0 && analysis.findings.every((finding) => finding.state !== "unsupported");
}
