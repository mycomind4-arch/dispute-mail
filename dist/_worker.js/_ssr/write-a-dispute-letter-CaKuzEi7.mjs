import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteHeader, r as SiteFooter } from "./router-Ch5bc3-4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/write-a-dispute-letter-CaKuzEi7.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-b border-rule/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-5xl px-6 py-20 md:py-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "postmark w-fit",
								children: "Dispute letter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 max-w-4xl text-5xl leading-[1.02] md:text-7xl",
								children: "Write a Dispute Letter From the Evidence, Not From a Blank Page"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-2xl text-xl text-ink-soft",
								children: "Identify the error, organize supporting documents, prepare a precise dispute, review it, and mail it with the documentation your situation calls for."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/workflows/credit-report",
								className: "mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground",
								children: "Start a dispute →"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-paper-deep/40 border-b border-rule/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-6 py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl",
							children: "A documented dispute workflow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 md:grid-cols-4",
							children: [
								[
									"01",
									"Identify",
									"State exactly what is wrong or disputed."
								],
								[
									"02",
									"Support",
									"Attach or reference the evidence supporting the factual claim."
								],
								[
									"03",
									"Review",
									"Check dates, names, account numbers, requested action, and unsupported assertions."
								],
								[
									"04",
									"Send",
									"Choose the appropriate delivery method and preserve the mailing record."
								]
							].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "envelope-card p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "font-mono text-xs text-stamp",
										children: n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-serif text-2xl",
										children: t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: d
									})
								]
							}, n))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-6 py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl",
						children: "Common dispute situations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7 grid gap-3 md:grid-cols-2",
						children: [
							"Credit report errors",
							"Debt validation requests",
							"Medical billing disputes",
							"Utility or service billing errors",
							"Unauthorized charges",
							"Business billing disputes"
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-rule/70 py-4 text-lg",
							children: x
						}, x))
					})]
				}) })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Page as component };
