import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { d as derived } from "../../chunks/index.js";
const GithubIcon = "/_app/immutable/assets/github-mark-white.60d03f0f.png";
const MailIcon = "/_app/immutable/assets/mail-icon-filled.c46d9a9c.svg";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{color:hsl(0, 0%, 100%);background:#151515}p, a, button{font-family:"Instrument Sans", sans-serif;font-size:25px;text-decoration:none}a{color:hsla(0, 0%, 100%, 0.25);transition:color 0.2s ease-in-out}h1, h2, h3, h4{font-family:"Gabarito", sans-serif;font-weight:600}h1{font-size:61px;letter-spacing:4px}h2{font-size:39px;letter-spacing:2px}h3{font-size:25px}h4{color:hsla(0, 0%, 100%, 0.5);font-size:25px}.infobox>p.svelte-3l58up.svelte-3l58up{font-size:20px}body::-webkit-scrollbar{display:none}button{display:inline;width:10rem;height:3rem;border-radius:0.5rem;border:none;background-color:hsla(0, 0%, 100%, 0.25);color:hsl(0, 0%, 100%);font-size:1.2rem;font-weight:600;transition:background-color 0.2s ease-in-out}button:hover{background-color:hsla(0, 0%, 100%, 0.75)}.active{color:hsl(0, 0%, 100%)}a.svelte-3l58up.svelte-3l58up:hover{color:hsl(0, 0%, 100%)}#header.svelte-3l58up.svelte-3l58up{display:flex;justify-content:center;margin-top:2rem;margin-bottom:9rem}#routes.svelte-3l58up a.svelte-3l58up{margin:0 1rem}#footer.svelte-3l58up.svelte-3l58up{margin-top:9rem;padding:2rem 8rem;color:hsl(0, 0%, 100%)}#footerlinks.svelte-3l58up.svelte-3l58up{display:flex;justify-content:center;align-items:center}.maxdist.svelte-3l58up.svelte-3l58up{display:flex;justify-content:space-between}.footer-icon.svelte-3l58up.svelte-3l58up{width:auto;height:3rem;margin:0 1rem;aspect-ratio:1/1}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $path, $$unsubscribe_path;
  let { data } = $$props;
  const path = derived(page, ($page) => $page.url.pathname);
  $$unsubscribe_path = subscribe(path, (value) => $path = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_path();
  return `<div id="header" class="svelte-3l58up"><nav id="routes" class="svelte-3l58up"><a href="/" class="${[
    "svelte-3l58up",
    !$path.includes("/projects") && !$path.includes("/blog") ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-g5qct">Home</a> <a href="/projects" class="${["svelte-3l58up", $path.includes("/projects") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1n1lywo">Projects</a> <a href="/blog" class="${["svelte-3l58up", $path.includes("/blog") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1f5bvy">Blog</a></nav></div> <div>${slots.default ? slots.default({}) : ``}</div> <div id="footer" class="svelte-3l58up" data-svelte-h="svelte-1wzthqh"><div class="maxdist svelte-3l58up"><div id="footerlinks" class="svelte-3l58up"><a href="https://github.com/LauKH312" class="svelte-3l58up"><img${add_attribute("src", GithubIcon, 0)} alt="" class="footer-icon svelte-3l58up"></a> <a href="mailto:laurits.k.hillemann@gmail.com" class="svelte-3l58up"><img${add_attribute("src", MailIcon, 0)} alt="" class="footer-icon svelte-3l58up"></a></div> <div><p class="svelte-3l58up">Phone: +45 22 38 99 10</p></div></div> </div>`;
});
export {
  Layout as default
};
