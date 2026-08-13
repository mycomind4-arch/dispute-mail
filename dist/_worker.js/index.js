globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_gzr479 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_gzr479
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"4c4-qVs678VPA81vggdujlbE6u/zH8o\"",
		"mtime": "2026-08-13T06:21:27.638Z",
		"size": 1220,
		"path": "../llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"70-IIxGkSxkFhLdbtYhTbfxrKBHAJU\"",
		"mtime": "2026-08-13T06:21:27.638Z",
		"size": 112,
		"path": "../robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"7e8-d9WPCPEdcRe9lJpVQakdWyd0Asw\"",
		"mtime": "2026-08-13T06:21:27.638Z",
		"size": 2024,
		"path": "../sitemap.xml"
	},
	"/assets/_slug-BpCmZ_Ig.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20fb-lMUdHE1AJlWS5kmYfO+6cgW3VxM\"",
		"mtime": "2026-08-13T06:21:26.973Z",
		"size": 8443,
		"path": "../assets/_slug-BpCmZ_Ig.js"
	},
	"/assets/about-CptKJzLW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c9-rw0eQ9j7klwTKhkDPGdKErHLtKU\"",
		"mtime": "2026-08-13T06:21:26.973Z",
		"size": 5321,
		"path": "../assets/about-CptKJzLW.js"
	},
	"/assets/arrow-left-CzfoXWoK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-sG0gKPmk8z5pEEi3PsCbuSL6K8I\"",
		"mtime": "2026-08-13T06:21:26.973Z",
		"size": 154,
		"path": "../assets/arrow-left-CzfoXWoK.js"
	},
	"/assets/auth-B135uQ1t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d3c-+gg0ViDsfceIk2Riu/XlJEIlbH8\"",
		"mtime": "2026-08-13T06:21:26.973Z",
		"size": 3388,
		"path": "../assets/auth-B135uQ1t.js"
	},
	"/assets/billing-error-Du4fBtTs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ef9-DgUn/8ejFawDXji058bJ/K70CxY\"",
		"mtime": "2026-08-13T06:21:26.973Z",
		"size": 16121,
		"path": "../assets/billing-error-Du4fBtTs.js"
	},
	"/assets/check-C8rdC1nf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-f/hU8WpSDOolxRR8lfWvP3yMrhA\"",
		"mtime": "2026-08-13T06:21:26.973Z",
		"size": 113,
		"path": "../assets/check-C8rdC1nf.js"
	},
	"/assets/chevron-down-Bj-AfW75.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-DqjR1w36T0Yym7n5QdkhJBystP0\"",
		"mtime": "2026-08-13T06:21:26.973Z",
		"size": 117,
		"path": "../assets/chevron-down-Bj-AfW75.js"
	},
	"/assets/circle-check-BkF3-y2u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-Prv7HXIB1kGGPppqantEWaNOWqs\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 167,
		"path": "../assets/circle-check-BkF3-y2u.js"
	},
	"/assets/clock-CjHW_I7B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-LJYvyY9zL8iVNxGsbFumqgAkRr8\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 158,
		"path": "../assets/clock-CjHW_I7B.js"
	},
	"/assets/contact-BCeYWhrU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f1-VI6uLe+TJ1z49oBIUtSRiTsVPdg\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 5361,
		"path": "../assets/contact-BCeYWhrU.js"
	},
	"/assets/credit-report-DG9-mNl8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"406c-nS/aGZSkYhg3MiDBjJRMiOCZODc\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 16492,
		"path": "../assets/credit-report-DG9-mNl8.js"
	},
	"/assets/dashboard-DwoC85Xt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d3e-90ktG4k/gXa4MuhG7SVWV+bavns\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 7486,
		"path": "../assets/dashboard-DwoC85Xt.js"
	},
	"/assets/debt-validation-4o1YWruQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f8b-2EvJqoPUWM5kWMT1FUcHq7R1lvw\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 16267,
		"path": "../assets/debt-validation-4o1YWruQ.js"
	},
	"/assets/faq-CYO51hEG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f90-jYS2bCvxbD617w7zC1s4/UEuaNE\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 3984,
		"path": "../assets/faq-CYO51hEG.js"
	},
	"/assets/file-text-Cwp2r7XE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-Exgksh821EKAdXjCVnYH7jdcJSQ\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 374,
		"path": "../assets/file-text-Cwp2r7XE.js"
	},
	"/assets/file-up-BFAsRUJ6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f0-0ivIA52oG3Wdz1NaN+/mPh+dMQA\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 496,
		"path": "../assets/file-up-BFAsRUJ6.js"
	},
	"/assets/lock-jocZ-0JB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-VZzvoU7OJHDfbMCV1oPesgjCzPw\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 195,
		"path": "../assets/lock-jocZ-0JB.js"
	},
	"/assets/mail-BhaylWS1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca-aaof7ml9R6PfjGgvhKxFxvPbDN8\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 202,
		"path": "../assets/mail-BhaylWS1.js"
	},
	"/assets/package-check-meRZj0BB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19f-dpmHm9wzo9UBtTpla26Tp0yKYGc\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 415,
		"path": "../assets/package-check-meRZj0BB.js"
	},
	"/assets/pricing-B8JaQnjG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b1-ha24BJQodunTaOpoAEm3Ztj8pRk\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 4529,
		"path": "../assets/pricing-B8JaQnjG.js"
	},
	"/assets/privacy-D0rP-wsE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e34-frm7+izwrKGfflBEpaFrvxD1Gmc\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 3636,
		"path": "../assets/privacy-D0rP-wsE.js"
	},
	"/assets/index-BuOspiI6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56680-3uy7mD/UTF9sM0WnHkAscrtk3tA\"",
		"mtime": "2026-08-13T06:21:26.973Z",
		"size": 353920,
		"path": "../assets/index-BuOspiI6.js"
	},
	"/assets/resources-BDr0G1uc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc0-Pfp3NuBlhOFKUNQfFUIL+TwrZwY\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 3520,
		"path": "../assets/resources-BDr0G1uc.js"
	},
	"/assets/shield-check-CDe6uyPs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-R65DjsnI/cwyd1RbJom0mOq6vBs\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 309,
		"path": "../assets/shield-check-CDe6uyPs.js"
	},
	"/assets/routes-kiMy3AJ7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57c1-F/pQ4Hwv5B/l7J1obAvSU1piPfo\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 22465,
		"path": "../assets/routes-kiMy3AJ7.js"
	},
	"/assets/sparkles-Cdj10_Di.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-ZXs68H3abTSkVlj8sFKewQ9NItE\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 483,
		"path": "../assets/sparkles-Cdj10_Di.js"
	},
	"/assets/shield-alert-HoHAFygP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156-lOnkiPaPjLsFfFH3wcHl1ODCO44\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 342,
		"path": "../assets/shield-alert-HoHAFygP.js"
	},
	"/assets/stamp-VgNLmHyb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-fnnSWalbRBbeg9QBypePFR+HI0A\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 310,
		"path": "../assets/stamp-VgNLmHyb.js"
	},
	"/assets/terms-CZWSRvqm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a15-xGY7Kzu3iHKtXWMNlHSKMh6mODs\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 2581,
		"path": "../assets/terms-CZWSRvqm.js"
	},
	"/assets/workflows-Dz71LYh4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a4-mnIOYRLPsbBwGKCO3nDFyw8bo9s\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 1956,
		"path": "../assets/workflows-Dz71LYh4.js"
	},
	"/assets/styles-B4E0wN1i.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"7b6f-uZtmmUIbckJ78YQteFzqruOuKB4\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 31599,
		"path": "../assets/styles-B4E0wN1i.css"
	},
	"/assets/unauthorized-charge-BYsmOOP5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40dc-FxiYQslifSyfx0WVxlTNCleALiE\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 16604,
		"path": "../assets/unauthorized-charge-BYsmOOP5.js"
	},
	"/assets/triangle-alert-C7WNO2n-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-GcuXkYjscx17WeyW9j1RWm3NO6w\"",
		"mtime": "2026-08-13T06:21:26.974Z",
		"size": 254,
		"path": "../assets/triangle-alert-C7WNO2n-.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-pages.mjs
var nitroApp = useNitroApp();
var cloudflare_pages_default = {
	async fetch(cfReq, env, context) {
		augmentReq(cfReq, {
			env,
			context
		});
		const url = new URL(cfReq.url);
		if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfReq);
		return nitroApp.fetch(cfReq);
	},
	scheduled(event, env, context) {}
};
//#endregion
export { cloudflare_pages_default as default };
