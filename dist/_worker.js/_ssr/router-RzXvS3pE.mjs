import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { C as FileExclamationPoint, N as ArrowUpRight, P as ArrowRight, _ as Menu, b as House, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-RzXvS3pE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-BzZs3yFT.css";
function SiteHeader({ variant = "default" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const transparent = variant === "transparent";
	const navClass = transparent ? "text-white/80 hover:text-white" : "text-teal-600 hover:text-teal-700";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 border-b transition-all ${transparent ? "border-transparent bg-transparent" : "border-warm-border bg-white/95 backdrop-blur-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container flex min-h-16 items-center justify-between gap-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex shrink-0 items-center gap-2.5",
					"aria-label": "Dispute Mail home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex h-9 w-9 items-center justify-center rounded-lg ${transparent ? "bg-white/15" : "bg-teal-700"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, {
							size: 18,
							className: "text-rose-400"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `block text-lg font-bold tracking-tight ${transparent ? "text-white" : "text-teal-700"}`,
							style: { fontFamily: "var(--font-serif)" },
							children: "Dispute Mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-1 hidden text-[9px] font-medium uppercase tracking-[0.18em] sm:block ${transparent ? "text-white/45" : "text-slate-400"}`,
							children: "A MailMyPDF product"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary navigation",
					className: "hidden items-center gap-6 lg:flex",
					children: [
						{
							label: "Workflows",
							href: "/workflows"
						},
						{
							label: "How it works",
							href: "/#how"
						},
						{
							label: "Pricing",
							href: "/pricing"
						},
						{
							label: "Resources",
							href: "/resources"
						},
						{
							label: "FAQ",
							href: "/faq"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: `text-sm font-medium transition-colors ${navClass}`,
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-4 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/dashboard",
						className: `text-sm font-semibold ${navClass}`,
						children: "My Mailings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/workflows/credit-report",
						className: "btn-rose",
						children: "Start a dispute"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden",
					onClick: () => setOpen(!open),
					"aria-expanded": open,
					"aria-controls": "mobile-navigation",
					"aria-label": open ? "Close menu" : "Open menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						size: 22,
						className: transparent ? "text-white" : "text-teal-700"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						size: 22,
						className: transparent ? "text-white" : "text-teal-700"
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-navigation",
			className: "border-t border-warm-border bg-white md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container flex flex-col gap-1 py-3",
				children: [
					[
						{
							label: "Workflow directory",
							href: "/workflows"
						},
						{
							label: "How it works",
							href: "/#how"
						},
						{
							label: "Pricing",
							href: "/pricing"
						},
						{
							label: "Resources",
							href: "/resources"
						},
						{
							label: "FAQ",
							href: "/faq"
						},
						{
							label: "My Mailings",
							href: "/dashboard"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: "rounded-lg px-3 py-2.5 text-sm font-medium text-teal-600 hover:bg-teal-50",
						onClick: () => setOpen(false),
						children: item.label
					}, item.label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/workflows/credit-report",
						className: "btn-rose mt-2 justify-center",
						onClick: () => setOpen(false),
						children: "Start a dispute"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 border-t border-warm-border px-3 pt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://mailmypdf.com",
							className: "inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-700",
							children: ["MailMyPDF fulfillment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 12 })]
						})
					})
				]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-warm-border bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, {
									size: 16,
									className: "text-rose-400"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-bold text-teal-700",
								style: { fontFamily: "var(--font-serif)" },
								children: "Dispute Mail"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-slate-400",
							children: "Prepare and send dispute letters for credit errors, debt validation, and billing issues with confidence."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-teal-700",
						children: "Product"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm text-slate-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#how",
								className: "hover:text-rose-600",
								children: "How it works"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#workflows",
								className: "hover:text-rose-600",
								children: "What you can dispute"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "hover:text-rose-600",
								children: "Pricing"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "hover:text-rose-600",
								children: "My Mailings"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								className: "hover:text-rose-600",
								children: "FAQ"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-teal-700",
						children: "Resources"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm text-slate-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/resources",
								className: "hover:text-rose-600",
								children: "Guides"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-rose-600",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-rose-600",
								children: "Contact"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-rose-600",
								children: "Privacy Policy"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "hover:text-rose-600",
								children: "Terms of Service"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-teal-700",
						children: "Important"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-5 text-slate-400",
						children: "Dispute Mail is not a law firm and does not provide legal advice. Dispute deadlines can be short — note yours immediately."
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-3 border-t border-warm-border pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Dispute Mail. Powered by MailMyPDF." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Information is educational and product-related, not legal advice." })]
			})]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Dispute Mail — Dispute credit errors, debt, and billing issues with confidence" },
			{
				name: "description",
				content: "Guided workflows to prepare, review, send, and track dispute letters for credit report errors, debt validation, billing errors, and unauthorized charges. Physical mail with proof of delivery. Not a law firm — you control the facts."
			},
			{
				name: "robots",
				content: "index,follow"
			},
			{
				name: "theme-color",
				content: "#0f766e"
			},
			{
				property: "og:title",
				content: "Dispute Mail — Dispute credit errors, debt, and billing issues with confidence"
			},
			{
				property: "og:description",
				content: "Prepare, review, send, track, and keep a record of your dispute letters."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Dispute Mail"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Dispute Mail — Prepare and send dispute letters"
			},
			{
				name: "twitter:description",
				content: "Guided workflows, physical mail with tracking, and proof of delivery."
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	notFoundComponent: NotFoundPage,
	shellComponent: RootShell,
	component: RootComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container max-w-lg text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, {
								size: 36,
								className: "text-teal-300"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-8 text-6xl font-bold text-teal-700",
							style: { fontFamily: "var(--font-serif)" },
							children: "404"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-xl font-semibold text-teal-600",
							children: "This item is being disputed elsewhere"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-slate-400",
							children: "The page you're looking for doesn't exist or has moved. Let's get you back on track."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "btn-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 16 }), " Back to home"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/workflows/credit-report",
								className: "btn-rose",
								children: ["Start a dispute ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$16 = () => import("./routes-D3k8TeD4.mjs");
var Route$16 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./about-Bk_4dFDO.mjs");
var Route$15 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Dispute Mail" }, {
		name: "description",
		content: "Dispute Mail helps people prepare and send dispute letters for credit errors, debt validation, and billing issues."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./auth-QpOHtGEA.mjs");
var Route$14 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Sign In — Dispute Mail" },
		{
			name: "description",
			content: "Create an account or sign in to Dispute Mail."
		},
		{
			name: "robots",
			content: "noindex,nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./contact-Dzr5SzI5.mjs");
var Route$13 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — Dispute Mail" }, {
		name: "description",
		content: "Get in touch with the Dispute Mail team."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./dashboard-nHpi9O9r.mjs");
var Route$12 = createFileRoute("/dashboard")({
	head: () => ({ meta: [
		{ title: "My Mailings — Dispute Mail" },
		{
			name: "description",
			content: "View your mailing history, tracking status, and delivery records."
		},
		{
			name: "robots",
			content: "noindex,nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./faq-DfTjopjm.mjs");
var Route$11 = createFileRoute("/faq")({
	head: () => ({ meta: [{ title: "FAQ — Dispute Mail" }, {
		name: "description",
		content: "Answers to common questions about Dispute Mail: how it works, mailing, privacy, legal scope, and pricing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./pricing-dbsl_poE.mjs");
var Route$10 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing — Dispute Mail" }, {
		name: "description",
		content: "Simple per-mailing pricing. Standard $4.99, Certified $14.94, Registered $32.49. Page-count tiers available. No subscription."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./privacy-j5BpbZKb.mjs");
var Route$9 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy Policy — Dispute Mail" }, {
		name: "description",
		content: "How Dispute Mail collects, uses, stores, and protects your data and documents."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./terms-DX4pfrqD.mjs");
var Route$8 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms of Service — Dispute Mail" }, {
		name: "description",
		content: "Terms of service for Dispute Mail."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./write-a-dispute-letter-CFV_5YoY.mjs");
var Route$7 = createFileRoute("/write-a-dispute-letter")({
	head: () => ({
		meta: [{ title: "Write a Dispute Letter | Organize Evidence and Send It | Dispute Mail" }, {
			name: "description",
			content: "Build a fact-based dispute letter from your documents, review every claim, and send it with a documented mailing record."
		}],
		links: [{
			rel: "canonical",
			href: "/write-a-dispute-letter"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./resources-j5pkie1z.mjs");
var Route$6 = createFileRoute("/resources/")({
	head: () => ({ meta: [{ title: "Resources & Guides — Dispute Mail" }, {
		name: "description",
		content: "Guides for disputing credit report errors, debt validation, and billing issues."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_slug-D289Hqtq.mjs");
var Route$5 = createFileRoute("/resources/$slug")({
	head: () => ({ meta: [{ title: "Guides — Dispute Mail" }, {
		name: "description",
		content: "Guides for disputing credit errors, debt, and billing issues."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./workflows-1I4Ikgzs.mjs");
var Route$4 = createFileRoute("/workflows/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./billing-error-BmB1ears.mjs");
var Route$3 = createFileRoute("/workflows/billing-error")({
	head: () => ({ meta: [{ title: "Dispute a Billing Error — Dispute Mail" }, {
		name: "description",
		content: "Dispute a medical billing error, utility overcharge, or incorrect service charge with the provider."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./credit-report-D7RffUi8.mjs");
var Route$2 = createFileRoute("/workflows/credit-report")({
	head: () => ({ meta: [{ title: "Dispute a Credit Report Error — Dispute Mail" }, {
		name: "description",
		content: "Guided workflow to prepare and mail a credit report dispute to Equifax, Experian, or TransUnion under the FCRA."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./debt-validation-BJ7Oe9xg.mjs");
var Route$1 = createFileRoute("/workflows/debt-validation")({
	head: () => ({ meta: [{ title: "Request Debt Validation — Dispute Mail" }, {
		name: "description",
		content: "Request validation of a debt from a collector under the FDCPA within 30 days of first contact."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./unauthorized-charge-4Im5vM0g.mjs");
var Route = createFileRoute("/workflows/unauthorized-charge")({
	head: () => ({ meta: [{ title: "Dispute an Unauthorized Charge — Dispute Mail" }, {
		name: "description",
		content: "Dispute an unauthorized or fraudulent charge with your card issuer or bank in writing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var AboutRoute = Route$15.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$17
});
var AuthRoute = Route$14.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$17
});
var ContactRoute = Route$13.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$17
});
var DashboardRoute = Route$12.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$17
});
var FaqRoute = Route$11.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$17
});
var PricingRoute = Route$10.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$17
});
var PrivacyRoute = Route$9.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$17
});
var TermsRoute = Route$8.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$17
});
var WriteADisputeLetterRoute = Route$7.update({
	id: "/write-a-dispute-letter",
	path: "/write-a-dispute-letter",
	getParentRoute: () => Route$17
});
var ResourcesIndexRoute = Route$6.update({
	id: "/resources/",
	path: "/resources/",
	getParentRoute: () => Route$17
});
var ResourcesSlugRoute = Route$5.update({
	id: "/resources/$slug",
	path: "/resources/$slug",
	getParentRoute: () => Route$17
});
var WorkflowsIndexRoute = Route$4.update({
	id: "/workflows/",
	path: "/workflows/",
	getParentRoute: () => Route$17
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AuthRoute,
	ContactRoute,
	DashboardRoute,
	FaqRoute,
	PricingRoute,
	PrivacyRoute,
	TermsRoute,
	WriteADisputeLetterRoute,
	ResourcesSlugRoute,
	WorkflowsBillingErrorRoute: Route$3.update({
		id: "/workflows/billing-error",
		path: "/workflows/billing-error",
		getParentRoute: () => Route$17
	}),
	WorkflowsCreditReportRoute: Route$2.update({
		id: "/workflows/credit-report",
		path: "/workflows/credit-report",
		getParentRoute: () => Route$17
	}),
	WorkflowsDebtValidationRoute: Route$1.update({
		id: "/workflows/debt-validation",
		path: "/workflows/debt-validation",
		getParentRoute: () => Route$17
	}),
	WorkflowsUnauthorizedChargeRoute: Route.update({
		id: "/workflows/unauthorized-charge",
		path: "/workflows/unauthorized-charge",
		getParentRoute: () => Route$17
	}),
	ResourcesIndexRoute,
	WorkflowsIndexRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { SiteHeader as i, Route$5 as n, SiteFooter as r, router_exports as t };
