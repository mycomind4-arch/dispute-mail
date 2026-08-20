import { createFileRoute } from "@tanstack/react-router";
import { requireInternalServiceKey } from "@/server/internal-auth";
import { analyzeWithClaude, draftWithClaude, validateDraftWithClaude } from "@/services/claude-dispute";
import { workflows, type WorkflowId } from "@/domain/workflows";

export const Route = createFileRoute("/api/workflows/$workflowId/claude")({
  server: {
    handlers: {
      POST: async ({ request, params }) => {
        requireInternalServiceKey(request);
        if (!(params.workflowId in workflows)) return Response.json({ error: "Unknown workflow" }, { status: 404 });
        const workflowId = params.workflowId as WorkflowId;
        const body = await request.json() as { documentId?: string; text?: string; facts?: Record<string, string | undefined>; objective?: string; evidenceStatuses?: Record<string, string> };
        if (!body.documentId?.trim() || !body.text?.trim()) return Response.json({ error: "documentId and text are required" }, { status: 400 });

        const analysis = await analyzeWithClaude({ workflowId, documentId: body.documentId, text: body.text, facts: body.facts, objective: body.objective, evidenceStatuses: body.evidenceStatuses });
        if (analysis.blockingIssues.length > 0) return Response.json({ analysis, draft: null, validation: { passed: false, issues: analysis.blockingIssues }, blocked: true });

        const draft = await draftWithClaude({ workflowId, analysis });
        const validation = await validateDraftWithClaude({ workflowId, analysis, draft });
        return Response.json({ analysis, draft, validation, blocked: !validation.passed });
      },
    },
  },
});
