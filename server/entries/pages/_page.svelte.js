import { c as create_ssr_component, e as escape, a as subscribe, v as validate_component, d as each, b as add_attribute } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/firebase.js";
const whitespace_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.whitespace.svelte-1gomnly{width:var(--space-width);height:var(--space-height)}.whitespace.svelte-1gomnly::before{content:"";display:block;padding-top:calc(var(--space-height) / var(--space-width) * 100%)}',
  map: null
};
const Whitespace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "100%" } = $$props;
  let { height = "0px" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$1);
  return `<div class="whitespace svelte-1gomnly" style="${"--space-width: " + escape(width, true) + ";--space-height: " + escape(height, true)}"></div>`;
});
const CIcon = "/_app/immutable/assets/c-icon.abd74b38.svg";
const JavaIcon = "/_app/immutable/assets/java-icon.3db65323.svg";
const ReactIcon = "/_app/immutable/assets/reactjs-icon.e8f9b857.svg";
const RustIcon = "/_app/immutable/assets/rust-lang-icon.ba5539ba.svg";
const SassIcon = "/_app/immutable/assets/sass-lang-icon.e98dfe0d.svg";
const Svelteicon = "/_app/immutable/assets/svelte-logo.dc8a06dc.svg";
const TSIcon = "/_app/immutable/assets/typescriptlang-icon.ec953d09.svg";
const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
const AboutText = {
  text
};
const InfoBoxData = [
  {
    name: "Rust",
    description: "My workhorse. Its wide range of applications and stable ecosystem affords giving the language and its environment a lot of focus. I usually use Rust for any CLI tool and backends",
    tools: [
      "Tauri",
      "Diesel",
      "Egui",
      "Warp",
      "WASM"
    ],
    ability: 5
  },
  {
    name: "TS",
    description: "My preferred language for the web.",
    tools: [
      "Node",
      "Vite",
      "React",
      "Svelte"
    ],
    ability: 4
  },
  {
    name: "React",
    description: "An intuitive frontend library. Using React with TSX and Vite makes for great DX. I'll usually want to use React with React Router and a custom backend or BAAS solutions like Firebase.",
    tools: [
      "React Router",
      "Next (Future)"
    ],
    ability: 4
  },
  {
    name: "Svelte",
    description: "My favourite frontend framework. Always used with SvelteKit for building full-stack apps with great DX and reasonable performance. I used SvelteKit for this site.",
    ability: 4
  },
  {
    name: "Sass",
    description: "A must to improve DX with CSS. I'll often use this or UnoCSS or Tailwind instead.",
    ability: 3
  },
  {
    name: "Java",
    description: "Coded with Java through my programming class. It being general purpose and its broad adoption makes it practical for many problems. I'm also interested in the adjacent technologies Scala and Kotlin.",
    tools: [
      "Swing"
    ],
    ability: 3
  },
  {
    name: "C/C++",
    description: "C & C++ are must-know languages for building performance-critical systems. My experience with them are primarily from IOT Projects and CLI applications.",
    tools: [
      "STL (C++)",
      "Posix Lib (C)",
      "IOT Programming",
      "Juce (C++)"
    ],
    ability: 4
  }
];
const ThemeColors = {
  Rust: "#ff9900",
  TS: "#007acc",
  React: "#00d8ff",
  Svelte: "#ff3e00",
  Sass: "#cf649a",
  Java: "#4e7896",
  C: "#283593",
  Default: "#e0e0e0"
};
const theme = writable(ThemeColors.Default);
var option;
((option2) => {
  option2.match = (val, arms) => {
    if (val === null)
      return arms.None();
    else
      return arms.Some(val);
  };
  option2.isSome = (val) => {
    return val !== void 0 && val !== null;
  };
  option2.isNone = (val) => {
    return !(0, option2.isSome)(val);
  };
  option2.unwrap = (val) => {
    if (val === null)
      throw new Error("Unwrapped a 'None' value");
    else
      return val;
  };
  option2.unwrapOr = (val, defaultValue) => {
    if (val === null)
      return defaultValue;
    else
      return val;
  };
  option2.expect = (val, message) => {
    if (val === null)
      throw new Error(message);
    else
      return val;
  };
})(option || (option = {}));
const infobox_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{color:hsl(0, 0%, 100%);background:#151515}p, a, button{font-family:"Instrument Sans", sans-serif;font-size:25px;text-decoration:none}a{color:hsla(0, 0%, 100%, 0.25);transition:color 0.2s ease-in-out}h1, h2, h3, h4{font-family:"Gabarito", sans-serif;font-weight:600}h1{font-size:61px;letter-spacing:4px}h2{font-size:39px;letter-spacing:2px}h3{font-size:25px}h4{color:hsla(0, 0%, 100%, 0.5);font-size:25px}.infobox>p.svelte-18tja11.svelte-18tja11{font-size:20px}.infobox h3.svelte-18tja11.svelte-18tja11{font-size:20px;margin-bottom:-20px}body::-webkit-scrollbar{display:none}button{display:inline;width:10rem;height:3rem;border-radius:0.5rem;border:none;background-color:hsla(0, 0%, 100%, 0.25);color:hsl(0, 0%, 100%);font-size:1.2rem;font-weight:600;transition:background-color 0.2s ease-in-out}button:hover{background-color:hsla(0, 0%, 100%, 0.75)}#dynBg.svelte-18tja11.svelte-18tja11{position:absolute;top:0;left:0;filter:blur(64px);transition:opacity 0.5s ease-in-out;-webkit-transition:opacity 0.5s ease-in-out;-moz-transition:opacity 0.5s ease-in-out;z-index:-1}#bgimg-persistent.svelte-18tja11.svelte-18tja11{position:absolute;top:0;left:0;filter:blur(64px);z-index:-2}#facts-quad.svelte-18tja11.svelte-18tja11{display:flex;gap:3rem}#facts-column.svelte-18tja11.svelte-18tja11{display:flex;flex-direction:column;align-items:last baseline;gap:1rem}#hero.svelte-18tja11 h1.svelte-18tja11,#hero.svelte-18tja11 h2.svelte-18tja11{text-align:center}#main-heading.svelte-18tja11.svelte-18tja11{line-height:0.2}.tech-icon{aspect-ratio:1/1;width:4rem;filter:grayscale(100%);transition:filter 0.2s ease-in-out}.tech-icon:hover{filter:grayscale(0%)}#techview.svelte-18tja11.svelte-18tja11{display:flex;justify-content:center;flex-wrap:wrap;gap:3rem;margin-top:2rem}#call-to-action.svelte-18tja11.svelte-18tja11{display:flex;justify-content:center;align-items:center;gap:1rem}#short-about.svelte-18tja11.svelte-18tja11{display:flex;flex-direction:column;align-items:center;gap:1rem}#short-about.svelte-18tja11 h3.svelte-18tja11{text-align:center}#short-about.svelte-18tja11 p.svelte-18tja11{text-align:center;max-width:50rem}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dynBgOpacity, $$unsubscribe_dynBgOpacity;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  const InfoTexts = InfoBoxData;
  const infos = [
    {
      text: InfoTexts[0],
      image: RustIcon,
      hex: ThemeColors.Rust
    },
    {
      text: InfoTexts[1],
      image: TSIcon,
      hex: ThemeColors.TS
    },
    {
      text: InfoTexts[2],
      image: ReactIcon,
      hex: ThemeColors.React
    },
    {
      text: InfoTexts[3],
      image: Svelteicon,
      hex: ThemeColors.Svelte
    },
    {
      text: InfoTexts[4],
      image: SassIcon,
      hex: ThemeColors.Sass
    },
    {
      text: InfoTexts[5],
      image: JavaIcon,
      hex: ThemeColors.Java
    },
    {
      text: InfoTexts[6],
      image: CIcon,
      hex: ThemeColors.C
    }
  ];
  let dynBgOpacity = writable(0);
  $$unsubscribe_dynBgOpacity = subscribe(dynBgOpacity, (value) => $dynBgOpacity = value);
  $$result.css.add(css);
  $$unsubscribe_dynBgOpacity();
  $$unsubscribe_theme();
  return `<div style="${"--op: " + escape($dynBgOpacity, true) + ";"}"><img id="dynBg" src="src/routes/assets/img/coloursplash.webp" alt="" style="opacity: var(--op); transition: opacity 0.5s ease-in-out;" srcset="" class="svelte-18tja11"></div> <div style="${"--op: " + escape(1 - $dynBgOpacity, true) + ";"}"><img id="bgimg-persistent" src="src/routes/assets/img/coloursplash.webp" alt="" style="opacity: var(--op); transition: opacity 0.5s ease-in-out;" srcset="" class="svelte-18tja11"></div> <div id="hero" class="svelte-18tja11"><h1 id="main-heading" class="svelte-18tja11" data-svelte-h="svelte-1b8vhrm">Laurits Hillemann</h1> <h2 class="svelte-18tja11" data-svelte-h="svelte-74ir76">Fullstack Dev | Native Dev</h2> <div id="call-to-action" class="svelte-18tja11"><p class="svelte-18tja11" data-svelte-h="svelte-15l0mru">I&#39;m a pragmatic generalist ready to solve your problems</p> <div style="${"--theme: " + escape($theme, true)}"><button style="background:var(--theme);" data-svelte-h="svelte-18gns31">Contact</button></div></div></div> ${validate_component(Whitespace, "Whitespace").$$render($$result, { height: "20rem" }, {}, {})} <div id="techview" class="svelte-18tja11"> ${each(infos, (info) => {
    return `<div><img${add_attribute("src", info.image, 0)} alt=""${add_attribute("id", info.text.name, 0)} class="tech-icon svelte-18tja11"> </div>`;
  })}</div> ${validate_component(Whitespace, "Whitespace").$$render($$result, { height: "20rem" }, {}, {})} <div id="short-about" class="svelte-18tja11"><h3 class="svelte-18tja11" data-svelte-h="svelte-dnshfn">Hello!</h3> <p class="svelte-18tja11">${escape(AboutText.text)}</p> <div id="facts-quad" class="svelte-18tja11" data-svelte-h="svelte-b014lp"><div class="facts-column"><p class="svelte-18tja11">📍 Greve, Denmark</p> <p class="svelte-18tja11">🗣 Danish &amp; English</p></div> <div class="facts-column"><p class="svelte-18tja11">♂ He/Him</p> <p class="svelte-18tja11">🎓 HTX Graduate</p></div></div> </div>`;
});
export {
  Page as default
};
