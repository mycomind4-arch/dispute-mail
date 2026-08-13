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
		"mtime": "2026-08-13T06:16:53.027Z",
		"size": 1220,
		"path": "../llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"70-IIxGkSxkFhLdbtYhTbfxrKBHAJU\"",
		"mtime": "2026-08-13T06:16:53.027Z",
		"size": 112,
		"path": "../robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"7e8-d9WPCPEdcRe9lJpVQakdWyd0Asw\"",
		"mtime": "2026-08-13T06:16:53.027Z",
		"size": 2024,
		"path": "../sitemap.xml"
	},
	"/assets/_slug-DTsp1HYp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20fb-BPYB6ArFBLtDJFLuQXW2e94U9do\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 8443,
		"path": "../assets/_slug-DTsp1HYp.js"
	},
	"/assets/about-BHhvY111.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c9-26kf72JpDeS2ijL5EpHDCu6XT5I\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 5321,
		"path": "../assets/about-BHhvY111.js"
	},
	"/assets/arrow-left-BgrrQgi5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-Gli5gPx46DN/wTBSdY+W9JVqlRQ\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 154,
		"path": "../assets/arrow-left-BgrrQgi5.js"
	},
	"/assets/billing-error-CONDbZGT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f6e-ztlOgRjWPWY0Ig9PyOgmIpDJVbQ\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 16238,
		"path": "../assets/billing-error-CONDbZGT.js"
	},
	"/assets/circle-check-Q_Otf-Dw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-YU6VHzQWRVRqCYNGifEWWCuFb80\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 167,
		"path": "../assets/circle-check-Q_Otf-Dw.js"
	},
	"/assets/auth-Dj8bS2j3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d3c-TaxjpQzBoLnMFxOI3CiP4cJEPKw\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 3388,
		"path": "../assets/auth-Dj8bS2j3.js"
	},
	"/assets/clock-gILTtqQp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-7l9wuAzoJmyLZxV0akiF84lm8Hs\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 158,
		"path": "../assets/clock-gILTtqQp.js"
	},
	"/assets/contact-CvOQgfH1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f1-Gdba5T01dBJmcVdtRTefUFmeW1w\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 5361,
		"path": "../assets/contact-CvOQgfH1.js"
	},
	"/assets/check-Bb9z8L3Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-3/ucEvUiRR8CNXe3YIJXh1CCZDs\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 113,
		"path": "../assets/check-Bb9z8L3Z.js"
	},
	"/assets/chevron-down-Bqu7g8ab.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-00k0g+jL38P83tUtTBik/46c1oo\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 117,
		"path": "../assets/chevron-down-Bqu7g8ab.js"
	},
	"/assets/faq-DY5pwJus.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f90-A47bxL4rORdD/AMrsAlrZnelqVo\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 3984,
		"path": "../assets/faq-DY5pwJus.js"
	},
	"/assets/dashboard-jvtjxOiB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d3e-5/Hmq59RCRjPWxzsOl13sjKrw+U\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 7486,
		"path": "../assets/dashboard-jvtjxOiB.js"
	},
	"/assets/credit-report-Dh78toKx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40e4-MZgUhKDR1AcL/vt2tRQhq2XHW4k\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 16612,
		"path": "../assets/credit-report-Dh78toKx.js"
	},
	"/assets/debt-validation-D55kRlmV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4003-M8sAh3UBXq5ZnuHePQa6itULjmQ\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 16387,
		"path": "../assets/debt-validation-D55kRlmV.js"
	},
	"/assets/mail-CXyin254.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca-vJiBn6NPceI719ZFL38ZRVpCTI0\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 202,
		"path": "../assets/mail-CXyin254.js"
	},
	"/assets/file-up-BGrshdzK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f0-XsRH7l0aiL4lXucA6yi2F30KTCA\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 496,
		"path": "../assets/file-up-BGrshdzK.js"
	},
	"/assets/lock-Dz2MTVwY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-trcJYwURGL0iZgzxBWekVyrRPtE\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 195,
		"path": "../assets/lock-Dz2MTVwY.js"
	},
	"/assets/file-text-C0fJ5ZqF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-qHq9M/dKkfcQY42pmhfcweqS9GM\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 374,
		"path": "../assets/file-text-C0fJ5ZqF.js"
	},
	"/assets/package-check-BqMp4RlK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19f-499ZqpM0VKuhJMbopuILMDuYqXU\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 415,
		"path": "../assets/package-check-BqMp4RlK.js"
	},
	"/assets/index-Cyo7ATtD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5668e-TOiGQVs1WNs26TqsEYbezIHHFOk\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 353934,
		"path": "../assets/index-Cyo7ATtD.js"
	},
	"/assets/pricing-DXztn9Y7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12c3-FZPiN8Pl+zyUE3TK1kygF3Okob4\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 4803,
		"path": "../assets/pricing-DXztn9Y7.js"
	},
	"/assets/privacy-Cy4oPwBH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e34-mPDKj1rZCQcodPF7P4BoJAi0MCg\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 3636,
		"path": "../assets/privacy-Cy4oPwBH.js"
	},
	"/assets/resources-B4zfTwzn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc0-W0bAkCqXW/2Dk0LoufF9WoZJGJ8\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 3520,
		"path": "../assets/resources-B4zfTwzn.js"
	},
	"/assets/routes-CTL-5pEQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5833-9+9hZ1YaPgXJqEAzusSnIKLpfw8\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 22579,
		"path": "../assets/routes-CTL-5pEQ.js"
	},
	"/assets/shield-alert-CGcz_jAN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156-rx0FvvWLbeP5tYtZu/ndPJELaa0\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 342,
		"path": "../assets/shield-alert-CGcz_jAN.js"
	},
	"/assets/shield-check-CnFVyqs5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-ZAkZ/Q9rHjpoaUIy+wRKVcqA00E\"",
		"mtime": "2026-08-13T06:16:52.328Z",
		"size": 309,
		"path": "../assets/shield-check-CnFVyqs5.js"
	},
	"/assets/sparkles-CTv83UdS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-P0HJvBffMdgFwtcewK6ZYqM2iTI\"",
		"mtime": "2026-08-13T06:16:52.329Z",
		"size": 483,
		"path": "../assets/sparkles-CTv83UdS.js"
	},
	"/assets/stamp-Cl622OY-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-wYtPWISOMO4+DBdK6YLl18iQBdU\"",
		"mtime": "2026-08-13T06:16:52.329Z",
		"size": 310,
		"path": "../assets/stamp-Cl622OY-.js"
	},
	"/assets/terms-BVSAj0S4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a15-CDgMxVtVbVTEQYVhXp4PTVbyqak\"",
		"mtime": "2026-08-13T06:16:52.329Z",
		"size": 2581,
		"path": "../assets/terms-BVSAj0S4.js"
	},
	"/assets/workflows-Dz71LYh4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a4-mnIOYRLPsbBwGKCO3nDFyw8bo9s\"",
		"mtime": "2026-08-13T06:16:52.329Z",
		"size": 1956,
		"path": "../assets/workflows-Dz71LYh4.js"
	},
	"/assets/styles-B4E0wN1i.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"7b6f-uZtmmUIbckJ78YQteFzqruOuKB4\"",
		"mtime": "2026-08-13T06:16:52.329Z",
		"size": 31599,
		"path": "../assets/styles-B4E0wN1i.css"
	},
	"/assets/triangle-alert-D6vF2JrN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-o80TkvQ1SUDk6Gp0Jo43XU/M0y0\"",
		"mtime": "2026-08-13T06:16:52.329Z",
		"size": 254,
		"path": "../assets/triangle-alert-D6vF2JrN.js"
	},
	"/assets/unauthorized-charge-DU7by1lC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4154-q7OoikgibbZjq+rqV8kOmHZLlno\"",
		"mtime": "2026-08-13T06:16:52.329Z",
		"size": 16724,
		"path": "../assets/unauthorized-charge-DU7by1lC.js"
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
