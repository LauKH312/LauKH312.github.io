

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.415f5d92.js","_app/immutable/chunks/scheduler.edd63ea2.js","_app/immutable/chunks/index.04baa6b2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/firebase.44d0bb27.js","_app/immutable/chunks/projects.fca9eb2e.js","_app/immutable/chunks/index.6169bf2e.js"];
export const stylesheets = ["_app/immutable/assets/2.cd5cf0f4.css"];
export const fonts = [];
