

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.f67437e0.js","_app/immutable/chunks/scheduler.edd63ea2.js","_app/immutable/chunks/index.04baa6b2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/projects.fca9eb2e.js"];
export const stylesheets = ["_app/immutable/assets/5.deaa9a2b.css"];
export const fonts = [];
