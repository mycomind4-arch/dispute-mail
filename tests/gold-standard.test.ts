import test from "node:test";
import assert from "node:assert/strict";
import { analyzeCreditReportInput, canApproveDispute } from "../src/domain/gold-standard";

test("credit report analysis blocks incomplete cases", () => {
  const result = analyzeCreditReportInput({
    documentId: "doc-1",
    text: "TransUnion report dated 2026-08-01",
    bureau: "TransUnion",
  });
  assert.ok(result.findings.some((finding) => finding.id === "facts"));
  assert.equal(canApproveDispute(result), false);
});

test("credit report analysis remains grounded in supplied facts", () => {
  const result = analyzeCreditReportInput({
    documentId: "doc-2",
    text: "Account 12345 appears on report",
    bureau: "Experian",
    accountNumber: "12345",
    reportDate: "2026-08-01",
    errorType: "Not my account",
    facts: "I do not recognize account 12345.",
    objective: "Remove the account after investigation.",
  });
  assert.equal(result.classification.type, "credit-report-dispute");
  assert.ok(result.findings.some((finding) => finding.id === "user-facts-present"));
  assert.ok(result.strategy.length > 0);
  assert.equal(result.blockingIssues.length, 0);
  assert.equal(canApproveDispute(result), true);
});

test("missing source text is a hard block", () => {
  const result = analyzeCreditReportInput({
    documentId: "doc-3",
    text: "",
    bureau: "Equifax",
    facts: "The balance is wrong.",
    objective: "Correct the balance.",
  });
  assert.equal(canApproveDispute(result), false);
  assert.ok(result.blockingIssues.includes("A source document must be available before findings can be grounded."));
});
