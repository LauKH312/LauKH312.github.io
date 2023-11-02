import{i as B,s as T,c as N,d as O,u as R,g as U,e as G,f as K,n as F}from"../chunks/scheduler.edd63ea2.js";import{S as J,i as Q,g as h,s as w,h as g,j as S,x as A,c as I,f as _,k as f,y as C,a as j,z as k,t as D,b as W,d as H,A as X,B as Y,p as Z}from"../chunks/index.04baa6b2.js";import{p as $}from"../chunks/stores.6dd73609.js";import{d as x}from"../chunks/index.6169bf2e.js";const ee=!0;function te({url:l}){return{url:l.pathname}}const ce=Object.freeze(Object.defineProperty({__proto__:null,load:te,prerender:ee},Symbol.toStringTag,{value:"Module"})),se=""+new URL("../assets/github-mark-white.60d03f0f.png",import.meta.url).href,le=""+new URL("../assets/mail-icon-filled.c46d9a9c.svg",import.meta.url).href;function E(l,{delay:t=0,duration:a=400,easing:i=B}={}){const r=+getComputedStyle(l).opacity;return{delay:t,duration:a,easing:i,css:c=>`opacity: ${c*r}`}}function P(l){let t,a,i,r;const c=l[4].default,e=O(c,l,l[3],null);return{c(){t=h("div"),e&&e.c()},l(n){t=g(n,"DIV",{});var o=S(t);e&&e.l(o),o.forEach(_)},m(n,o){j(n,t,o),e&&e.m(t,null),r=!0},p(n,o){l=n,e&&e.p&&(!r||o&8)&&R(e,c,l,l[3],r?G(c,l[3],o,null):U(l[3]),null)},i(n){r||(H(e,n),n&&K(()=>{r&&(i&&i.end(1),a=X(t,E,{duration:M,delay:M}),a.start())}),r=!0)},o(n){D(e,n),a&&a.invalidate(),n&&(i=Y(t,E,{duration:M})),r=!1},d(n){n&&_(t),e&&e.d(n),n&&i&&i.end()}}}function ae(l){let t,a,i,r="Home",c,e,n="Projects",o,v,V="Blog",L,q=l[0].url,b,p,z=`<div class="maxdist svelte-3l58up"><div id="footerlinks" class="svelte-3l58up"><a href="https://github.com/LauKH312" class="svelte-3l58up"><img src="${se}" alt="" class="footer-icon svelte-3l58up"/></a> <a href="mailto:laurits.k.hillemann@gmail.com" class="svelte-3l58up"><img src="${le}" alt="" class="footer-icon svelte-3l58up"/></a></div> <div><p class="svelte-3l58up">Phone: +45 22 38 99 10</p></div></div>`,m,d=P(l);return{c(){t=h("div"),a=h("nav"),i=h("a"),i.textContent=r,c=w(),e=h("a"),e.textContent=n,o=w(),v=h("a"),v.textContent=V,L=w(),d.c(),b=w(),p=h("div"),p.innerHTML=z,this.h()},l(s){t=g(s,"DIV",{id:!0,class:!0});var u=S(t);a=g(u,"NAV",{id:!0,class:!0});var y=S(a);i=g(y,"A",{href:!0,class:!0,"data-svelte-h":!0}),A(i)!=="svelte-g5qct"&&(i.textContent=r),c=I(y),e=g(y,"A",{href:!0,class:!0,"data-svelte-h":!0}),A(e)!=="svelte-1n1lywo"&&(e.textContent=n),o=I(y),v=g(y,"A",{href:!0,class:!0,"data-svelte-h":!0}),A(v)!=="svelte-1f5bvy"&&(v.textContent=V),y.forEach(_),u.forEach(_),L=I(s),d.l(s),b=I(s),p=g(s,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),A(p)!=="svelte-1wzthqh"&&(p.innerHTML=z),this.h()},h(){f(i,"href","/"),f(i,"class","svelte-3l58up"),C(i,"active",!l[1].includes("/projects")&&!l[1].includes("/blog")),f(e,"href","/projects"),f(e,"class","svelte-3l58up"),C(e,"active",l[1].includes("/projects")),f(v,"href","/blog"),f(v,"class","svelte-3l58up"),C(v,"active",l[1].includes("/blog")),f(a,"id","routes"),f(a,"class","svelte-3l58up"),f(t,"id","header"),f(t,"class","svelte-3l58up"),f(p,"id","footer"),f(p,"class","svelte-3l58up")},m(s,u){j(s,t,u),k(t,a),k(a,i),k(a,c),k(a,e),k(a,o),k(a,v),j(s,L,u),d.m(s,u),j(s,b,u),j(s,p,u),m=!0},p(s,[u]){(!m||u&2)&&C(i,"active",!s[1].includes("/projects")&&!s[1].includes("/blog")),(!m||u&2)&&C(e,"active",s[1].includes("/projects")),(!m||u&2)&&C(v,"active",s[1].includes("/blog")),u&1&&T(q,q=s[0].url)?(Z(),D(d,1,1,F),W(),d=P(s),d.c(),H(d,1),d.m(b.parentNode,b)):d.p(s,u)},i(s){m||(H(d),m=!0)},o(s){D(d),m=!1},d(s){s&&(_(t),_(L),_(b),_(p)),d.d(s)}}}const M=150;function ie(l,t,a){let i,{$$slots:r={},$$scope:c}=t,{data:e}=t;const n=x($,o=>o.url.pathname);return N(l,n,o=>a(1,i=o)),l.$$set=o=>{"data"in o&&a(0,e=o.data),"$$scope"in o&&a(3,c=o.$$scope)},[e,i,n,c,r]}class de extends J{constructor(t){super(),Q(this,t,ie,ae,T,{data:0})}}export{de as component,ce as universal};