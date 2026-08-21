import { useState } from "react";
import { useAuth } from "@/lib/auth";

export interface DisputeMailFunnelProps {
  workflowId: string;
  workflowTitle: string;
  draft: string;
  documentId: string;
  caseId?: string | null;
  draftValidated: boolean;
  humanApproved: boolean;
  recipientComplete?: boolean;
}

const OPTIONS = [
  { id: "standard", label: "Standard", price: "$4.99", cents: 499, detail: "3–7 business days · Tracking included" },
  { id: "certified", label: "Certified", price: "$14.94", cents: 1494, detail: "Delivery tracking + confirmation" },
  { id: "registered", label: "Registered", price: "$32.49", cents: 3249, detail: "Secure handling + tracking" },
] as const;

export function DisputeMailFunnel({ workflowId, workflowTitle, draft, documentId, caseId, draftValidated, humanApproved }: DisputeMailFunnelProps) {
  const { accessToken, user } = useAuth();
  const [method, setMethod] = useState("certified");
  const [approved, setApproved] = useState(humanApproved);
  const [recipient, setRecipient] = useState({ name: "", address1: "", address2: "", city: "", state: "", zip: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const complete = Boolean(recipient.name && recipient.address1 && recipient.city && recipient.state && recipient.zip);
  const selected = OPTIONS.find((item) => item.id === method) ?? OPTIONS[1];
  const canCheckout = Boolean(accessToken && user && draftValidated && approved && complete);

  const beginCheckout = async () => {
    if (!canCheckout || !accessToken) return;
    setBusy(true); setError(null);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          workflowId,
          workflowTitle,
          caseId: caseId ?? null,
          draftContent: draft,
          documentId,
          mailingMethod: method,
          recipient,
          matterReference: workflowId,
          matterType: "dispute-mail",
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.checkoutUrl) throw new Error(payload?.error || `Unable to start secure checkout (${response.status}).`);
      window.location.assign(payload.checkoutUrl);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to start checkout.");
      setBusy(false);
    }
  };

  return <div className="card mt-7 p-7"><div className="eyebrow">APPROVAL + MAILING</div><h2 className="mt-2 text-2xl font-semibold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>Review, approve, and mail</h2><p className="mt-2 text-sm leading-6 text-slate-500">The dispute engine must pass validation and you must explicitly approve the draft before payment can begin.</p>
    <div className="mt-5 rounded-xl border border-warm-border bg-white p-4"><label className="flex items-start gap-3 text-sm text-slate-600"><input type="checkbox" checked={approved} onChange={(e) => setApproved(e.target.checked)} className="mt-1" disabled={!draftValidated} /><span><strong className="text-teal-700">I approve this response for mailing.</strong><br />I reviewed the facts, evidence, requested outcome, recipient, and generated draft.</span></label></div>
    <div className="mt-5 grid gap-4 sm:grid-cols-2"><input className="input-field sm:col-span-2" placeholder="Recipient name *" value={recipient.name} onChange={(e) => setRecipient({ ...recipient, name: e.target.value })} /><input className="input-field sm:col-span-2" placeholder="Address line 1 *" value={recipient.address1} onChange={(e) => setRecipient({ ...recipient, address1: e.target.value })} /><input className="input-field sm:col-span-2" placeholder="Address line 2" value={recipient.address2} onChange={(e) => setRecipient({ ...recipient, address2: e.target.value })} /><input className="input-field" placeholder="City *" value={recipient.city} onChange={(e) => setRecipient({ ...recipient, city: e.target.value })} /><input className="input-field" placeholder="State *" value={recipient.state} onChange={(e) => setRecipient({ ...recipient, state: e.target.value })} /><input className="input-field" placeholder="ZIP *" value={recipient.zip} onChange={(e) => setRecipient({ ...recipient, zip: e.target.value })} /></div>
    <div className="mt-5 space-y-3">{OPTIONS.map((option) => <button type="button" key={option.id} onClick={() => setMethod(option.id)} className={`flex w-full items-center justify-between rounded-xl border p-4 text-left ${method === option.id ? "border-teal-500 bg-teal-50" : "border-warm-border bg-white"}`}><span><span className="block font-semibold text-teal-700">{option.label}</span><span className="mt-1 block text-xs text-slate-400">{option.detail}</span></span><span className="font-serif text-lg text-teal-700">{option.price}</span></button>)}</div>
    {error && <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">{error}</div>}
    <div className="mt-5 flex items-center justify-between"><span className="text-sm text-slate-500">Total: <strong className="text-teal-700">{selected.price}</strong></span><button type="button" onClick={beginCheckout} disabled={!canCheckout || busy} className="btn-rose disabled:opacity-50">{busy ? "Opening checkout…" : "Pay and send"}</button></div>
    {!draftValidated && <p className="mt-3 text-xs text-rose-600">Mailing is blocked until the draft passes validation.</p>}
  </div>;
}
