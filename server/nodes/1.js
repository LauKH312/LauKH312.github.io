

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2605d0fe.js","_app/immutable/chunks/scheduler.edd63ea2.js","_app/immutable/chunks/index.04baa6b2.js","_app/immutable/chunks/stores.37686d3d.js","_app/immutable/chunks/singletons.f54ef7aa.js","_app/immutable/chunks/index.6169bf2e.js"];
export const stylesheets = [];
export const fonts = [];
