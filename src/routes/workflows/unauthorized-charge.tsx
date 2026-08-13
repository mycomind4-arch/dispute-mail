import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, FileUp, ShieldAlert, CheckCircle2, Mail, PackageCheck, Stamp, CreditCard, Check, AlertTriangle } from "lucide-react";
import { useMemo, useState } from "react";
import { workflows } from "../../domain/workflows";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/workflows/unauthorized-charge")({
  head: () => ({ meta: [
    { title: "Dispute an Unauthorized Charge — Dispute Mail" },
    { name: "description", content: "Dispute an unauthorized or fraudulent charge with your card issuer or bank in writing." },
  ] }),
  component: UnauthorizedCharge,
});

const stepLabels = ["Start", "Charge", "Facts", "Objective", "Draft", "Review", "Attachments", "Recipient", "Mailing", "Checkout", "Done"];
const mailOptions = [
  { id: "first_class", label: "First-Class", price: "$3.99", desc: "3–5 business days · Tracking included", icon: Mail },
  { id: "certified", label: "Certified", price: "$8.99", desc: "Signature tracking · Proof of delivery", icon: PackageCheck },
  { id: "certified_rr", label: "Certified + Return Receipt", price: "$12.99", desc: "Signed return receipt card", icon: ShieldAlert },
  { id: "registered", label: "Registered", price: "$15.99", desc: "Highest security · Insured · Signature required", icon: Stamp },
];
const reviewChecks = [
  "I reviewed every factual statement in this dispute.",
  "Card type, last 4 digits, charge date, and amount are correct.",
  "I have already reported the unauthorized charge to my card issuer.",
  "I understand Dispute Mail is not providing legal advice.",
];

