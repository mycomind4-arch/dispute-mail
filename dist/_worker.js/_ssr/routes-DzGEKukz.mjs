import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, C as Eye, D as ChevronDown, E as CircleCheck, T as Clock, _ as Lock, a as Stamp, b as FileText, c as ShieldCheck, f as Quote, g as Mail, o as Sparkles, p as PackageCheck, u as Send, w as CreditCard, x as FileExclamationPoint, y as FileUp } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter } from "./router-DFuyLIZY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DzGEKukz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var workflows = [
	{
		title: "Dispute a Credit Report Error",
		description: "Dispute inaccurate items on your credit report with Equifax, Experian, or TransUnion under the FCRA.",
		icon: FileText,
		href: "/workflows/credit-report"
	},
	{
		title: "Request Debt Validation",
		description: "Request validation of a debt from a collector under the FDCPA within 30 days of first contact.",
		icon: ShieldCheck,
		href: "/workflows/debt-validation"
	},
	{
		title: "Dispute a Billing Error",
		description: "Dispute a medical billing error, utility overcharge, or incorrect service charge with the provider.",
		icon: CreditCard,
		href: "/workflows/billing-error"
	},
	{
		title: "Dispute an Unauthorized Charge",
		description: "Dispute an unauthorized or fraudulent charge with your card issuer or bank in writing.",
		icon: FileExclamationPoint,
		href: "/workflows/unauthorized-charge"
	}
];
var features = [
	{
		icon: FileExclamationPoint,
		title: "Guided dispute workflows",
		desc: "Start with the error, not a blank page. Each workflow walks you through the steps from issue to mailed dispute."
	},
	{
		icon: Sparkles,
		title: "AI-assisted drafting",
		desc: "Organize your facts into a professional dispute letter. Everything is editable. The AI never invents facts or legal conclusions."
	},
	{
		icon: Send,
		title: "Physical mail with tracking",
		desc: "Your dispute is printed, enveloped, and mailed via USPS. Track delivery and keep proof of timely submission."
	},
	{
		icon: ShieldCheck,
		title: "Proof of delivery",
		desc: "Certified mail options include signature tracking and return receipt — your record that the dispute was received."
	},
	{
		icon: Clock,
		title: "Deadline awareness",
		desc: "Credit disputes have 30–45 day investigation windows. Debt validation has a 30-day response window. Don't miss yours."
	},
	{
		icon: Lock,
		title: "Secure & private",
		desc: "Your documents are encrypted, never shared, and never used for marketing or AI training. Delete your data anytime."
	}
];
var steps = [
	{
		n: "01",
		title: "Identify",
		desc: "Upload or identify the error, charge, or debt you're disputing."
	},
	{
		n: "02",
		title: "Prepare",
		desc: "State the facts, let AI organize the draft, and review every word."
	},
	{
		n: "03",
		title: "Send",
		desc: "Choose your mailing — certified with return receipt is recommended for disputes."
	},
	{
		n: "04",
		title: "Prove",
		desc: "Track delivery and keep a permanent record of your timely dispute."
	}
];
var stats = [
	{
		value: "3–5",
		label: "Business day delivery"
	},
	{
		value: "$3.99",
		label: "Starting price per mailing"
	},
	{
		value: "100%",
		label: "You control the facts"
	},
	{
		value: "0",
		label: "Printers needed"
	}
];
var testimonials = [
	{
		quote: "There was a collection account on my credit report that wasn't mine. Dispute Mail helped me write the dispute letter and mail it certified to all three bureaus. The account was removed within 30 days.",
		author: "Rachel D.",
		role: "Credit Report Dispute"
	},
	{
		quote: "A debt collector contacted me about a debt I didn't recognize. I used Dispute Mail to send a validation request within the 30-day window. The certified mail receipt proved I responded on time.",
		author: "Tony G.",
		role: "Debt Validation Request"
	},
	{
		quote: "My hospital bill had charges for services I never received. The guided workflow helped me organize exactly what was wrong and mail it to the billing department. They corrected it within two weeks.",
		author: "Maria S.",
		role: "Medical Billing Dispute"
	}
];
var comparison = [
	{
		feature: "Guided dispute workflows (not blank-page chat)",
		us: true,
		them: false
	},
	{
		feature: "AI never invents facts or legal conclusions",
		us: true,
		them: "varies"
	},
	{
		feature: "Physical mail with tracking",
		us: true,
		them: false
	},
	{
		feature: "Certified mail with return receipt",
		us: true,
		them: false
	},
	{
		feature: "Proof of timely submission records",
		us: true,
		them: false
	},
	{
		feature: "Dispute mailing history dashboard",
		us: true,
		them: false
	},
	{
		feature: "No printer or post office visit needed",
		us: true,
		them: "DIY"
	},
	{
		feature: "You review before anything is sent",
		us: true,
		them: "varies"
	}
];
var faqItems = [
	{
		q: "Is this legal advice?",
		a: "No. Dispute Mail is a correspondence tool, not a law firm. We help you prepare and send dispute documents — we do not provide legal advice, and AI never invents facts or legal conclusions."
	},
	{
		q: "What types of issues can I dispute?",
		a: "Credit report errors with the three bureaus, debt validation requests to collectors, medical and utility billing errors, and unauthorized charges with your card issuer or bank."
	},
	{
		q: "How does the mailing work?",
		a: "Your final document is printed, placed in an envelope, and mailed via USPS. You can choose first-class, certified, or certified with return receipt for proof of delivery."
	},
	{
		q: "Is my data secure?",
		a: "All documents are stored with encryption, never shared with third parties, and never used for marketing. You can request full deletion at any time."
	},
	{
		q: "What does it cost?",
		a: "Prices start at $3.99 per mailing, including printing, paper, envelope, and postage. Certified mail starts at $8.99. No subscription required."
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { variant: "transparent" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			style: { background: "linear-gradient(135deg, #0f766e 0%, #134e4a 60%, #042f2e 100%)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-10",
				style: { backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.12'%3E%3Cpath d='M30 12l-6 6h12l-6-6zm0 24l-6-6h12l-6 6zM12 30l6-6v12l-6-6zm36 0l-6-6v12l6-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container relative py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "badge badge-rose mb-5",
							style: {
								background: "rgba(244,63,94,.15)",
								color: "#fb7185"
							},
							children: "Stand your ground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl",
							style: { fontFamily: "var(--font-serif)" },
							children: "Dispute the error. Keep the proof."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg leading-8 text-white/70",
							children: "Prepare professional dispute letters for credit report errors, debt validation, billing issues, and unauthorized charges. Send physical mail with tracking and keep proof of timely submission."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/workflows/credit-report",
								className: "btn-rose text-base",
								children: ["Start a Dispute ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#workflows",
								className: "inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10",
								children: "See what you can dispute"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm text-white/50",
							children: "Not a law firm. Not legal advice. You remain in control of the facts and final document."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative hidden lg:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card relative p-6 shadow-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 border-b border-warm-border pb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 items-center justify-center rounded-lg bg-teal-700",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, {
											size: 20,
											className: "text-rose-400"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-teal-700",
										style: { fontFamily: "var(--font-serif)" },
										children: "Your dispute workflow"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-slate-400",
										children: "From error to mailed dispute"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 space-y-3",
									children: [
										{
											icon: FileUp,
											text: "Identify the error or charge",
											done: true
										},
										{
											icon: FileText,
											text: "State the facts and what's wrong",
											done: true
										},
										{
											icon: Sparkles,
											text: "Draft and edit your dispute letter",
											done: true
										},
										{
											icon: Send,
											text: "Mail certified with return receipt",
											done: false
										}
									].map(({ icon: Icon, text, done }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `flex h-8 w-8 items-center justify-center rounded-lg ${done ? "bg-rose-50" : "bg-gray-100"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													size: 15,
													className: done ? "text-rose-500" : "text-gray-400"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: done ? "text-teal-700" : "text-slate-400",
												children: text
											}),
											done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
												size: 15,
												className: "ml-auto text-rose-500"
											})
										]
									}, text))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center justify-between rounded-xl bg-teal-50 px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm text-teal-600",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, {
											size: 16,
											className: "text-rose-500"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Proof of timely submission" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "badge badge-green",
										children: "Ready"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-3 -right-3 flex items-center gap-2 rounded-xl bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { size: 16 }), " Return receipt"]
						})]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-warm-border bg-white py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container grid grid-cols-2 gap-6 md:grid-cols-4",
				children: stats.map(({ value, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-3xl font-bold text-teal-700",
						style: { fontFamily: "var(--font-serif)" },
						children: value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-slate-400",
						children: label
					})]
				}, label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-warm-border bg-cream py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-slate-400",
				children: [
					{
						icon: Lock,
						text: "Bank-grade encryption"
					},
					{
						icon: PackageCheck,
						text: "USPS tracking included"
					},
					{
						icon: ShieldCheck,
						text: "Proof of timely submission"
					},
					{
						icon: Eye,
						text: "You review before anything is sent"
					}
				].map(({ icon: Icon, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 16,
							className: "text-rose-500"
						}),
						" ",
						text
					]
				}, text))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "workflows",
			className: "bg-cream py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Start with the error"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-teal-700 md:text-4xl",
							style: { fontFamily: "var(--font-serif)" },
							children: "What are you disputing?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-slate-400",
							children: "Choose a guided starting point. Dispute Mail is designed around dispute correspondence, not generic AI chat."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
					children: workflows.map(({ title, description, icon: Icon, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-semibold text-teal-700",
								style: { fontFamily: "var(--font-serif)" },
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6 text-slate-400",
								children: description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-600",
								children: ["Start workflow ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 16,
									className: "transition-transform group-hover:translate-x-1"
								})]
							})
						]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "how",
			className: "bg-white py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "The process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-teal-700 md:text-4xl",
							style: { fontFamily: "var(--font-serif)" },
							children: "How Dispute Mail works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-slate-400",
							children: "From error to mailed dispute in four clear steps. Nothing is sent until you review and approve it."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-8 md:grid-cols-4",
					children: steps.map(({ n, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[2.2rem] top-12 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-warm-border to-transparent md:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700 text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold",
									children: n
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold text-teal-700",
								style: { fontFamily: "var(--font-serif)" },
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-slate-400",
								children: desc
							})
						]
					}, n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "features",
			className: "bg-cream py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Why Dispute Mail"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-teal-700 md:text-4xl",
							style: { fontFamily: "var(--font-serif)" },
							children: "Built for dispute deadlines"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-slate-400",
							children: "Everything you need to prepare, send, and prove your dispute — in one place."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: features.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-lg bg-rose-50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 22,
									className: "text-rose-500"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold text-teal-700",
								style: { fontFamily: "var(--font-serif)" },
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-slate-400",
								children: desc
							})
						]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-white py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "The difference"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-bold text-teal-700 md:text-4xl",
						style: { fontFamily: "var(--font-serif)" },
						children: "Dispute Mail vs. doing it yourself"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm border border-warm-border rounded-xl overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-teal-700 text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-4 text-left font-semibold",
									children: "Feature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-4 text-center font-semibold",
									style: { fontFamily: "var(--font-serif)" },
									children: "Dispute Mail"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-4 text-center font-semibold",
									children: "DIY"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-warm-border",
							children: comparison.map(({ feature, us, them }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-cream/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-slate-500 font-medium",
										children: feature
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-center",
										children: us === true ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											size: 18,
											className: "mx-auto text-rose-500"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-slate-400",
											children: us
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-center",
										children: them === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-slate-300",
											children: "—"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-slate-400",
											children: them
										})
									})
								]
							}, feature))
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "What people say"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-bold text-teal-700 md:text-4xl",
						style: { fontFamily: "var(--font-serif)" },
						children: "Real disputes, real outcomes"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-3",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
								size: 24,
								className: "text-rose-200"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm leading-7 text-slate-500",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-500",
									style: { fontFamily: "var(--font-serif)" },
									children: t.author.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-teal-700",
									children: t.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400",
									children: t.role
								})] })]
							})
						]
					}, t.author))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "pricing",
			className: "bg-white py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "Simple pricing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-bold text-teal-700 md:text-4xl",
								style: { fontFamily: "var(--font-serif)" },
								children: "Pay per mailing. No subscription."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-slate-400",
								children: "Prices include printing, paper, envelope, and postage."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-5 md:grid-cols-4",
						children: [
							{
								type: "First-Class",
								price: "$3.99",
								desc: "3–5 business days, tracking included",
								icon: Mail
							},
							{
								type: "Certified",
								price: "$8.99",
								desc: "Signature tracking, proof of delivery",
								icon: PackageCheck
							},
							{
								type: "Certified + Return Receipt",
								price: "$12.99",
								desc: "Signed return receipt card",
								icon: ShieldCheck,
								featured: true
							},
							{
								type: "Registered",
								price: "$15.99",
								desc: "Highest security, insured, signature required",
								icon: Stamp
							}
						].map(({ type, price, desc, icon: Icon, featured }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `card p-6 text-center ${featured ? "ring-2 ring-rose-400" : ""}`,
							children: [
								featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "badge badge-rose mb-3",
									children: "Most popular"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 28,
									className: "mx-auto text-teal-700"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-semibold text-teal-700",
									style: { fontFamily: "var(--font-serif)" },
									children: type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-3xl font-bold text-teal-700",
									style: { fontFamily: "var(--font-serif)" },
									children: price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-slate-400",
									children: desc
								})
							]
						}, type))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/pricing",
							className: "btn-outline",
							children: ["See full pricing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "trust",
			className: "bg-cream py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
									size: 24,
									className: "text-rose-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-lg font-semibold text-teal-700",
									style: { fontFamily: "var(--font-serif)" },
									children: "Your facts stay yours"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-6 text-slate-400",
									children: "AI assists with organization and drafting. It will never invent facts or legal conclusions. Your documents are encrypted and never shared."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									size: 24,
									className: "text-rose-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-lg font-semibold text-teal-700",
									style: { fontFamily: "var(--font-serif)" },
									children: "Deadlines matter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-6 text-slate-400",
									children: "Credit disputes have 30–45 day investigation windows. Debt validation has a 30-day response window. Certified mail with return receipt proves you submitted on time."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, {
									size: 24,
									className: "text-rose-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-lg font-semibold text-teal-700",
									style: { fontFamily: "var(--font-serif)" },
									children: "Know what we're not"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-6 text-slate-400",
									children: "Dispute Mail is not a law firm and does not provide legal advice. If your dispute involves complex legal questions, consult a qualified attorney."
								})
							]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "faq",
			className: "bg-white py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-teal-700 md:text-4xl",
							style: { fontFamily: "var(--font-serif)" },
							children: "Frequently asked"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-3",
						children: faqItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
							q: item.q,
							a: item.a
						}, item.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/faq",
							className: "btn-outline",
							children: ["See all questions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			style: { background: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)" },
			className: "py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold text-white md:text-4xl",
						style: { fontFamily: "var(--font-serif)" },
						children: "Ready to dispute?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-lg text-white/60",
						children: "Start a guided workflow, review your draft, and mail it — all in one place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/workflows/credit-report",
						className: "btn-rose mt-8 text-base",
						children: ["Start now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
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
export { HomePage as component };
