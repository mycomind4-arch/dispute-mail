import { describe, expect, it } from "vitest";
import { canApproveDispute, canSubmitDispute, type DisputeAnalysis } from "./gold-standard";

const cleanAnalysis = (overrides: Partial<DisputeAnalysis> = {}): DisputeAnalysis => ({
  documentId: "doc-1",
  classification: { type: "credit-report-dispute", confidence: 0.99 },
  facts: [{ label: "credit_bureau", value: "Experian" }],
  findings: [{ id: "verified-fact", state: "confirmed", title: "Confirmed fact", detail: "Grounded fact", severity: "low" }],
  evidence: [{ id: "evidence-1", description: "Credit report", status: "verified", supportsFindingIds: ["verified-fact"] }],
  strategy: ["Request correction"],
  blockingIssues: [],
  ...overrides,
});

describe("dispute gold-standard gates", () => {
  it("allows approval only when evidence and findings are resolved", () => {
    expect(canApproveDispute(cleanAnalysis())).toBe(true);
    expect(canApproveDispute(cleanAnalysis({
      evidence: [{ id: "e1", description: "Report", status: "requested", supportsFindingIds: [] }],
    }))).toBe(false);
    expect(canApproveDispute(cleanAnalysis({
      findings: [{ id: "f1", state: "requires_verification", title: "Verify", detail: "Needs source check", severity: "medium" }],
    }))).toBe(false);
  });

  it("requires every consequential gate before submission", () => {
    const analysis = cleanAnalysis();
    const baseline = { analysis, draftValidated: true, humanApproved: true, recipientComplete: true, proofReady: true };
    expect(canSubmitDispute(baseline)).toBe(true);
    expect(canSubmitDispute({ ...baseline, draftValidated: false })).toBe(false);
    expect(canSubmitDispute({ ...baseline, humanApproved: false })).toBe(false);
    expect(canSubmitDispute({ ...baseline, recipientComplete: false })).toBe(false);
    expect(canSubmitDispute({ ...baseline, proofReady: false })).toBe(false);
  });
});