function UnauthorizedCharge() {
  const definition = workflows["unauthorized-charge"];
  const [step, setStep] = useState(0);
  const [issuerName, setIssuerName] = useState("");
  const [cardType, setCardType] = useState("");
  const [chargeDate, setChargeDate] = useState("");
  const [chargeAmount, setChargeAmount] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [facts, setFacts] = useState("");
  const [objective, setObjective] = useState("");
  const [draft, setDraft] = useState("");
  const [checks, setChecks] = useState<boolean[]>(reviewChecks.map(() => false));
  const [mailType, setMailType] = useState("certified_rr");
  const [recipient, setRecipient] = useState({ name: "", org: "", address1: "", address2: "", city: "", state: "", zip: "" });

  const progress = useMemo(() => Math.round((step / (stepLabels.length - 1)) * 100), [step]);
  const allChecked = checks.every(Boolean);

  function generateDraft() {
    return `Re: Written Dispute of Unauthorized Charge
${issuerName ? `Card Issuer: ${issuerName}` : ""}
${cardType ? `Card Type: ${cardType}` : ""}
${merchantName ? `Merchant: ${merchantName}` : ""}
${chargeDate ? `Charge Date: ${chargeDate}` : ""}
${chargeAmount ? `Charge Amount: ${chargeAmount}` : ""}

Dear Sir or Madam,

I am writing to formally dispute an unauthorized charge on my account. ${objective || "[Your objective will appear here.]"}

${facts || "[The facts you provided will appear here.]"}

I have already reported this charge as unauthorized through your fraud reporting process. This written dispute is to create a formal record of my claim. I request that the charge be reversed and my account credited.

Sincerely,
[Your Name]
[Account / Card ending in XXXX]`;
  }

  function canContinue() {
    switch (step) {
      case 1: return issuerName.trim().length > 0;
      case 2: return facts.trim().length > 0;
      case 3: return objective.trim().length > 0;
      case 5: return allChecked;
      case 7: return recipient.name && recipient.address1 && recipient.city && recipient.state && recipient.zip;
      default: return true;
    }
  }

  function next() { if (step === 4 && !draft) setDraft(generateDraft()); setStep((s) => Math.min(s + 1, stepLabels.length - 1)); }
  function back() { setStep((s) => Math.max(s - 1, 0)); }

  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400"><span>Step {step + 1} of {stepLabels.length}</span><span>{progress}% complete</span></div>
            <div className="progress-track mt-2"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
            <div className="mt-3 hidden justify-between text-[11px] text-slate-300 sm:flex">{stepLabels.map((label, i) => (<span key={label} className={i <= step ? "font-semibold text-teal-700" : ""}>{label}</span>))}</div>
          </div>

          <div className="card p-6 md:p-10">
            {step === 0 && (<><div className="eyebrow">Guided workflow</div><h1 className="mt-3 text-3xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Dispute an unauthorized charge</h1><p className="mt-4 leading-7 text-slate-400">We'll help you identify the charge, state the facts, prepare a formal written dispute, and mail it with proof of delivery. This creates a physical record to complement your card issuer's fraud reporting process.</p><div className="alert alert-warning mt-6"><ShieldAlert size={18} className="mb-2 shrink-0" />{definition.disclaimer}</div><div className="alert alert-info mt-4"><AlertTriangle size={16} className="inline mr-1" /> <strong>Important:</strong> Call your card issuer immediately to report fraud and freeze your card. This written dispute creates a formal paper trail but does not replace your issuer's fraud reporting process.</div><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Identify the charge and issuer", "State what happened", "Review and edit the dispute letter", "Choose mailing and send certified"].map((item, i) => (<div key={item} className="flex items-center gap-2 text-sm text-slate-500"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-400">{i + 1}</span>{item}</div>))}</div></>)}

            {step === 1 && (<><div className="eyebrow">1 · Upload / identify</div><h2 className="mt-3 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Start with the charge</h2><p className="mt-3 text-slate-400">Upload your statement or identify the charge details.</p><label className="upload-zone mt-7 block"><FileUp className="mx-auto text-slate-400" size={28} /><span className="mt-3 block font-semibold text-teal-600">Upload statement</span><span className="mt-1 block text-sm text-slate-300">PDF, JPG, or PNG</span><input type="file" accept="application/pdf,image/jpeg,image/png" className="sr-only" /></label><div className="mt-6 grid gap-4 sm:grid-cols-2"><div><label className="input-label">Card issuer / bank *</label><input className="input-field" value={issuerName} onChange={(e) => setIssuerName(e.target.value)} placeholder="Chase, BofA, Capital One, etc." /></div><div><label className="input-label">Card type</label><input className="input-field" value={cardType} onChange={(e) => setCardType(e.target.value)} placeholder="Visa, Mastercard, Debit, etc." /></div><div><label className="input-label">Merchant name</label><input className="input-field" value={merchantName} onChange={(e) => setMerchantName(e.target.value)} placeholder="As it appears on the statement" /></div><div><label className="input-label">Charge date</label><input type="date" className="input-field" value={chargeDate} onChange={(e) => setChargeDate(e.target.value)} /></div><div className="sm:col-span-2"><label className="input-label">Charge amount</label><input className="input-field" value={chargeAmount} onChange={(e) => setChargeAmount(e.target.value)} placeholder="$X,XXX.XX" /></div></div></>)}

            {step === 2 && (<><div className="eyebrow">2 · Your facts</div><h2 className="mt-3 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>What happened?</h2><p className="mt-3 text-slate-400">Use your own words. Only include information you can verify.</p><textarea className="input-field mt-6 min-h-48" value={facts} onChange={(e) => setFacts(e.target.value)} /><div className="alert alert-info mt-4"><strong>Tip:</strong> Include when you noticed the charge, whether you authorized it, and whether you've already contacted the issuer. Reference the merchant name and amount.</div></>)}
            {step === 3 && (<><div className="eyebrow">3 · Your objective</div><h2 className="mt-3 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>What do you want done?</h2><textarea className="input-field mt-6 min-h-40" value={objective} onChange={(e) => setObjective(e.target.value)} placeholder="Example: I want the unauthorized charge reversed and my account credited for the full amount." /></>)}
            {step === 4 && (<><div className="eyebrow">4 · Draft</div><h2 className="mt-3 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Prepare your dispute letter</h2><p className="mt-3 text-slate-400">Review every fact, name, date, and statement before sending.</p><textarea className="input-field mt-6 min-h-72 font-mono text-sm leading-6" value={draft} onChange={(e) => setDraft(e.target.value)} /><div className="alert alert-warning mt-4"><ShieldAlert size={16} className="shrink-0" /> This draft was generated from your input. It is not legal advice. Review and edit carefully.</div></>)}
            {step === 5 && (<><div className="eyebrow">5 · Review</div><h2 className="mt-3 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Review before anything is mailed</h2><p className="mt-3 text-slate-400">Please confirm each item below.</p><div className="mt-6 space-y-3">{reviewChecks.map((item, i) => (<label key={item} className="check-card"><input type="checkbox" checked={checks[i]} onChange={(e) => setChecks((c) => c.map((v, j) => (j === i ? e.target.checked : v)))} />{item}</label>))}</div></>)}
            {step === 6 && (<><div className="eyebrow">6 · Attachments</div><h2 className="mt-3 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Add supporting documents</h2><p className="mt-3 text-slate-400">Attach your statement showing the charge and any correspondence with the issuer.</p><label className="upload-zone mt-6 block"><FileUp className="mx-auto text-slate-400" size={28} /><span className="mt-3 block font-semibold text-teal-600">Add attachments</span><span className="mt-1 block text-sm text-slate-300">Statement, fraud report, correspondence</span><input type="file" accept="application/pdf,image/jpeg,image/png" multiple className="sr-only" /></label></>)}
            {step === 7 && (<><div className="eyebrow">7 · Recipient</div><h2 className="mt-3 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Where should we send it?</h2><p className="mt-3 text-slate-400">Enter your card issuer's dispute / billing inquiry address.</p><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="sm:col-span-2"><label className="input-label">Recipient name *</label><input className="input-field" value={recipient.name} onChange={(e) => setRecipient({ ...recipient, name: e.target.value })} placeholder="Billing Disputes Department" /></div><div className="sm:col-span-2"><label className="input-label">Organization</label><input className="input-field" value={recipient.org} onChange={(e) => setRecipient({ ...recipient, org: e.target.value })} placeholder={issuerName || "Card Issuer"} /></div><div className="sm:col-span-2"><label className="input-label">Address line 1 *</label><input className="input-field" value={recipient.address1} onChange={(e) => setRecipient({ ...recipient, address1: e.target.value })} /></div><div className="sm:col-span-2"><label className="input-label">Address line 2</label><input className="input-field" value={recipient.address2} onChange={(e) => setRecipient({ ...recipient, address2: e.target.value })} /></div><div><label className="input-label">City *</label><input className="input-field" value={recipient.city} onChange={(e) => setRecipient({ ...recipient, city: e.target.value })} /></div><div><label className="input-label">State *</label><input className="input-field" value={recipient.state} onChange={(e) => setRecipient({ ...recipient, state: e.target.value })} /></div><div><label className="input-label">ZIP Code *</label><input className="input-field" value={recipient.zip} onChange={(e) => setRecipient({ ...recipient, zip: e.target.value })} /></div></div></>)}
            {step === 8 && (<><div className="eyebrow">8 · Mailing options</div><h2 className="mt-3 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Choose your mail type</h2><p className="mt-3 text-slate-400">For written disputes, certified mail with return receipt is recommended for proof of timely submission.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{mailOptions.map(({ id, label, price, desc, icon: Icon }) => (<div key={id} className={`mail-option ${mailType === id ? "selected" : ""}`} onClick={() => setMailType(id)}><div className="flex items-start justify-between"><div className="flex items-center gap-3"><Icon size={20} className="text-teal-600" /><div><p className="font-semibold text-teal-700">{label}</p><p className="text-xs text-slate-400">{desc}</p></div></div><div className="text-right"><p className="text-lg font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>{price}</p>{mailType === id && <Check size={16} className="ml-auto text-rose-500" />}</div></div></div>))}</div></>)}
            {step === 9 && (<><div className="eyebrow">9 · Checkout</div><h2 className="mt-3 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Review and pay</h2><div className="mt-6 space-y-3"><div className="flex items-center justify-between rounded-lg border border-warm-border px-4 py-3 text-sm"><span className="text-slate-500">Mail type</span><span className="font-semibold text-teal-700">{mailOptions.find((m) => m.id === mailType)?.label}</span></div><div className="flex items-center justify-between rounded-lg border border-warm-border px-4 py-3 text-sm"><span className="text-slate-500">Recipient</span><span className="font-semibold text-teal-700">{recipient.name || "—"}</span></div><div className="flex items-center justify-between rounded-lg border border-warm-border px-4 py-3 text-sm"><span className="text-slate-500">Total</span><span className="text-lg font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>{mailOptions.find((m) => m.id === mailType)?.price}</span></div></div><div className="alert alert-info mt-4"><CreditCard size={16} className="shrink-0" /> Secure checkout via Stripe is being connected.</div></>)}
            {step === 10 && (<div className="text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-50"><CheckCircle2 size={32} className="text-rose-500" /></div><h2 className="mt-5 text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Your dispute has been submitted</h2><p className="mt-3 text-slate-400">Your written dispute is being prepared for mailing.</p><div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-warm-border px-4 py-3 text-sm"><PackageCheck size={16} className="text-rose-500" /><span className="text-slate-500">Tracking number:</span><span className="font-mono font-semibold text-teal-700">— Pending —</span></div><div className="mt-8 flex justify-center gap-3"><Link to="/" className="btn-outline">Back to home</Link><Link to="/workflows/unauthorized-charge" className="btn-primary">Start another</Link></div></div>)}

            {step < 10 && (<div className="mt-8 flex items-center justify-between"><button onClick={back} disabled={step === 0} className="btn-ghost disabled:opacity-30"><ArrowLeft size={16} /> Back</button><button onClick={next} disabled={!canContinue()} className="btn-primary">{step === 9 ? "Pay and send" : "Continue"} <ArrowRight size={16} /></button></div>)}
          </div>
          <div className="mt-6 text-center"><Link to="/" className="text-sm text-slate-400 hover:text-rose-600">← Back to Dispute Mail</Link></div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
