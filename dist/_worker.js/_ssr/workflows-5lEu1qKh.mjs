import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as FileExclamationPoint, E as CreditCard, P as ArrowRight, S as FileText, a as Stethoscope, j as Building2, l as ShieldCheck, p as ReceiptText } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter } from "./router-Ch5bc3-4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workflows-5lEu1qKh.js
var import_jsx_runtime = require_jsx_runtime();
var groups = [
	{
		title: "Credit & debt disputes",
		description: "Search and start from the exact credit or debt problem you need to challenge.",
		items: [
			{
				title: "Credit Report Error",
				intent: "credit dispute letter",
				description: "Dispute inaccurate, incomplete, or unverifiable information reported to a credit bureau.",
				href: "/workflows/credit-report",
				icon: FileText
			},
			{
				title: "Debt Validation",
				intent: "debt collection dispute",
				description: "Request validation of a debt and preserve the correspondence and mailing record.",
				href: "/workflows/debt-validation",
				icon: ShieldCheck
			},
			{
				title: "Billing Error",
				intent: "dispute letter",
				description: "Challenge an incorrect bill, charge, service amount, or account statement.",
				href: "/workflows/billing-error",
				icon: CreditCard
			}
		]
	},
	{
		title: "Charges & billing",
		description: "Resolve unauthorized charges and inaccurate service bills with a documented response.",
		items: [
			{
				title: "Unauthorized Charge",
				intent: "dispute unauthorized charge",
				description: "Prepare a written dispute for an unauthorized or fraudulent charge with the issuer or bank.",
				href: "/workflows/unauthorized-charge",
				icon: FileExclamationPoint
			},
			{
				title: "Medical Billing",
				intent: "dispute medical bill",
				description: "Organize the facts behind an incorrect medical bill and prepare correspondence to the provider or billing department.",
				href: "/workflows/billing-error",
				icon: Stethoscope
			},
			{
				title: "Utility / Service Billing",
				intent: "dispute billing error",
				description: "Challenge an incorrect utility, subscription, or service charge with a clear factual record.",
				href: "/workflows/billing-error",
				icon: ReceiptText
			}
		]
	},
	{
		title: "Other dispute situations",
		description: "Use the same evidence-first correspondence pattern when the underlying dispute does not fit a generic letter template.",
		items: [{
			title: "Dispute a Creditor Account",
			intent: "debt dispute letter",
			description: "Prepare a documented dispute around an account balance, ownership, reporting, or other creditor issue.",
			href: "/workflows/debt-validation",
			icon: Building2
		}]
	}
];
function WorkflowDirectory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-warm-border bg-teal-50 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container max-w-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "DISPUTE MAIL WORKFLOW DIRECTORY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-4xl text-4xl font-bold leading-tight text-teal-700 md:text-6xl",
							style: { fontFamily: "var(--font-serif)" },
							children: "Find the dispute workflow that matches the problem."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-3xl text-lg leading-8 text-slate-500",
							children: "Dispute Mail is organized around concrete dispute situations instead of one generic letter builder. Choose the closest match, review the facts, and continue into the guided workflow."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/workflows/credit-report",
								className: "btn-rose",
								children: ["Start a dispute ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "btn-outline",
								children: "Back to overview"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-14",
					children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: group.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-slate-400",
							children: group.description
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: group.items.map(({ title, intent, description, href, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: href,
							className: "card group p-6 transition hover:-translate-y-1 hover:shadow-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										size: 24,
										className: "text-teal-700"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-rose-500",
									children: ["Search intent: ", intent]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-lg font-semibold text-teal-700",
									style: { fontFamily: "var(--font-serif)" },
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-6 text-slate-400",
									children: description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-600",
									children: ["Open workflow ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										size: 16,
										className: "transition-transform group-hover:translate-x-1"
									})]
								})
							]
						}, `${title}-${href}`))
					})] }, group.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { WorkflowDirectory as component };
