import { workflows, type WorkflowId, type WorkflowDefinition } from "./workflows";

export type CapabilityStatus = "executable" | "partial" | "catalog";

export type WorkflowCapabilityStatus = {
  workflowId: WorkflowId;
  lifecycle: CapabilityStatus;
  implementedDomainAnalysis: boolean;
  hasGoldStageContract: boolean;
  readyForMailingGate: boolean;
  notes: string[];
};

const implementedAnalysis: Record<WorkflowId, boolean> = {
  "credit-report": true,
  "debt-validation": false,
  "billing-error": false,
  "unauthorized-charge": false,
};

const toStatus = (definition: WorkflowDefinition): WorkflowCapabilityStatus => {
  const hasAnalysis = implementedAnalysis[definition.id];
  const readyForMailingGate = hasAnalysis && definition.lifecycle !== "catalog";

  return {
    workflowId: definition.id,
    lifecycle: definition.lifecycle,
    implementedDomainAnalysis: hasAnalysis,
    hasGoldStageContract: definition.goldStandardStages.length > 0,
    readyForMailingGate,
    notes: hasAnalysis
      ? ["Domain analysis exists; shared validation, approval, fulfillment, tracking, and proof gates must still pass before Gold certification."]
      : ["Workflow has UX/catalog definition but does not yet have a dedicated domain analysis implementation; do not advertise it as executable Gold workflow."],
  };
};

export function getWorkflowCapabilityStatuses(): WorkflowCapabilityStatus[] {
  return (Object.values(workflows) as WorkflowDefinition[]).map(toStatus);
}

export function isWorkflowGoldEligible(id: WorkflowId): boolean {
  const definition = workflows[id];
  const status = toStatus(definition);
  return status.lifecycle === "gold" && status.implementedDomainAnalysis && status.readyForMailingGate;
}
