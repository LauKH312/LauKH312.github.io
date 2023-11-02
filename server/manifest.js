export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","favicon2.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.172fa252.js","app":"_app/immutable/entry/app.02ed8c83.js","imports":["_app/immutable/entry/start.172fa252.js","_app/immutable/chunks/scheduler.edd63ea2.js","_app/immutable/chunks/singletons.fbbfd40b.js","_app/immutable/chunks/index.6169bf2e.js","_app/immutable/entry/app.02ed8c83.js","_app/immutable/chunks/scheduler.edd63ea2.js","_app/immutable/chunks/index.04baa6b2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
