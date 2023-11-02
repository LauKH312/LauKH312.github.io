import { c as create_ssr_component, d as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Projects = [
  {
    name: "Img-Share",
    description: "A simple image sharing app. Its frontend is built with Asp.NET and Razor Views. The backend is built with Rust, Diesel & MySQL.",
    image: "wip.png",
    link: "https://www.github.com/laukh312/img-share"
  },
  {
    name: "Passmanager",
    description: "A CLI password manager built with Rust. Uses AES-256 encryption.",
    image: "passmanager.png",
    link: "https://www.github.com/laukh312/passmanager"
  },
  {
    name: "ImgEdit",
    description: "A Lightroom-inspired image editor built with Swing. Features custom multithreading system and a range of processing options. Built with a classmate for 'Programmering B'",
    image: "imgedit.png",
    link: "https://www.github.com/laukh312/imgedit"
  },
  {
    name: "DataViz",
    description: "A data collection and visualization tool built with Swing and JSerialComm. Features serial communication and CSV-deserialization. Built with a classmate as the final project of 'Programmering B'",
    image: "dataviz.png",
    link: "https://www.github.com/laukh312/dataviz"
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-57aztl.svelte-57aztl{text-align:center}#projects.svelte-57aztl.svelte-57aztl{display:flex;flex-direction:row;justify-content:space-evenly}#project-link.svelte-57aztl.svelte-57aztl{text-decoration:none;margin:1rem 2rem}.project-item.svelte-57aztl.svelte-57aztl{display:flex;align-items:center;justify-content:space-between;margin:4rem 0}.project-item.svelte-57aztl h3.svelte-57aztl{margin-bottom:-1rem}.project-image.svelte-57aztl.svelte-57aztl{width:20rem;border-radius:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const getTextAlign = (proj) => {
    return Projects.indexOf(proj) % 2 == 0 ? "left" : "right";
  };
  $$result.css.add(css);
  return `<h1 class="svelte-57aztl" data-svelte-h="svelte-136d6se">Projects</h1> <div id="projects" class="svelte-57aztl"><div style="width: 45%">${each(Projects, (project) => {
    return `<div${add_attribute("id", project.name, 0)} class="project-item svelte-57aztl" style="${"flex-direction: " + escape(
      Projects.indexOf(project) % 2 == 0 ? "row" : "row-reverse",
      true
    ) + ";"}"><a${add_attribute("href", project.link, 0)} id="project-link" class="svelte-57aztl" data-svelte-h="svelte-x0ad6p"><img${add_attribute("src", "./src/routes/assets/img/projects/" + project.image, 0)}${add_attribute("alt", project.name, 0)} class="project-image svelte-57aztl"></a> <div><h3 style="${"text-align: " + escape(getTextAlign(project), true) + ";"}" class="svelte-57aztl">${escape(project.name)}</h3> <p style="${"text-align: " + escape(getTextAlign(project), true) + ";"}">${escape(project.description)} </p></div> </div>`;
  })}</div> </div>`;
});
export {
  Page as default
};
