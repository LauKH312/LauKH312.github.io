import { c as create_ssr_component, a as subscribe } from "../../../chunks/ssr.js";
import "firebase/firestore/lite";
import "../../../chunks/firebase.js";
import { w as writable } from "../../../chunks/index.js";
import "firebase/auth";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#columns.svelte-1kvg6w2{display:flex;flex-direction:row;justify-content:space-evenly}h1.svelte-1kvg6w2{text-align:center}#error-p.svelte-1kvg6w2{color:red}button.svelte-1kvg6w2{margin:2rem 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authorized, $$unsubscribe_authorized;
  const authorized = writable(false);
  $$unsubscribe_authorized = subscribe(authorized, (value) => $authorized = value);
  $$result.css.add(css);
  $$unsubscribe_authorized();
  return `<h1 class="svelte-1kvg6w2" data-svelte-h="svelte-1d5mfrr">Admin</h1> <div id="columns" class="svelte-1kvg6w2"><div id="login-section"><h2 data-svelte-h="svelte-1ek4veb">Log In</h2> <h3 data-svelte-h="svelte-1d1qqm2">Email</h3> <input type="text" id="email-input"> <h3 data-svelte-h="svelte-n4071">Password</h3> <input type="password" id="password-input"> <br> <button class="svelte-1kvg6w2" data-svelte-h="svelte-jdxdew">Log In</button></div> ${$authorized ? `<div id="write-section"><h2 data-svelte-h="svelte-ix0hi0">Write to DB</h2> <h3 data-svelte-h="svelte-139g950">Collection</h3> <input type="text" name="collection" id="collection-input"> <h3 data-svelte-h="svelte-o8o1cs">Doc</h3> <input type="text" name="doc" id="doc-input"> <h3 data-svelte-h="svelte-13c6bq2">JSON</h3> <input type="text" name="json" id="json-input"> <br> <button id="submit" class="svelte-1kvg6w2" data-svelte-h="svelte-1ynr2oa">Submit</button></div>` : ``}</div> <p id="error-p" class="svelte-1kvg6w2"></p>`;
});
export {
  Page as default
};
