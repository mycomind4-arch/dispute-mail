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
var _lazy_H15OlS = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_H15OlS
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
		"mtime": "2026-08-20T21:10:11.720Z",
		"size": 1220,
		"path": "../llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"70-IIxGkSxkFhLdbtYhTbfxrKBHAJU\"",
		"mtime": "2026-08-20T21:10:11.720Z",
		"size": 112,
		"path": "../robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"7e8-d9WPCPEdcRe9lJpVQakdWyd0Asw\"",
		"mtime": "2026-08-20T21:10:11.721Z",
		"size": 2024,
		"path": "../sitemap.xml"
	},
	"/assets/about-Ajt_gFnn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c9-FzFWJGbnsP6AWoEBQECt9wDEKgU\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 5321,
		"path": "../assets/about-Ajt_gFnn.js"
	},
	"/assets/arrow-left-go6nTN1P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-5KbrZM46t+ECnpq+2WY+gRAo53s\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 154,
		"path": "../assets/arrow-left-go6nTN1P.js"
	},
	"/assets/_slug-Dv4jcu_d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20fb-LrElW/aPweouH8rHtUduskXpO9g\"",
		"mtime": "2026-08-20T21:10:10.412Z",
		"size": 8443,
		"path": "../assets/_slug-Dv4jcu_d.js"
	},
	"/assets/billing-error-D7d6JARP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f20-LVVspbudmroXvsYMqusX5oQl1K4\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 16160,
		"path": "../assets/billing-error-D7d6JARP.js"
	},
	"/assets/auth-B2DFOKUI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d3c-ZB4s3ZpL6sr+lZe4XOjDm7ZbZ+g\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 3388,
		"path": "../assets/auth-B2DFOKUI.js"
	},
	"/assets/check-l8XAzG7k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-N5kaP9D8QoihKwbK4DCpAoDS8G4\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 113,
		"path": "../assets/check-l8XAzG7k.js"
	},
	"/assets/chevron-down-DEaJYLxQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-mky9wAWbyQ6bS7AGd6eyg1vf1CI\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 117,
		"path": "../assets/chevron-down-DEaJYLxQ.js"
	},
	"/assets/circle-check-LJ90-ePE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-7n0rlwgofeFsVTGmgCZgqhypCwo\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 167,
		"path": "../assets/circle-check-LJ90-ePE.js"
	},
	"/assets/clock-xLRB6yc3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-EX1oAxhIWxLmkEYrTmIs0eTirdY\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 158,
		"path": "../assets/clock-xLRB6yc3.js"
	},
	"/assets/contact-DZVpksdv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f1-Dm+fyycpjDW4d9uHhyZO79x4gCs\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 5361,
		"path": "../assets/contact-DZVpksdv.js"
	},
	"/assets/credit-card-yipb9U-A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-+/taVBEL2jh1CkDsUFrHKiSu8vU\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 196,
		"path": "../assets/credit-card-yipb9U-A.js"
	},
	"/assets/faq-eyy1VKZ9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f90-pJjAXRqMUIvJPHbTiPRdUEcY9Ew\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 3984,
		"path": "../assets/faq-eyy1VKZ9.js"
	},
	"/assets/dashboard-2HsIoRh6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d3e-coXp4j64pn0fipeEbRwd11ncU6U\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 7486,
		"path": "../assets/dashboard-2HsIoRh6.js"
	},
	"/assets/credit-report-bZKRK3A6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4210-ea5wLyudQMLMM9/Qk6kNwKyXXYk\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 16912,
		"path": "../assets/credit-report-bZKRK3A6.js"
	},
	"/assets/debt-validation-DPEm3mj2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fb2-AuYE6AecVfd8RXXy0T2vM7CB0p0\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 16306,
		"path": "../assets/debt-validation-DPEm3mj2.js"
	},
	"/assets/file-up-WUMrf7u8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156-aLYUrGuNFTE/ioPjdkcBz4LgJ7g\"",
		"mtime": "2026-08-20T21:10:10.414Z",
		"size": 342,
		"path": "../assets/file-up-WUMrf7u8.js"
	},
	"/assets/mail-CXQN61SY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca-Yt+J2J4ICCsTAhkBiDvfUp3Pgo4\"",
		"mtime": "2026-08-20T21:10:10.414Z",
		"size": 202,
		"path": "../assets/mail-CXQN61SY.js"
	},
	"/assets/pricing-DWrNY_K2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b1-LSRJn4j693d4JM+0bIE3N6ZQvqQ\"",
		"mtime": "2026-08-20T21:10:10.414Z",
		"size": 4529,
		"path": "../assets/pricing-DWrNY_K2.js"
	},
	"/assets/lock-CRR3Q1v2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-J9B511+jyoVtofV5cQ6OHH5MQNM\"",
		"mtime": "2026-08-20T21:10:10.414Z",
		"size": 195,
		"path": "../assets/lock-CRR3Q1v2.js"
	},
	"/assets/index-DAECvGfC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56c92-6SP/2eBl5pEsnu6IK++dAQNHEKU\"",
		"mtime": "2026-08-20T21:10:10.412Z",
		"size": 355474,
		"path": "../assets/index-DAECvGfC.js"
	},
	"/assets/file-text-CcRqb-8X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-xchKdN48MDnOCMzf67anfQOJWvc\"",
		"mtime": "2026-08-20T21:10:10.413Z",
		"size": 374,
		"path": "../assets/file-text-CcRqb-8X.js"
	},
	"/assets/package-check-CX7-gMuH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19f-mfdcoqC86gXQnIOrv2BnvPQTYHg\"",
		"mtime": "2026-08-20T21:10:10.414Z",
		"size": 415,
		"path": "../assets/package-check-CX7-gMuH.js"
	},
	"/assets/privacy-BpBJYUpj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e34-9dUptej9TcLMmY/aFFHZO0gw64w\"",
		"mtime": "2026-08-20T21:10:10.414Z",
		"size": 3636,
		"path": "../assets/privacy-BpBJYUpj.js"
	},
	"/assets/shield-alert-BYIGcvY-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156-kCW48XIfBlGeEvcgXvYg+srtVm8\"",
		"mtime": "2026-08-20T21:10:10.414Z",
		"size": 342,
		"path": "../assets/shield-alert-BYIGcvY-.js"
	},
	"/assets/shield-check-aygr-WPl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-7bl25TosHZxoiNOnJOOfmHsbVoM\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 309,
		"path": "../assets/shield-check-aygr-WPl.js"
	},
	"/assets/sparkles-BO9tvEsP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-v7azh7Qg6luX5sp/e24/7NNtK58\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 483,
		"path": "../assets/sparkles-BO9tvEsP.js"
	},
	"/assets/stamp-DmNIsB09.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-6yeNmaLVczY/K81cIdHf1SEJO3I\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 310,
		"path": "../assets/stamp-DmNIsB09.js"
	},
	"/assets/styles-Bwa2WujH.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"8013-7WkOYf8raG4F7BKV5g1hl5s2eDI\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 32787,
		"path": "../assets/styles-Bwa2WujH.css"
	},
	"/assets/terms-kHgTy7VY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a15-ppZG+Vtjx00R9Y0kVgTEBEKwovA\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 2581,
		"path": "../assets/terms-kHgTy7VY.js"
	},
	"/assets/triangle-alert-Ke9xQdux.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-W74NaooDw/6Wi3k44luyxJWdBGg\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 254,
		"path": "../assets/triangle-alert-Ke9xQdux.js"
	},
	"/assets/unauthorized-charge-YbHVT0xC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4103-sgXxYMwHt3ATidcXIUQ7ecm51sA\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 16643,
		"path": "../assets/unauthorized-charge-YbHVT0xC.js"
	},
	"/assets/workflows-Jo_5l2UP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c6-M19SUWRVTPWhLSsECVV8FeEJPjQ\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 2502,
		"path": "../assets/workflows-Jo_5l2UP.js"
	},
	"/assets/workflows-tmg5Ly65.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1683-hJl/2sI0c7IGP/ZFhjhOliYRr6g\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 5763,
		"path": "../assets/workflows-tmg5Ly65.js"
	},
	"/assets/write-a-dispute-letter-CjjxaYTZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b0-WxfVT+GNdq7MhVlQOfbjjZffY4I\"",
		"mtime": "2026-08-20T21:10:10.415Z",
		"size": 2480,
		"path": "../assets/write-a-dispute-letter-CjjxaYTZ.js"
	},
	"/assets/resources-Ca6BXOJF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc0-LOx5gP1csKgQumrmT0jE93C6CGk\"",
		"mtime": "2026-08-20T21:10:10.414Z",
		"size": 3520,
		"path": "../assets/resources-Ca6BXOJF.js"
	},
	"/assets/routes-B0lTyVY8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57e8-9AUANshc/UzA/WHI0uN9nmb7KNI\"",
		"mtime": "2026-08-20T21:10:10.414Z",
		"size": 22504,
		"path": "../assets/routes-B0lTyVY8.js"
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
