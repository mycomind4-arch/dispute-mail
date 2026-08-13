import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FileWarning, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [
    { title: "Sign In — Dispute Mail" },
    { name: "description", content: "Create an account or sign in to Dispute Mail." },
    { name: "robots", content: "noindex,nofollow" },
  ] }),
  component: AuthPage,
});
function AuthPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="min-h-screen bg-cream"><SiteHeader />
      <section className="py-12 md:py-20"><div className="container max-w-4xl">
        <div className="grid overflow-hidden rounded-2xl border border-warm-border md:grid-cols-2">
          <div className="p-8 md:p-10" style={{ background: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)" }}>
            <div className="flex items-center gap-2.5"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15"><FileWarning size={18} className="text-rose-400" /></div><span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-serif)" }}>Dispute Mail</span></div>
            <h1 className="mt-8 text-2xl font-bold text-white" style={{ fontFamily: "var(--font-serif)" }}>Your disputes, organized and sent.</h1>
            <p className="mt-4 text-sm leading-7 text-white/60">Create an account to save drafts, track mailings, and keep a permanent record of your dispute filings.</p>
            <ul className="mt-8 space-y-3">{["Save and resume workflows", "Track all mailings in one place", "Keep proof of timely submission", "Re-use recipient addresses"].map((item) => (<li key={item} className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-rose-400" /> {item}</li>))}</ul>
          </div>
          <div className="flex flex-col justify-center bg-white p-8 md:p-10">
            {submitted ? (<div className="text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-50"><CheckCircle2 size={32} className="text-rose-500" /></div><h2 className="mt-5 text-xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>You're on the list!</h2><p className="mt-3 text-sm text-slate-400">We'll notify you at <span className="font-semibold text-teal-700">{email}</span> when accounts launch.</p><Link to="/" className="btn-outline mt-6">Back to home</Link></div>) : (<>
              <h2 className="text-xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Authentication coming soon</h2>
              <p className="mt-2 text-sm text-slate-400">Enter your email to be notified when accounts launch.</p>
              <label className="input-label mt-5">Email address</label>
              <input className="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              <button onClick={() => email.trim() && setSubmitted(true)} disabled={!email.trim()} className="btn-rose mt-5 w-full justify-center">Notify me <ArrowRight size={16} /></button>
              <p className="mt-5 text-xs text-slate-300">By continuing, you agree to our <Link to="/terms" className="text-rose-600 hover:underline">Terms</Link> and <Link to="/privacy" className="text-rose-600 hover:underline">Privacy Policy</Link>.</p>
            </>)}
          </div>
        </div>
      </div></section>
      <SiteFooter />
    </main>
  );
}
