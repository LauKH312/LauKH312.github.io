import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.0add75b0.js","_app/immutable/chunks/scheduler.edd63ea2.js","_app/immutable/chunks/index.04baa6b2.js","_app/immutable/chunks/stores.6dd73609.js","_app/immutable/chunks/singletons.fbbfd40b.js","_app/immutable/chunks/index.6169bf2e.js"];
export const stylesheets = ["_app/immutable/assets/0.0ddc47cc.css"];
export const fonts = [];