import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Check, D as Clock, E as CreditCard, F as ArrowLeft, O as CircleCheck, P as ArrowRight, h as PackageCheck, o as Stamp, u as ShieldAlert, v as Mail, x as FileUp } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter } from "./router-RzXvS3pE.mjs";
import { t as workflows } from "./workflows-DkkQ4FvX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/credit-report-D7RffUi8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stepLabels = [
	"Start",
	"Error",
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
		id: "standard",
		label: "Standard",
		price: "$4.99",
		desc: "3–7 business days · Tracking included",
		icon: Mail
	},
	{
		id: "certified",
		label: "Certified",
		price: "$14.94",
		desc: "Delivery tracking + confirmation · 3–7 days",
		icon: PackageCheck
	},
	{
		id: "registered",
		label: "Registered",
		price: "$32.49",
		desc: "Secure handling + tracking · 5–10 days",
		icon: Stamp
	}
];
var reviewChecks = [
	"I reviewed every factual statement in this dispute.",
	"Account numbers, dates, and bureau names are correct.",
	"I reviewed the credit report and the disputed items.",
	"I understand Dispute Mail is not providing legal advice."
];
function CreditReport() {
	const definition = workflows["credit-report"];
	const [step, setStep] = (0, import_react.useState)(0);
	const [bureau, setBureau] = (0, import_react.useState)("");
	const [accountNumber, setAccountNumber] = (0, import_react.useState)("");
	const [reportDate, setReportDate] = (0, import_react.useState)("");
	const [errorType, setErrorType] = (0, import_react.useState)("");
	const [facts, setFacts] = (0, import_react.useState)("");
	const [objective, setObjective] = (0, import_react.useState)("");
	const [draft, setDraft] = (0, import_react.useState)("");
	const [checks, setChecks] = (0, import_react.useState)(reviewChecks.map(() => false));
	const [mailType, setMailType] = (0, import_react.useState)("certified");
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
		return `Re: Dispute of Credit Report Information
${bureau ? `Credit Bureau: ${bureau}` : ""}
${accountNumber ? `Account/Reference No.: ${accountNumber}` : ""}
${reportDate ? `Report Date: ${reportDate}` : ""}
${errorType ? `Error Type: ${errorType}` : ""}

Dear Sir or Madam,

I am writing to dispute information on my credit report that I believe is inaccurate. ${objective || "[Your objective will appear here.]"}

${facts || "[The facts you provided will appear here.]"}

Under the Fair Credit Reporting Act (FCRA), I request that you investigate this dispute and correct or remove the inaccurate information. I have enclosed supporting documentation.

Sincerely,
[Your Name]
[Your Address]
[Your SSN (last 4 digits)]`;
	}
	function canContinue() {
		switch (step) {
			case 1: return bureau.trim().length > 0;
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
										children: "Dispute a credit report error"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 leading-7 text-slate-400",
										children: "We'll help you identify the error, state the facts, prepare an editable dispute letter, and move toward mailing. Nothing is sent until you review and approve it."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alert alert-warning mt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
											size: 18,
											className: "mb-2 shrink-0"
										}), definition.disclaimer]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alert alert-info mt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
												size: 16,
												className: "inline mr-1"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "FCRA timeline:" }),
											" Credit bureaus have 30–45 days to investigate your dispute. Mail certified with return receipt to prove you submitted on time."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 grid gap-3 sm:grid-cols-2",
										children: [
											"Identify the credit bureau and error",
											"State what's wrong and what you want",
											"Review and edit the dispute letter",
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
										children: "Start with the error"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-slate-400",
										children: "Upload your credit report or identify the disputed item here."
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
												children: "Upload credit report"
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
												children: "Credit bureau *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												className: "input-field",
												value: bureau,
												onChange: (e) => setBureau(e.target.value),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "",
														children: "Select bureau..."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Equifax" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Experian" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "TransUnion" })
												]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "Account / reference number"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "input-field",
												value: accountNumber,
												onChange: (e) => setAccountNumber(e.target.value),
												placeholder: "Account number on the report"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "Report date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												className: "input-field",
												value: reportDate,
												onChange: (e) => setReportDate(e.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "input-label",
												children: "Error type"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "input-field",
												value: errorType,
												onChange: (e) => setErrorType(e.target.value),
												placeholder: "Wrong account, wrong amount, not my debt, etc."
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
										children: "What's wrong on the report?"
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }), " Be specific about which item is wrong (account name, number, date, amount) and why it's incorrect. Reference your credit report by date."]
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
										children: "What do you want the bureau to do?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "input-field mt-6 min-h-40",
										value: objective,
										onChange: (e) => setObjective(e.target.value),
										placeholder: "Example: I want the incorrect collection account removed from my credit report because it does not belong to me."
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
										children: "Prepare your dispute letter"
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
										children: "Attach your credit report, proof of identity, and any evidence supporting your dispute."
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
												children: "Credit report, ID, account statements"
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
										children: "Enter the credit bureau's dispute mailing address."
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
													placeholder: bureau || "Credit Bureau — Dispute Department"
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
													}),
													placeholder: bureau || "Equifax / Experian / TransUnion"
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
										children: "For credit disputes, certified mail with return receipt is strongly recommended for proof of timely submission."
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
											children: "Your dispute has been submitted"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-slate-400",
											children: "Your dispute letter is being prepared for mailing. The bureau has 30–45 days to investigate."
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
												to: "/workflows/credit-report",
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
export { CreditReport as component };
