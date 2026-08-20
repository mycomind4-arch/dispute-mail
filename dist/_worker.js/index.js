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
	"/assets/_slug-CQVGU1h7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20fb-H0A/hEybDjsoTB2QgVm4LK7xVrQ\"",
		"mtime": "2026-08-20T16:26:16.545Z",
		"size": 8443,
		"path": "../assets/_slug-CQVGU1h7.js"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"4c4-qVs678VPA81vggdujlbE6u/zH8o\"",
		"mtime": "2026-08-20T16:26:17.312Z",
		"size": 1220,
		"path": "../llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"70-IIxGkSxkFhLdbtYhTbfxrKBHAJU\"",
		"mtime": "2026-08-20T16:26:17.312Z",
		"size": 112,
		"path": "../robots.txt"
	},
	"/assets/arrow-left-CAdfTEA0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-u0p5IhoNvkI9bWR0PSxrzMNjbq4\"",
		"mtime": "2026-08-20T16:26:16.545Z",
		"size": 154,
		"path": "../assets/arrow-left-CAdfTEA0.js"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"7e8-d9WPCPEdcRe9lJpVQakdWyd0Asw\"",
		"mtime": "2026-08-20T16:26:17.312Z",
		"size": 2024,
		"path": "../sitemap.xml"
	},
	"/assets/chevron-down-CoHQ1Sk_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-yzw/TCqMQvVI6kX2BsEVcqqrSGo\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 117,
		"path": "../assets/chevron-down-CoHQ1Sk_.js"
	},
	"/assets/about-D4SJXTWY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c9-YI5Uuz6vWs6mX7aQuk0rmCTsG3A\"",
		"mtime": "2026-08-20T16:26:16.545Z",
		"size": 5321,
		"path": "../assets/about-D4SJXTWY.js"
	},
	"/assets/circle-check-BkbK9O6A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-K98ntqWY2ntXi7OZ6s+PZB+Hp3Q\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 167,
		"path": "../assets/circle-check-BkbK9O6A.js"
	},
	"/assets/auth-CaOJdA9D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d3c-wntDHDnYG4aR6PUabFDXtISRpVc\"",
		"mtime": "2026-08-20T16:26:16.545Z",
		"size": 3388,
		"path": "../assets/auth-CaOJdA9D.js"
	},
	"/assets/check-GFnVJkTe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-HLFD3BglExRL3RjXMketv+CYE1w\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 113,
		"path": "../assets/check-GFnVJkTe.js"
	},
	"/assets/billing-error-IMGsDTPI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f20-8PT2wdsVF1Hdm8xeg9z/7pmR+vY\"",
		"mtime": "2026-08-20T16:26:16.545Z",
		"size": 16160,
		"path": "../assets/billing-error-IMGsDTPI.js"
	},
	"/assets/clock-CM8Nh-J2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-WWNFYgMpfqPh7sdSSy08wJUz744\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 158,
		"path": "../assets/clock-CM8Nh-J2.js"
	},
	"/assets/credit-card-DSOvhgjN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-Gx8LCvfGnVUJ7hvNONVvkFKojic\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 196,
		"path": "../assets/credit-card-DSOvhgjN.js"
	},
	"/assets/dashboard-BQd1wsrH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d3e-qPptmcQRBcukcs9COGQF/PHDyaQ\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 7486,
		"path": "../assets/dashboard-BQd1wsrH.js"
	},
	"/assets/faq-DZGVSeOS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f90-twuTmQW2aQDnTg48cMvgavmWrKg\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 3984,
		"path": "../assets/faq-DZGVSeOS.js"
	},
	"/assets/contact-CHMEbwcn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f1-eOvQ8CZdUfOsVM2yayRP2CSKjYw\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 5361,
		"path": "../assets/contact-CHMEbwcn.js"
	},
	"/assets/lock-DjURtGJa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-Fjj8YU4roiOGzMd2Jww1JMh8ogg\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 195,
		"path": "../assets/lock-DjURtGJa.js"
	},
	"/assets/file-text-KA4b7NQ4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-Dz1X9JbskfTBJM2WI52kKRY9huM\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 374,
		"path": "../assets/file-text-KA4b7NQ4.js"
	},
	"/assets/credit-report-BquTu8dN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4093-SYgU5uBC3+al3E6Le9xkMw7TZqo\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 16531,
		"path": "../assets/credit-report-BquTu8dN.js"
	},
	"/assets/mail-C1rPGG2t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca-VT1dkqWSbUBxPAINQND2xtIWjqg\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 202,
		"path": "../assets/mail-C1rPGG2t.js"
	},
	"/assets/debt-validation-uhIrlDBK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fb2-J4cSgggpIBWxrbszU2cG4ODHXm0\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 16306,
		"path": "../assets/debt-validation-uhIrlDBK.js"
	},
	"/assets/file-up-K_CtMrAi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156-yv3Rzk51dOVaW1dv94B5REAPcFo\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 342,
		"path": "../assets/file-up-K_CtMrAi.js"
	},
	"/assets/package-check-DhlzsSsj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19f-Gz9903TRzAWEowu9TRm3TxcGTDg\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 415,
		"path": "../assets/package-check-DhlzsSsj.js"
	},
	"/assets/pricing-CYBzxtCr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b1-yHy/B8DnC7UjNum8DUlT/QNuzaQ\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 4529,
		"path": "../assets/pricing-CYBzxtCr.js"
	},
	"/assets/index-C3KjjfFA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56c92-vtvO1C0mAzvuDP56Vb+h/Uhmu0s\"",
		"mtime": "2026-08-20T16:26:16.545Z",
		"size": 355474,
		"path": "../assets/index-C3KjjfFA.js"
	},
	"/assets/privacy-BxvTZY9h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e34-xLQ0j8paabrzd09/vYpu+zyv1pk\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 3636,
		"path": "../assets/privacy-BxvTZY9h.js"
	},
	"/assets/resources-fXoe5W8Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc0-8hb4ehNLtMTVplH+llKNoHSxYN0\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 3520,
		"path": "../assets/resources-fXoe5W8Z.js"
	},
	"/assets/routes-DEAICKlF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57e8-EfH6/3jj98wtZM0y4/xAdQv5yvw\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 22504,
		"path": "../assets/routes-DEAICKlF.js"
	},
	"/assets/shield-alert-F1B_08zu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156-GrX9m5SePMoMwd7BMGU5i4k1070\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 342,
		"path": "../assets/shield-alert-F1B_08zu.js"
	},
	"/assets/shield-check-GnLLjX1M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-1WXWnrRhB2I2pt7LAgZShDFVjZQ\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 309,
		"path": "../assets/shield-check-GnLLjX1M.js"
	},
	"/assets/styles-Bwa2WujH.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"8013-7WkOYf8raG4F7BKV5g1hl5s2eDI\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 32787,
		"path": "../assets/styles-Bwa2WujH.css"
	},
	"/assets/terms-BynWiyZy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a15-pAxv/IMvHaMxaJI1fd44qpV7O2w\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 2581,
		"path": "../assets/terms-BynWiyZy.js"
	},
	"/assets/triangle-alert-D7G58ZXQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-tk8M9FC1/IYBmyT5LeyCv1/JrU0\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 254,
		"path": "../assets/triangle-alert-D7G58ZXQ.js"
	},
	"/assets/stamp-DmUalNat.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-VOl82hcCVD/j34HRFvqOZfZ0mG8\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 310,
		"path": "../assets/stamp-DmUalNat.js"
	},
	"/assets/workflows-DWn4aKcr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1683-gUZDd67Ax2Z8tLYRh37KViQuQlo\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 5763,
		"path": "../assets/workflows-DWn4aKcr.js"
	},
	"/assets/unauthorized-charge-CscESg-X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4103-0ZyJRj3p8MS1pj72ByPW/H1Q3Z8\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 16643,
		"path": "../assets/unauthorized-charge-CscESg-X.js"
	},
	"/assets/workflows-DpJsR5Pq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c9-DHu/CujP5kSYO3/9IV9VbAoVl3Q\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 2505,
		"path": "../assets/workflows-DpJsR5Pq.js"
	},
	"/assets/write-a-dispute-letter-DBXDmur-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b0-zcy+u5nxOgCiE2Fn69p3kD/y+wY\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 2480,
		"path": "../assets/write-a-dispute-letter-DBXDmur-.js"
	},
	"/assets/sparkles-JMak_eEj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-rWnIyQiW/NZyoapNmc9Z44Q4tRE\"",
		"mtime": "2026-08-20T16:26:16.546Z",
		"size": 483,
		"path": "../assets/sparkles-JMak_eEj.js"
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
