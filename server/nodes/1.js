

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.54771f00.js","_app/immutable/chunks/scheduler.edd63ea2.js","_app/immutable/chunks/index.04baa6b2.js","_app/immutable/chunks/stores.6dd73609.js","_app/immutable/chunks/singletons.fbbfd40b.js","_app/immutable/chunks/index.6169bf2e.js"];
export const stylesheets = [];
export const fonts = [];
