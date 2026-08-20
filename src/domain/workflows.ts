export type WorkflowId =
  | "debt-collection-dispute"
  | "dispute-collection-agency"
  | "debt-dispute"
  | "debt-validation"
  | "credit-report"
  | "credit-report-collections"
  | "hard-inquiry"
  | "charge-off"
  | "medical-collections"
  | "student-loan"
  | "credit-card-billing"
  | "unauthorized-charge"
  | "billing-error"
  | "subscription-billing"
  | "service-contract"
  | "insurance-billing"
  | "follow-up-no-response"
  | "inadequate-response"
  | "cease-contact";

export type WorkflowStep =
  | "intro"
  | "document"
  | "facts"
  | "objective"
  | "analysis"
  | "evidence"
  | "strategy"
  | "draft"
  | "review"
  | "attachments"
  | "recipient"
  | "mailing"
  | "checkout"
  | "submitted";

export type WorkflowLifecycle = "partial" | "executable" | "gold";

export interface WorkflowDefinition {
  id: WorkflowId;
  title: string;
  description: string;
  disclaimer: string;
  steps: WorkflowStep[];
  lifecycle: WorkflowLifecycle;
  goldStandardStages: string[];
}

const GOLD_STAGES = [
  "secure-ingest",
  "classify",
  "extract",
  "understand",
  "facts-provenance",
  "timeline-deadlines",
  "issues-discrepancies",
  "evidence",
  "authority-research",
  "risk",
  "strategy",
  "draft",
  "validate",
  "blocking-gates",
  "human-review",
  "authorized-mail",
  "track",
  "prove-audit",
];

const definitions: Array<Omit<WorkflowDefinition, "steps" | "goldStandardStages">> = [
  { id: "debt-collection-dispute", title: "Dispute a Debt Collection", description: "Prepare a documented dispute for a collection account using the notice, account facts, and supporting records.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "dispute-collection-agency", title: "Dispute a Collection Agency", description: "Prepare a written dispute addressed to a collection agency with an evidence-backed account record.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "debt-dispute", title: "Dispute a Debt Account", description: "Challenge an inaccurate, unsupported, or incorrect debt balance, ownership, or account record.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "debt-validation", title: "Request Debt Validation", description: "Request documentation supporting a debt claim from a collector and preserve the correspondence record.", disclaimer: "Under the FDCPA, timing and legal effects depend on the circumstances. Dispute Mail is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "credit-report", title: "Dispute a Credit Report Error", description: "Dispute inaccurate, incomplete, or unverifiable information reported to a credit bureau.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "credit-report-collections", title: "Dispute a Collection on a Credit Report", description: "Challenge inaccurate collection-account reporting with a bureau and, when appropriate, the data furnisher.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "hard-inquiry", title: "Dispute a Hard Credit Inquiry", description: "Document and dispute an unrecognized or inaccurate hard inquiry on a credit report.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "charge-off", title: "Dispute Charge-Off Reporting", description: "Challenge inaccurate charge-off balance, status, dates, or account information.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "medical-collections", title: "Dispute Medical Collections", description: "Organize medical billing, insurance, payment, and collection records into a documented dispute.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "student-loan", title: "Dispute a Student Loan Account", description: "Prepare a factual dispute for a student-loan servicer, lender, or credit bureau.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "credit-card-billing", title: "Dispute a Credit Card Billing Error", description: "Prepare a written dispute for an incorrect credit-card transaction or billing item.", disclaimer: "Written correspondence does not replace any issuer-required dispute procedure. Dispute Mail is not a law firm.", lifecycle: "executable" },
  { id: "unauthorized-charge", title: "Dispute an Unauthorized Charge", description: "Prepare a written record for an unauthorized transaction while directing the customer to complete the issuer's fraud process.", disclaimer: "Written correspondence does not replace required fraud reporting. Dispute Mail is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "billing-error", title: "Dispute a Billing Error", description: "Challenge an incorrect invoice, bill, statement, or service charge with a factual record.", disclaimer: "Billing disputes may have different deadlines. Dispute Mail is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "subscription-billing", title: "Dispute a Subscription Charge", description: "Document recurring billing, cancellation, duplicate charges, or other subscription billing problems.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "service-contract", title: "Dispute a Service Contract", description: "Compare service-contract terms against what was billed or performed and prepare a documented dispute.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "insurance-billing", title: "Dispute Insurance Billing or Payment", description: "Document a disputed insurance bill, claim payment, benefit calculation, or related charge.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "follow-up-no-response", title: "Follow Up on a Dispute With No Response", description: "Create a documented follow-up tied to the original dispute, submission date, and proof of delivery.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "inadequate-response", title: "Escalate an Unresolved Dispute", description: "Compare the original dispute to the response received and prepare a documented escalation for the unresolved issue.", disclaimer: "Dispute Mail provides document preparation and mailing assistance. It is not a law firm and does not provide legal advice.", lifecycle: "executable" },
  { id: "cease-contact", title: "Document a Collection Communication Request", description: "Prepare a narrow written communication request for a collector based on the customer's stated circumstances.", disclaimer: "Legal effects of a communication request vary by circumstance. Dispute Mail is not a law firm and does not provide legal advice.", lifecycle: "executable" },
];

const STANDARD_STEPS: WorkflowStep[] = [
  "intro", "document", "facts", "objective", "analysis", "evidence", "strategy",
  "draft", "review", "attachments", "recipient", "mailing", "checkout", "submitted",
];

export const workflows: Record<WorkflowId, WorkflowDefinition> = Object.fromEntries(
  definitions.map((definition) => [
    definition.id,
    { ...definition, steps: STANDARD_STEPS, goldStandardStages: GOLD_STAGES },
  ]),
) as Record<WorkflowId, WorkflowDefinition>;
