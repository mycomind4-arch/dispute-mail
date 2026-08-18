import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, FileWarning } from "lucide-react";

export function SiteHeader({ variant = "default" }: { variant?: "default" | "transparent" }) {
  const [open, setOpen] = useState(false);
  const transparent = variant === "transparent";

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${transparent ? "border-transparent bg-transparent" : "border-warm-border bg-white/95 backdrop-blur-sm"}`}>
      <div className="container flex min-h-16 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${transparent ? "bg-white/15" : "bg-teal-700"}`}>
            <FileWarning size={18} className="text-rose-400" />
          </div>
          <span className={`text-lg font-bold tracking-tight ${transparent ? "text-white" : "text-teal-700"}`} style={{ fontFamily: "var(--font-serif)" }}>
            Dispute Mail
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {[
            { label: "Workflow directory", href: "/workflows" },
            { label: "How it works", href: "/#how" },
            { label: "Pricing", href: "/pricing" },
            { label: "Resources", href: "/resources" },
            { label: "FAQ", href: "/faq" },
          ].map((item) => (
            <Link key={item.label} to={item.href} className={`text-sm font-medium transition-colors ${transparent ? "text-white/80 hover:text-white" : "text-teal-600 hover:text-teal-700"}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/dashboard" className={`text-sm font-semibold ${transparent ? "text-white/90 hover:text-white" : "text-teal-600 hover:text-teal-700"}`}>
            My Mailings
          </Link>
          <Link to="/workflows/credit-report" className="btn-rose">
            Start
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} className={transparent ? "text-white" : "text-teal-700"} /> : <Menu size={22} className={transparent ? "text-white" : "text-teal-700"} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-warm-border bg-white md:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {[
              { label: "Workflow directory", href: "/workflows" },
              { label: "How it works", href: "/#how" },
              { label: "Pricing", href: "/pricing" },
              { label: "Resources", href: "/resources" },
              { label: "FAQ", href: "/faq" },
              { label: "My Mailings", href: "/dashboard" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-teal-600 hover:bg-teal-50" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link to="/workflows/credit-report" className="btn-rose mt-2 justify-center" onClick={() => setOpen(false)}>
              Start
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
