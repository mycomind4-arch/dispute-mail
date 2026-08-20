import { afterEach, describe, expect, it, vi } from "vitest";
import { analyzeWithClaude, draftWithClaude, validateDraftWithClaude } from "./claude-dispute";

const originalKey = process.env.ANTHROPIC_API_KEY;
const originalModel = process.env.ANTHROPIC_MODEL;
const originalFetch = globalThis.fetch;

afterEach(() => {
  if (originalKey === undefined) delete process.env.ANTHROPIC_API_KEY; else process.env.ANTHROPIC_API_KEY = originalKey;
  if (originalModel === undefined) delete process.env.ANTHROPIC_MODEL; else process.env.ANTHROPIC_MODEL = originalModel;
  globalThis.fetch = originalFetch;
  vi.restoreAllMocks();
});

describe("Claude dispute adapter", () => {
  it("fails when Claude credentials are absent", async () => {
    delete process.env.ANTHROPIC_API_KEY;
    delete process.env.ANTHROPIC_MODEL;
    await expect(analyzeWithClaude({ workflowId: "credit-report", documentId: "doc-1", text: "source" })).rejects.toThrow(/ANTHROPIC_API_KEY/);
  });

  it("rejects malformed structured analysis responses", async () => {
    process.env.ANTHROPIC_API_KEY = "test-key";
    process.env.ANTHROPIC_MODEL = "test-model";
    globalThis.fetch = vi.fn(async () => new Response(JSON.stringify({ content: [{ type: "text", text: "not-json" }] }), { status: 200 }));
    await expect(analyzeWithClaude({ workflowId: "credit-report", documentId: "doc-1", text: "source" })).rejects.toThrow(/invalid structured JSON/);
  });

  it("accepts schema-valid analysis output", async () => {
    process.env.ANTHROPIC_API_KEY = "test-key";
    process.env.ANTHROPIC_MODEL = "test-model";
    const analysis = {
      documentId: "doc-1",
      classification: { type: "credit-report", confidence: 0.95 },
      facts: [{ label: "credit_bureau", value: "Equifax" }],
      findings: [],
      evidence: [{ id: "e1", description: "Credit report", status: "verified", supportsFindingIds: [] }],
      strategy: ["Request investigation"],
      blockingIssues: [],
    };
    globalThis.fetch = vi.fn(async () => new Response(JSON.stringify({ content: [{ type: "text", text: JSON.stringify(analysis) }] }), { status: 200 }));
    const result = await analyzeWithClaude({ workflowId: "credit-report", documentId: "doc-1", text: "source" });
    expect(result).toEqual(analysis);
  });

  it("rejects malformed draft-validation output", async () => {
    process.env.ANTHROPIC_API_KEY = "test-key";
    process.env.ANTHROPIC_MODEL = "test-model";
    globalThis.fetch = vi.fn(async () => new Response(JSON.stringify({ content: [{ type: "text", text: JSON.stringify({ passed: "yes", issues: [] }) }] }), { status: 200 }));
    await expect(validateDraftWithClaude({ workflowId: "credit-report", analysis: { documentId: "doc-1", classification: { type: "credit-report", confidence: 1 }, facts: [], findings: [], evidence: [], strategy: [], blockingIssues: [] }, draft: "draft" })).rejects.toThrow(/invalid draft-validation response/);
  });

  it("returns the draft text for a successful drafting response", async () => {
    process.env.ANTHROPIC_API_KEY = "test-key";
    process.env.ANTHROPIC_MODEL = "test-model";
    globalThis.fetch = vi.fn(async () => new Response(JSON.stringify({ content: [{ type: "text", text: "Dear recipient, this is the draft." }] }), { status: 200 }));
    const draft = await draftWithClaude({ workflowId: "debt-validation", analysis: { documentId: "doc-1", classification: { type: "debt-validation", confidence: 1 }, facts: [], findings: [], evidence: [], strategy: [], blockingIssues: [] } });
    expect(draft).toContain("Dear recipient");
  });
});
