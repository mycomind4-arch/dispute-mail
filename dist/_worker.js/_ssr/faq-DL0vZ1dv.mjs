import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { k as ChevronDown } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter } from "./router-Ch5bc3-4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DL0vZ1dv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		name: "Using Dispute Mail",
		questions: [
			{
				q: "Is this legal advice?",
				a: "No. Dispute Mail is a correspondence tool, not a law firm. We help you prepare and send dispute documents — we do not provide legal advice, and the AI assistant never invents facts or legal conclusions."
			},
			{
				q: "What types of issues can I dispute?",
				a: "Credit report errors with Equifax, Experian, or TransUnion; debt validation requests to collectors; medical and utility billing errors; and unauthorized charges with your card issuer or bank."
			},
			{
				q: "How does the drafting work?",
				a: "You provide your facts and objective in your own words. The AI assistant organizes that information into a professional draft. Everything is editable, and the AI never invents facts."
			},
			{
				q: "Do I need to review the draft?",
				a: "Yes. Before anything is mailed, you must confirm a review checklist and approve the final document."
			},
			{
				q: "Can I edit the draft?",
				a: "Absolutely. The draft is fully editable — change anything, add paragraphs, or start over."
			}
		]
	},
	{
		name: "Mailing & Delivery",
		questions: [
			{
				q: "How does physical mail work?",
				a: "Your final document is printed, placed in a business envelope, and mailed via USPS. You never need a printer."
			},
			{
				q: "How long does delivery take?",
				a: "First-class mail typically arrives in 3–5 business days."
			},
			{
				q: "Can I track my letter?",
				a: "Yes. Every mailing includes a USPS tracking number. Certified mail adds signature tracking."
			},
			{
				q: "What's proof of timely submission?",
				a: "Certified mail with return receipt provides a USPS delivery record and a signed card mailed back to you as physical proof."
			}
		]
	},
	{
		name: "Privacy & Security",
		questions: [
			{
				q: "Is my data secure?",
				a: "All documents and personal information are stored with encryption. We never sell your data or use it for marketing."
			},
			{
				q: "Can I delete my data?",
				a: "Yes. You can request full deletion at any time."
			},
			{
				q: "Do you train AI on my data?",
				a: "No. We never use your documents or correspondence content to train AI models."
			}
		]
	},
	{
		name: "Legal & Scope",
		questions: [{
			q: "Is Dispute Mail a law firm?",
			a: "No. Dispute Mail is a document preparation and mailing service. We do not provide legal advice or representation."
		}, {
			q: "Can this replace an attorney?",
			a: "No. If your dispute involves complex legal questions, consult a qualified attorney."
		}]
	}
];
function FAQPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white py-16 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "Questions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-4xl font-bold text-teal-700 md:text-5xl",
								style: { fontFamily: "var(--font-serif)" },
								children: "Frequently asked questions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-slate-400",
								children: "Everything you need to know about how Dispute Mail works."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container max-w-3xl",
					children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-teal-700",
							style: { fontFamily: "var(--font-serif)" },
							children: cat.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-3",
							children: cat.questions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
								q: item.q,
								a: item.a
							}, item.q))
						})]
					}, cat.name))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function FAQItem({ q, a }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "flex w-full items-center justify-between p-5 text-left",
			onClick: () => setOpen(!open),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-teal-700",
				children: q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				size: 18,
				className: `shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5 pb-5 text-sm leading-6 text-slate-400",
			children: a
		})]
	});
}
//#endregion
export { FAQPage as component };
