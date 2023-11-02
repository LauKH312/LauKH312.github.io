import{i as B,s as T,c as N,d as O,u as R,g as U,e as G,f as K,n as F}from"../chunks/scheduler.e13fff0d.js";import{S as J,i as Q,g as h,s as w,h as k,j as S,x as A,c as I,f as p,k as f,y,a as j,z as C,t as D,b as W,d as H,A as X,B as Y,p as Z}from"../chunks/index.cf251e3a.js";import{p as $}from"../chunks/stores.86197c6e.js";import{d as x}from"../chunks/index.2208d456.js";const ee=!0;function te({url:a}){return{url:a.pathname}}const ue=Object.freeze(Object.defineProperty({__proto__:null,load:te,prerender:ee},Symbol.toStringTag,{value:"Module"})),se=""+new URL("../assets/github-mark-white.60d03f0f.png",import.meta.url).href,ae=""+new URL("../assets/mail-icon-filled.c46d9a9c.svg",import.meta.url).href;function E(a,{delay:t=0,duration:l=400,easing:i=B}={}){const r=+getComputedStyle(a).opacity;return{delay:t,duration:l,easing:i,css:u=>`opacity: ${u*r}`}}function P(a){let t,l,i,r;const u=a[4].default,e=O(u,a,a[3],null);return{c(){t=h("div"),e&&e.c()},l(n){t=k(n,"DIV",{});var o=S(t);e&&e.l(o),o.forEach(p)},m(n,o){j(n,t,o),e&&e.m(t,null),r=!0},p(n,o){a=n,e&&e.p&&(!r||o&8)&&R(e,u,a,a[3],r?G(u,a[3],o,null):U(a[3]),null)},i(n){r||(H(e,n),n&&K(()=>{r&&(i&&i.end(1),l=X(t,E,{duration:M,delay:M}),l.start())}),r=!0)},o(n){D(e,n),l&&l.invalidate(),n&&(i=Y(t,E,{duration:M})),r=!1},d(n){n&&p(t),e&&e.d(n),n&&i&&i.end()}}}function le(a){let t,l,i,r="Home",u,e,n="Projects",o,v,V="Blog",L,q=a[0].url,g,_,z=`<div class="maxdist svelte-1i1018k"><div id="footerlinks" class="svelte-1i1018k"><a href="https://github.com/LauKH312" class="svelte-1i1018k"><img src="${se}" alt="" class="footer-icon svelte-1i1018k"/></a> <a href="mailto:laurits.k.hillemann@gmail.com" class="svelte-1i1018k"><img src="${ae}" alt="" class="footer-icon svelte-1i1018k"/></a></div> <div><p class="svelte-1i1018k">Phone: +45 22 38 99 10</p></div></div>`,m,d=P(a);return{c(){t=h("div"),l=h("nav"),i=h("a"),i.textContent=r,u=w(),e=h("a"),e.textContent=n,o=w(),v=h("a"),v.textContent=V,L=w(),d.c(),g=w(),_=h("div"),_.innerHTML=z,this.h()},l(s){t=k(s,"DIV",{id:!0,class:!0});var c=S(t);l=k(c,"NAV",{id:!0,class:!0});var b=S(l);i=k(b,"A",{href:!0,class:!0,"data-svelte-h":!0}),A(i)!=="svelte-g5qct"&&(i.textContent=r),u=I(b),e=k(b,"A",{href:!0,class:!0,"data-svelte-h":!0}),A(e)!=="svelte-1n1lywo"&&(e.textContent=n),o=I(b),v=k(b,"A",{href:!0,class:!0,"data-svelte-h":!0}),A(v)!=="svelte-1f5bvy"&&(v.textContent=V),b.forEach(p),c.forEach(p),L=I(s),d.l(s),g=I(s),_=k(s,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),A(_)!=="svelte-1wzthqh"&&(_.innerHTML=z),this.h()},h(){f(i,"href","/"),f(i,"class","svelte-1i1018k"),y(i,"active",!a[1].includes("/projects")&&!a[1].includes("/blog")),f(e,"href","/projects"),f(e,"class","svelte-1i1018k"),y(e,"active",a[1].includes("/projects")),f(v,"href","/blog"),f(v,"class","svelte-1i1018k"),y(v,"active",a[1].includes("/blog")),f(l,"id","routes"),f(l,"class","svelte-1i1018k"),f(t,"id","header"),f(t,"class","svelte-1i1018k"),f(_,"id","footer"),f(_,"class","svelte-1i1018k")},m(s,c){j(s,t,c),C(t,l),C(l,i),C(l,u),C(l,e),C(l,o),C(l,v),j(s,L,c),d.m(s,c),j(s,g,c),j(s,_,c),m=!0},p(s,[c]){(!m||c&2)&&y(i,"active",!s[1].includes("/projects")&&!s[1].includes("/blog")),(!m||c&2)&&y(e,"active",s[1].includes("/projects")),(!m||c&2)&&y(v,"active",s[1].includes("/blog")),c&1&&T(q,q=s[0].url)?(Z(),D(d,1,1,F),W(),d=P(s),d.c(),H(d,1),d.m(g.parentNode,g)):d.p(s,c)},i(s){m||(H(d),m=!0)},o(s){D(d),m=!1},d(s){s&&(p(t),p(L),p(g),p(_)),d.d(s)}}}const M=150;function ie(a,t,l){let i,{$$slots:r={},$$scope:u}=t,{data:e}=t;const n=x($,o=>o.url.pathname);return N(a,n,o=>l(1,i=o)),a.$$set=o=>{"data"in o&&l(0,e=o.data),"$$scope"in o&&l(3,u=o.$$scope)},[e,i,n,u,r]}class de extends J{constructor(t){super(),Q(this,t,ie,le,T,{data:0})}}export{de as component,ue as universal};