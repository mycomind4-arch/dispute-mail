import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, CheckCircle2, FileSearch, Loader2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { runProfiledDisputeWorkflow, type WorkflowExecutionResult } from "@/domain/workflow-executor";
import { getWorkflowProfile } from "@/domain/workflow-profiles";
import { workflows, type WorkflowId } from "@/domain/workflows";

export const Route = createFileRoute("/workflows/$workflowId/start")({ component: WorkflowIntakePage });

function isWorkflowId(value: string): value is WorkflowId { return value in workflows; }

function WorkflowIntakePage() {
  const { workflowId } = Route.useParams();
  if (!isWorkflowId(workflowId)) throw notFound();
  const profile = getWorkflowProfile(workflowId);
  const [text, setText] = useState("");
  const [objective, setObjective] = useState("");
  const [facts, setFacts] = useState<Record<string, string>>({});
  const [result, setResult] = useState<WorkflowExecutionResult | null>(null);
  const [running, setRunning] = useState(false);

  const factFields = useMemo(() => profile.requiredFacts.map((label) => ({ label, key: label.toLowerCase().replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/[^a-zA-Z0-9]/g, "") })), [profile.requiredFacts]);

  const run = () => {
    setRunning(true);
    const execution = runProfiledDisputeWorkflow({ workflowId, documentId: `web-${Date.now()}`, text, facts, objective });
    setResult(execution);
    setRunning(false);
  };

  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <section className="border-b border-warm-border bg-teal-50 py-12"><div className="container max-w-4xl"><Link to="/workflows/$workflowId" params={{ workflowId }} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500"><ArrowLeft size={16} /> Back to workflow</Link><div className="eyebrow mt-7">START WORKFLOW</div><h1 className="mt-2 text-4xl font-bold text-teal-700 md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>{profile.primaryKeyword}</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-500">{profile.problem}</p></div></section>
      <section className="container grid gap-8 py-12 lg:grid-cols-[1fr_340px]">
        <div className="space-y-7">
          <div className="card p-7"><div className="flex items-start gap-3"><FileSearch className="mt-1 text-teal-700" size={22} /><div><h2 className="text-xl font-semibold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Source document</h2><p className="mt-1 text-sm leading-6 text-slate-500">Paste extracted text for this prototype intake. Production upload/storage is the next integration boundary.</p></div></div><textarea value={text} onChange={(e) => setText(e.target.value)} rows={10} className="mt-5 w-full rounded-xl border border-warm-border bg-white p-4 text-sm leading-6 text-slate-700 outline-none focus:border-teal-500" placeholder="Paste the relevant notice, statement, report, or correspondence text here." /></div>
          <div className="card p-7"><h2 className="text-xl font-semibold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Problem-specific facts</h2><div className="mt-5 space-y-5">{factFields.map(({ label, key }) => <label key={key} className="block"><span className="text-sm font-semibold text-teal-700">{label}</span><input value={facts[key] ?? ""} onChange={(e) => setFacts((current) => ({ ...current, [key]: e.target.value }))} className="mt-2 w-full rounded-xl border border-warm-border bg-white p-3 text-sm text-slate-700 outline-none focus:border-teal-500" /></label>)}</div></div>
          <div className="card p-7"><h2 className="text-xl font-semibold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Requested outcome</h2><p className="mt-1 text-sm leading-6 text-slate-500">{profile.objectivePrompt}</p><textarea value={objective} onChange={(e) => setObjective(e.target.value)} rows={5} className="mt-4 w-full rounded-xl border border-warm-border bg-white p-4 text-sm leading-6 text-slate-700 outline-none focus:border-teal-500" /></div>
          <button type="button" onClick={run} disabled={running} className="btn-rose w-full disabled:opacity-60">{running ? <><Loader2 size={18} className="animate-spin" /> Analyzing</> : <>Analyze and build the dispute workflow</>}</button>
        </div>

        <aside className="space-y-6">
          <div className="card p-6"><div className="eyebrow">EVIDENCE REQUIRED</div><ul className="mt-4 space-y-3">{profile.evidenceRequirements.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-500"><CheckCircle2 size={17} className="mt-1 shrink-0 text-rose-500" />{item}</li>)}</ul></div>
          <div className="card p-6"><div className="eyebrow">DEADLINE</div><p className="mt-3 text-sm leading-6 text-slate-500">{profile.deadlinePolicy}</p></div>
          {result && <ResultPanel result={result} />}
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}

function ResultPanel({ result }: { result: WorkflowExecutionResult }) {
  return <div className="card p-6"><div className="eyebrow">EXECUTION RESULT</div><div className={`mt-3 text-lg font-bold ${result.ready ? "text-emerald-700" : "text-rose-600"}`}>{result.ready ? "Ready for consequential review" : "Blocked pending required information"}</div><ul className="mt-4 space-y-2">{result.errors.slice(0, 8).map((error) => <li key={error} className="text-sm leading-6 text-slate-500">{error}</li>)}</ul>{result.draft && <details className="mt-5"><summary className="cursor-pointer text-sm font-semibold text-teal-700">View generated draft</summary><pre className="mt-4 max-h-96 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">{result.draft}</pre></details>}</div>;
}
