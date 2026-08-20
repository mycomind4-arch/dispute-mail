import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, FileWarning, ArrowUpRight } from "lucide-react";

export function SiteHeader({ variant = "default" }: { variant?: "default" | "transparent" }) {
  const [open, setOpen] = useState(false);
  const transparent = variant === "transparent";
  const navClass = transparent ? "text-white/80 hover:text-white" : "text-teal-600 hover:text-teal-700";

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${transparent ? "border-transparent bg-transparent" : "border-warm-border bg-white/95 backdrop-blur-sm"}`}>
      <div className="container flex min-h-16 items-center justify-between gap-5 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Dispute Mail home">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${transparent ? "bg-white/15" : "bg-teal-700"}`}>
            <FileWarning size={18} className="text-rose-400" />
          </div>
          <div className="leading-none">
            <span className={`block text-lg font-bold tracking-tight ${transparent ? "text-white" : "text-teal-700"}`} style={{ fontFamily: "var(--font-serif)" }}>Dispute Mail</span>
            <span className={`mt-1 hidden text-[9px] font-medium uppercase tracking-[0.18em] sm:block ${transparent ? "text-white/45" : "text-slate-400"}`}>A MailMyPDF product</span>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {[
            { label: "Workflows", href: "/workflows" },
            { label: "How it works", href: "/#how" },
            { label: "Pricing", href: "/pricing" },
            { label: "Resources", href: "/resources" },
            { label: "FAQ", href: "/faq" },
          ].map((item) => (
            <Link key={item.label} to={item.href} className={`text-sm font-medium transition-colors ${navClass}`}>{item.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/dashboard" className={`text-sm font-semibold ${navClass}`}>My Mailings</Link>
          <Link to="/workflows/credit-report" className="btn-rose">Start a dispute</Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} className={transparent ? "text-white" : "text-teal-700"} /> : <Menu size={22} className={transparent ? "text-white" : "text-teal-700"} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-warm-border bg-white md:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {[
              { label: "Workflow directory", href: "/workflows" },
              { label: "How it works", href: "/#how" },
              { label: "Pricing", href: "/pricing" },
              { label: "Resources", href: "/resources" },
              { label: "FAQ", href: "/faq" },
              { label: "My Mailings", href: "/dashboard" },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-teal-600 hover:bg-teal-50" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <Link to="/workflows/credit-report" className="btn-rose mt-2 justify-center" onClick={() => setOpen(false)}>Start a dispute</Link>
            <div className="mt-2 border-t border-warm-border px-3 pt-3">
              <a href="https://mailmypdf.com" className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-700">MailMyPDF fulfillment <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
