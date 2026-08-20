import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { workflowProfiles } from "@/domain/workflow-profiles";
import { workflows } from "@/domain/workflows";

export const Route = createFileRoute("/workflows/")({ component: WorkflowDirectory });

const groups = [
  { title: "Debt & collection disputes", ids: ["debt-collection-dispute", "dispute-collection-agency", "debt-dispute", "debt-validation", "medical-collections", "cease-contact"] },
  { title: "Credit report disputes", ids: ["credit-report", "credit-report-collections", "hard-inquiry", "charge-off", "student-loan"] },
  { title: "Billing & transaction disputes", ids: ["credit-card-billing", "unauthorized-charge", "billing-error", "subscription-billing", "service-contract", "insurance-billing"] },
  { title: "Follow-up & escalation", ids: ["follow-up-no-response", "inadequate-response"] },
] as const;

function WorkflowDirectory() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <section className="border-b border-warm-border bg-teal-50 py-16 md:py-24"><div className="container max-w-5xl"><div className="eyebrow">DISPUTE MAIL WORKFLOW DIRECTORY</div><h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-teal-700 md:text-6xl" style={{ fontFamily: "var(--font-serif)" }}>Find the workflow that matches the exact problem.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">Dispute Mail is organized around distinct problems and search intents. Each workflow has its own facts, evidence checklist, deadline policy, strategy, draft framing, review gates, and mailing path.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/workflows/credit-report" className="btn-rose">Start with a credit dispute <ArrowRight size={18} /></Link><Link to="/" className="btn-outline">Back to overview</Link></div></div></section>
      <section className="container py-16 md:py-24"><div className="space-y-14">{groups.map((group) => <div key={group.title}><div className="max-w-2xl"><div className="eyebrow">{group.title}</div><p className="mt-2 text-slate-400">Problem-specific workflows built from the Dispute Mail evidence-first engine.</p></div><div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{group.ids.map((id) => { const workflow = workflows[id as keyof typeof workflows]; const profile = workflowProfiles[id as keyof typeof workflowProfiles]; return <Link key={id} to="/workflows/$workflowId" params={{ workflowId: id }} className="card group p-6 transition hover:-translate-y-1 hover:shadow-lg"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50"><FileText size={24} className="text-teal-700" /></div><div className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-rose-500">{profile.primaryKeyword}</div><h2 className="mt-2 text-lg font-semibold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>{workflow.title}</h2><p className="mt-3 text-sm leading-6 text-slate-400">{workflow.description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-600">Open workflow <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span></Link>; })}</div></div>)}</div></section><SiteFooter />
    </main>
  );
}
