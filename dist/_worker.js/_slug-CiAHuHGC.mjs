import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { T as Clock, j as ArrowLeft, n as TriangleAlert, p as PackageCheck, x as FileExclamationPoint } from "./_libs/lucide-react.mjs";
import { i as SiteHeader, n as Route$4, r as SiteFooter } from "./_ssr/router-DFuyLIZY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CiAHuHGC.js
var import_jsx_runtime = require_jsx_runtime();
function GuidePage() {
	const slug = Route$4.useParams().slug;
	const guide = {
		"fcra-credit-disputes": {
			title: "FCRA Credit Disputes: Your Rights Explained",
			category: "Credit Disputes",
			readTime: "5 min",
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FCRAContent, {})
		},
		"fdcpa-debt-validation": {
			title: "FDCPA Debt Validation: The 30-Day Rule",
			category: "Debt Validation",
			readTime: "4 min",
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FDCPAContent, {})
		},
		"medical-billing-disputes": {
			title: "How to Dispute a Medical Billing Error",
			category: "Billing Disputes",
			readTime: "5 min",
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BillingContent, {})
		}
	}[slug];
	if (!guide) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container py-20 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-teal-700",
					children: "Guide not found"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/resources",
					className: "btn-outline mt-6",
					children: "Back to resources"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white py-12 md:py-16 border-b border-warm-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/resources",
								className: "inline-flex items-center gap-1 text-sm text-slate-400 hover:text-rose-600",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 15 }), " All guides"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-3 text-xs text-slate-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-rose-600",
									children: guide.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 12 }),
										" ",
										guide.readTime
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-3xl font-bold text-teal-700 md:text-4xl",
								style: { fontFamily: "var(--font-serif)" },
								children: guide.title
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-10 md:py-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "container max-w-2xl prose-content",
						children: guide.content
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					style: { background: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)" },
					className: "py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold text-white",
								style: { fontFamily: "var(--font-serif)" },
								children: "Ready to dispute?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-white/60",
								children: "Start a guided workflow and get your dispute in the mail today."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/workflows/credit-report",
								className: "btn-rose mt-6",
								children: "Start now"
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function H2({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mt-10 text-xl font-bold text-teal-700",
		style: { fontFamily: "var(--font-serif)" },
		children
	});
}
function P({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-4 text-sm leading-7 text-slate-500",
		children
	});
}
function UL({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-2 pl-5 text-sm text-slate-500",
		style: { listStyle: "disc" },
		children
	});
}
function Callout({ children, type = "info" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mt-6 ${type === "warning" ? "alert alert-warning" : type === "success" ? "alert alert-success" : "alert alert-info"}`,
		children
	});
}
function FCRAContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The Fair Credit Reporting Act (FCRA) gives you the right to dispute inaccurate information on your credit report. Here's what you need to know." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Your rights under the FCRA" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Right to dispute:" }), " You can dispute any information you believe is inaccurate, incomplete, or unverifiable"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "30–45 day investigation:" }), " Credit bureaus must investigate within 30 days (45 if you add documentation after filing)"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Right to results:" }), " The bureau must tell you the results in writing"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Right to correction:" }), " If the information is inaccurate, it must be corrected or removed"] })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, {
			type: "warning",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					size: 16,
					className: "inline mr-1"
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Important:" }),
				" You can dispute with the credit bureau, the furnisher (the company that reported the information), or both. Disputing with both maximizes your chances."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "What to include in your dispute" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Your full name and address" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Last 4 digits of your SSN" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The specific item you're disputing and why" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Any supporting documentation" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, {
			type: "success",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, {
					size: 16,
					className: "inline mr-1"
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
				" Mail your dispute certified with return receipt. The postmark proves you submitted within the investigation window."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "text-xs text-slate-300 mt-8",
			children: "This guide is for informational purposes only and does not constitute legal advice."
		})
	] });
}
function FDCPAContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The Fair Debt Collection Practices Act (FDCPA) gives you 30 days from first contact to request debt validation. Here's what that means and how to use it." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "The 30-day rule" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "When a debt collector first contacts you, they must send a validation notice within 5 days. From that notice, you have 30 days to request validation of the debt." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, {
			type: "warning",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					size: 16,
					className: "inline mr-1"
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Critical:" }),
				" The 30-day clock starts from first contact, not from when you receive the validation notice. Act quickly."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "What to request" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Proof that you owe the debt" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The amount of the debt" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The name of the original creditor" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Proof that the collector is licensed in your state (if applicable)" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Why mail certified?" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "If you request validation within 30 days, the collector must cease collection until they provide validation. Certified mail with return receipt proves you submitted your request on time." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "text-xs text-slate-300 mt-8",
			children: "This guide is for informational purposes only and does not constitute legal advice."
		})
	] });
}
function BillingContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Medical billing errors are surprisingly common. Studies estimate that a significant percentage of medical bills contain errors. Here's how to identify and dispute them." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Common billing errors" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Duplicate charges:" }), " The same service billed twice"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Services not received:" }), " Charges for tests or procedures you didn't have"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Incorrect coding:" }), " Wrong billing codes that result in higher charges"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Upcoding:" }), " A more expensive service code than what was actually performed"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Cancelled services:" }), " Charges for services that were cancelled or rescheduled"] })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, {
				size: 16,
				className: "inline mr-1"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
			" Always request an itemized bill. You can't dispute what you can't see."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Steps to dispute" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Request an itemized bill from the provider" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Review each line item against your records" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Identify specific charges that are wrong" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Write a dispute letter referencing each incorrect charge" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mail certified with return receipt" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "text-xs text-slate-300 mt-8",
			children: "This guide is for informational purposes only and does not constitute legal advice."
		})
	] });
}
//#endregion
export { GuidePage as component };
