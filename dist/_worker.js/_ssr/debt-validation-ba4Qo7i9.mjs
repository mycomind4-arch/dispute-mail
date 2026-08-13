import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, E as CircleCheck, O as Check, a as Stamp, g as Mail, j as ArrowLeft, l as ShieldAlert, n as TriangleAlert, p as PackageCheck, w as CreditCard, y as FileUp } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter } from "./router-DFuyLIZY.mjs";
import { t as workflows } from "./workflows-DWqokvp-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/debt-validation-ba4Qo7i9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stepLabels = [
	"Start",
	"Debt",
	"Facts",
	"Objective",
	"Draft",
	"Review",
	"Attachments",
	"Recipient",
	"Mailing",
	"Checkout",
	"Done"
];
var mailOptions = [
	{
		id: "first_class",
		label: "First-Class",
		price: "$3.99",
		desc: "3–5 business days · Tracking included",
		icon: Mail
	},
	{
		id: "certified",
		label: "Certified",
		price: "$8.99",
		desc: "Signature tracking · Proof of delivery",
		icon: PackageCheck
	},
	{
		id: "certified_rr",
		label: "Certified + Return Receipt",
		price: "$12.99",
		desc: "Signed return receipt card",
		icon: ShieldAlert
	},
	{
		id: "registered",
		label: "Registered",
		price: "$15.99",
		desc: "Highest security · Insured · Signature required",
		icon: Stamp
	}
];
var reviewChecks = [
	"I reviewed every factual statement in this request.",
	"Collector name, account number, and contact date are correct.",
	"I reviewed the FDCPA validation request requirements.",
	"I understand Dispute Mail is not providing legal advice."
];
function DebtValidation() {
	const definition = workflows["debt-validation"];
	const [step, setStep] = (0, import_react.useState)(0);
	const [collectorName, setCollectorName] = (0, import_react.useState)("");
	const [accountNumber, setAccountNumber] = (0, import_react.useState)("");
	const [contactDate, setContactDate] = (0, import_react.useState)("");
	const [debtAmount, setDebtAmount] = (0, import_react.useState)("");
	const [facts, setFacts] = (0, import_react.useState)("");
	const [objective, setObjective] = (0, import_react.useState)("");
	const [draft, setDraft] = (0, import_react.useState)("");
	const [checks, setChecks] = (0, import_react.useState)(reviewChecks.map(() => false));
	const [mailType, setMailType] = (0, import_react.useState)("certified_rr");
	const [recipient, setRecipient] = (0, import_react.useState)({
		name: "",
		org: "",
		address1: "",
		address2: "",
		city: "",
		state: "",
		zip: ""
	});
	const progress = (0, import_react.useMemo)(() => Math.round(step / (stepLabels.length - 1) * 100), [step]);
	const allChecked = checks.every(Boolean);
	function generateDraft() {
		return `Re: Request for Debt Validation
${collectorName ? `Collector: ${collectorName}` : ""}
${accountNumber ? `Account/Reference No.: ${accountNumber}` : ""}
${debtAmount ? `Stated Amount: ${debtAmount}` : ""}
${contactDate ? `First Contact Date: ${contactDate}` : ""}

Dear Sir or Madam,

I am writing to request validation of the debt referenced above. ${objective || "[Your objective will appear here.]"}

${facts || "[The facts you provided will appear here.]"}

Under the Fair Debt Collection Practices Act (FDCPA), I have 30 days from first contact to request validation. I am requesting that you provide: (1) proof that I owe the debt, (2) the amount of the debt, (3) the name of the original creditor, and (4) proof that you are licensed to collect this debt in my state.

Sincerely,
[Your Name]`;
	}
	function canContinue() {
		switch (step) {
			case 1: return collectorName.trim().length > 0;
			case 2: return facts.trim().length > 0;
			case 3: return objective.trim().length > 0;
			case 5: return allChecked;
			case 7: return recipient.name && recipient.address1 && recipient.city && recipient.state && recipient.zip;
			default: return true;
		}
	}
	function next() {
		if (step === 4 && !draft) setDraft(generateDraft());
		setStep((s) => Math.min(s + 1, stepLabels.length - 1));
	}
	function back() {
		setStep((s) => Math.max(s - 1, 0));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container py-8 md:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs font-semibold text-slate-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Step ",
										step + 1,
										" of ",
										stepLabels.length
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [progress, "% complete"] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "progress-track mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "progress-fill",
										style: { width: `${progress}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 hidden justify-between text-[11px] text-slate-300 sm:flex",
									children: stepLabels.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: i <= step ? "font-semibold text-teal-700" : "",
										children: label
									}, label))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card p-6 md:p-10",
							children: [
								step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "Guided workflow"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-3 text-3xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "Request debt validation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 leading-7 text-slate-400",
										children: "Under the FDCPA, you have 30 days from first contact to request debt validation. We'll help you organize the information, prepare a professional validation request, and mail it with proof of delivery."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alert alert-warning mt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
											size: 18,
											className: "mb-2 shrink-0"
										}), definition.disclaimer]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alert alert-danger mt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
												size: 16,
												className: "inline mr-1"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Critical:" }),
											" The 30-day clock starts from first contact. If you're near the deadline, mail certified immediately."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 grid gap-3 sm:grid-cols-2",
										children: [
											"Identify the collector and debt",
											"State what you want validated",
											"Review and edit the letter",
											"Choose mailing and send certified"
										].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-sm text-slate-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-400",
												children: i + 1
											}), item]
										}, item))
									})
								] }),
								step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "1 · Upload / identify"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "Start with the collection notice"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-slate-400",
										children: "Upload the collection letter or identify the key details."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "upload-zone mt-7 block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, {
												className: "mx-auto text-slate-400",
												size: 28
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-3 block font-semibold text-teal-600",
												children: "Upload collection letter"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-sm text-slate-300",
												children: "PDF, JPG, or PNG"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "application/pdf,image/jpeg,image/png",
												className: "sr-only"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "Collector / agency name *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "input-field",
												value: collectorName,
												onChange: (e) => setCollectorName(e.target.value),
												placeholder: "Collection agency name"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "Account / reference number"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "input-field",
												value: accountNumber,
												onChange: (e) => setAccountNumber(e.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "Stated debt amount"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "input-field",
												value: debtAmount,
												onChange: (e) => setDebtAmount(e.target.value),
												placeholder: "$X,XXX.XX"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "First contact date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												className: "input-field",
												value: contactDate,
												onChange: (e) => setContactDate(e.target.value)
											})] })
										]
									})
								] }),
								step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "2 · Your facts"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "What do you know about this debt?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-slate-400",
										children: "Use your own words. Only include information you can verify."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "input-field mt-6 min-h-48",
										value: facts,
										onChange: (e) => setFacts(e.target.value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alert alert-info mt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }), " Include whether you recognize the debt, the original creditor if known, and any discrepancies in the amount or account details."]
									})
								] }),
								step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "3 · Your objective"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "What do you want validated?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "input-field mt-6 min-h-40",
										value: objective,
										onChange: (e) => setObjective(e.target.value),
										placeholder: "Example: I do not recognize this debt and am requesting full validation including proof that I owe it and the original creditor's name."
									})
								] }),
								step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "4 · Draft"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "Prepare your validation request"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-slate-400",
										children: "Review every fact, name, date, and statement before sending."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "input-field mt-6 min-h-72 font-mono text-sm leading-6",
										value: draft,
										onChange: (e) => setDraft(e.target.value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alert alert-warning mt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
											size: 16,
											className: "shrink-0"
										}), " This draft was generated from your input. It is not legal advice. Review and edit carefully."]
									})
								] }),
								step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "5 · Review"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "Review before anything is mailed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-slate-400",
										children: "Please confirm each item below."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 space-y-3",
										children: reviewChecks.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "check-card",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: checks[i],
												onChange: (e) => setChecks((c) => c.map((v, j) => j === i ? e.target.checked : v))
											}), item]
										}, item))
									})
								] }),
								step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "6 · Attachments"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "Add supporting documents"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-slate-400",
										children: "Attach the collection letter and any relevant account records."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "upload-zone mt-6 block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, {
												className: "mx-auto text-slate-400",
												size: 28
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-3 block font-semibold text-teal-600",
												children: "Add attachments"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-sm text-slate-300",
												children: "Collection letter, account statements"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "application/pdf,image/jpeg,image/png",
												multiple: true,
												className: "sr-only"
											})
										]
									})
								] }),
								step === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "7 · Recipient"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "Where should we send it?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-slate-400",
										children: "Enter the collection agency's mailing address from their letter."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "input-label",
													children: "Recipient name *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "input-field",
													value: recipient.name,
													onChange: (e) => setRecipient({
														...recipient,
														name: e.target.value
													}),
													placeholder: collectorName || "Collection Agency"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "input-label",
													children: "Organization"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "input-field",
													value: recipient.org,
													onChange: (e) => setRecipient({
														...recipient,
														org: e.target.value
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "input-label",
													children: "Address line 1 *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "input-field",
													value: recipient.address1,
													onChange: (e) => setRecipient({
														...recipient,
														address1: e.target.value
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "input-label",
													children: "Address line 2"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "input-field",
													value: recipient.address2,
													onChange: (e) => setRecipient({
														...recipient,
														address2: e.target.value
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "City *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "input-field",
												value: recipient.city,
												onChange: (e) => setRecipient({
													...recipient,
													city: e.target.value
												})
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "State *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "input-field",
												value: recipient.state,
												onChange: (e) => setRecipient({
													...recipient,
													state: e.target.value
												})
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "ZIP Code *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "input-field",
												value: recipient.zip,
												onChange: (e) => setRecipient({
													...recipient,
													zip: e.target.value
												})
											})] })
										]
									})
								] }),
								step === 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "8 · Mailing options"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "Choose your mail type"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-slate-400",
										children: "For debt validation requests, certified mail with return receipt is strongly recommended for proof of timely response."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 grid gap-3 sm:grid-cols-2",
										children: mailOptions.map(({ id, label, price, desc, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `mail-option ${mailType === id ? "selected" : ""}`,
											onClick: () => setMailType(id),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														size: 20,
														className: "text-teal-600"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-semibold text-teal-700",
														children: label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-slate-400",
														children: desc
													})] })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-right",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-lg font-bold text-teal-700",
														style: { fontFamily: "var(--font-serif)" },
														children: price
													}), mailType === id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
														size: 16,
														className: "ml-auto text-rose-500"
													})]
												})]
											})
										}, id))
									})
								] }),
								step === 9 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "9 · Checkout"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl font-bold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "Review and pay"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between rounded-lg border border-warm-border px-4 py-3 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-slate-500",
													children: "Mail type"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-teal-700",
													children: mailOptions.find((m) => m.id === mailType)?.label
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between rounded-lg border border-warm-border px-4 py-3 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-slate-500",
													children: "Recipient"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-teal-700",
													children: recipient.name || "—"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between rounded-lg border border-warm-border px-4 py-3 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-slate-500",
													children: "Total"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-lg font-bold text-teal-700",
													style: { fontFamily: "var(--font-serif)" },
													children: mailOptions.find((m) => m.id === mailType)?.price
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alert alert-info mt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
											size: 16,
											className: "shrink-0"
										}), " Secure checkout via Stripe is being connected."]
									})
								] }),
								step === 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-50",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
												size: 32,
												className: "text-rose-500"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-5 text-2xl font-bold text-teal-700",
											style: { fontFamily: "var(--font-serif)" },
											children: "Your request has been submitted"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-slate-400",
											children: "Your debt validation request is being prepared for mailing."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 inline-flex items-center gap-2 rounded-xl border border-warm-border px-4 py-3 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, {
													size: 16,
													className: "text-rose-500"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-slate-500",
													children: "Tracking number:"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono font-semibold text-teal-700",
													children: "— Pending —"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex justify-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/",
												className: "btn-outline",
												children: "Back to home"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/workflows/debt-validation",
												className: "btn-primary",
												children: "Start another"
											})]
										})
									]
								}),
								step < 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: back,
										disabled: step === 0,
										className: "btn-ghost disabled:opacity-30",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: next,
										disabled: !canContinue(),
										className: "btn-primary",
										children: [
											step === 9 ? "Pay and send" : "Continue",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "text-sm text-slate-400 hover:text-rose-600",
								children: "← Back to Dispute Mail"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { DebtValidation as component };
