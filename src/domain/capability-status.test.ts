import { describe, expect, it } from "vitest";
import { getWorkflowCapabilityStatuses, isWorkflowGoldEligible } from "./capability-status";

describe("workflow capability status", () => {
  it("does not treat a shared Gold-stage list as proof of executable capability", () => {
    const statuses = getWorkflowCapabilityStatuses();
    expect(statuses).toHaveLength(4);

    const credit = statuses.find((status) => status.workflowId === "credit-report");
    const debt = statuses.find((status) => status.workflowId === "debt-validation");
    const billing = statuses.find((status) => status.workflowId === "billing-error");
    const unauthorized = statuses.find((status) => status.workflowId === "unauthorized-charge");

    expect(credit?.implementedDomainAnalysis).toBe(true);
    expect(debt?.implementedDomainAnalysis).toBe(false);
    expect(billing?.implementedDomainAnalysis).toBe(false);
    expect(unauthorized?.implementedDomainAnalysis).toBe(false);

    expect(isWorkflowGoldEligible("credit-report")).toBe(false);
    expect(isWorkflowGoldEligible("debt-validation")).toBe(false);
    expect(isWorkflowGoldEligible("billing-error")).toBe(false);
    expect(isWorkflowGoldEligible("unauthorized-charge")).toBe(false);
  });
});
