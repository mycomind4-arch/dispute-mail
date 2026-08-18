import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CreditCard, FileText, ShieldCheck, FileWarning, Stethoscope, ReceiptText, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/workflows/")({ component: WorkflowDirectory });

const groups = [
  {
    title: "Credit & debt disputes",
    description: "Search and start from the exact credit or debt problem you need to challenge.",
    items: [
      { title: "Credit Report Error", intent: "credit dispute letter", description: "Dispute inaccurate, incomplete, or unverifiable information reported to a credit bureau.", href: "/workflows/credit-report", icon: FileText },
      { title: "Debt Validation", intent: "debt collection dispute", description: "Request validation of a debt and preserve the correspondence and mailing record.", href: "/workflows/debt-validation", icon: ShieldCheck },
      { title: "Billing Error", intent: "dispute letter", description: "Challenge an incorrect bill, charge, service amount, or account statement.", href: "/workflows/billing-error", icon: CreditCard },
    ],
  },
  {
    title: "Charges & billing",
    description: "Resolve unauthorized charges and inaccurate service bills with a documented response.",
    items: [
      { title: "Unauthorized Charge", intent: "dispute unauthorized charge", description: "Prepare a written dispute for an unauthorized or fraudulent charge with the issuer or bank.", href: "/workflows/unauthorized-charge", icon: FileWarning },
      { title: "Medical Billing", intent: "dispute medical bill", description: "Organize the facts behind an incorrect medical bill and prepare correspondence to the provider or billing department.", href: "/workflows/billing-error", icon: Stethoscope },
      { title: "Utility / Service Billing", intent: "dispute billing error", description: "Challenge an incorrect utility, subscription, or service charge with a clear factual record.", href: "/workflows/billing-error", icon: ReceiptText },
    ],
  },
  {
    title: "Other dispute situations",
    description: "Use the same evidence-first correspondence pattern when the underlying dispute does not fit a generic letter template.",
    items: [
      { title: "Dispute a Creditor Account", intent: "debt dispute letter", description: "Prepare a documented dispute around an account balance, ownership, reporting, or other creditor issue.", href: "/workflows/debt-validation", icon: Building2 },
    ],
  },
];

function WorkflowDirectory() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <section className="border-b border-warm-border bg-teal-50 py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="eyebrow">DISPUTE MAIL WORKFLOW DIRECTORY</div>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-teal-700 md:text-6xl" style={{ fontFamily: "var(--font-serif)" }}>Find the dispute workflow that matches the problem.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">Dispute Mail is organized around concrete dispute situations instead of one generic letter builder. Choose the closest match, review the facts, and continue into the guided workflow.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/workflows/credit-report" className="btn-rose">Start a dispute <ArrowRight size={18} /></Link>
            <Link to="/" className="btn-outline">Back to overview</Link>
          </div>
        </div>
      </section>
      <section className="container py-16 md:py-24">
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="max-w-2xl"><div className="eyebrow">{group.title}</div><p className="mt-2 text-slate-400">{group.description}</p></div>
              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map(({ title, intent, description, href, icon: Icon }) => (
                  <Link key={`${title}-${href}`} to={href} className="card group p-6 transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50"><Icon size={24} className="text-teal-700" /></div>
                    <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-rose-500">Search intent: {intent}</div>
                    <h2 className="mt-2 text-lg font-semibold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>{title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-600">Open workflow <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
