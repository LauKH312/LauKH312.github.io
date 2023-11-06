import{s as oe,n as Q,o as Be,h as Z,j as be,c as we,r as Me,k as Se}from"../chunks/scheduler.e13fff0d.js";import{S as ce,i as ue,g as _,h as g,j as L,f as u,k as i,l as B,a as w,m as ee,s as x,n as te,c as C,z as v,x as J,r as ye,u as xe,y as z,v as Ce,o as Oe,d as Re,t as Ie,w as Le,e as De,C as je,D as Ee}from"../chunks/index.4a454690.js";import{e as Ue}from"../chunks/each.e59479a4.js";import{w as Ge}from"../chunks/index.2208d456.js";import{Q as ke,f as Je,G as Ne}from"../chunks/utils.a06ed5b1.js";import{d as Te,g as He,f as Pe}from"../chunks/firebase.8de8e33d.js";function Qe(t){let e;return{c(){e=_("div"),this.h()},l(s){e=g(s,"DIV",{class:!0,style:!0}),L(e).forEach(u),this.h()},h(){i(e,"class","whitespace svelte-1gomnly"),B(e,"--space-width",t[0]),B(e,"--space-height",t[1])},m(s,l){w(s,e,l)},p(s,[l]){l&1&&B(e,"--space-width",s[0]),l&2&&B(e,"--space-height",s[1])},i:Q,o:Q,d(s){s&&u(e)}}}function Ae(t,e,s){let{width:l="100%"}=e,{height:n="0px"}=e;return t.$$set=a=>{"width"in a&&s(0,l=a.width),"height"in a&&s(1,n=a.height)},[l,n]}class $e extends ce{constructor(e){super(),ue(this,e,Ae,Qe,oe,{width:0,height:1})}}const Fe=""+new URL("../assets/c-icon.abd74b38.svg",import.meta.url).href,We=""+new URL("../assets/java-icon.3db65323.svg",import.meta.url).href,Xe=""+new URL("../assets/reactjs-icon.e8f9b857.svg",import.meta.url).href,Ye=""+new URL("../assets/rust-lang-icon.ba5539ba.svg",import.meta.url).href,Ke=""+new URL("../assets/sass-lang-icon.e98dfe0d.svg",import.meta.url).href,Ze=""+new URL("../assets/svelte-logo.dc8a06dc.svg",import.meta.url).href,et=""+new URL("../assets/typescriptlang-icon.ec953d09.svg",import.meta.url).href,re=""+new URL("../assets/coloursplash.b7b2cb5c.webp",import.meta.url).href,tt=""+new URL("../assets/C.25d09560.png",import.meta.url).href,st=""+new URL("../assets/Java.94070356.png",import.meta.url).href,at=""+new URL("../assets/React.839dee8f.png",import.meta.url).href,lt=""+new URL("../assets/Rust.f224e1f5.png",import.meta.url).href,nt=""+new URL("../assets/Sass.2a8a164d.png",import.meta.url).href,rt=""+new URL("../assets/Svelte.da5c9080.png",import.meta.url).href,it=""+new URL("../assets/TS.17716d1c.png",import.meta.url).href,y={Rust:"#ff9900",TS:"#007acc",React:"#00d8ff",Svelte:"#ff3e00",Sass:"#cf649a",Java:"#4e7896",C:"#283593",Default:"#e0e0e0"},ne=Ge(y.Default),ot=t=>{switch(t){case y.Rust:return lt;case y.TS:return it;case y.React:return at;case y.Svelte:return rt;case y.Sass:return nt;case y.Java:return st;case y.C:return tt;default:return re}};var ie;(t=>{t.match=(e,s)=>e===null?s.None():s.Some(e),t.isSome=e=>e!=null,t.isNone=e=>!(0,t.isSome)(e),t.unwrap=e=>{if(e===null)throw new Error("Unwrapped a 'None' value");return e},t.unwrapOr=(e,s)=>e===null?s:e,t.expect=(e,s)=>{if(e===null)throw new Error(s);return e}})(ie||(ie={}));function ct(t){var d;let e,s="Tools",l,n,a=((d=t[3])==null?void 0:d.join(", "))+"",c;return{c(){e=_("h3"),e.textContent=s,l=x(),n=_("p"),c=ee(a),this.h()},l(p){e=g(p,"H3",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-1jwiwlz"&&(e.textContent=s),l=C(p),n=g(p,"P",{class:!0});var o=L(n);c=te(o,a),o.forEach(u),this.h()},h(){i(e,"class","svelte-em1y9z"),i(n,"class","svelte-em1y9z")},m(p,o){w(p,e,o),w(p,l,o),w(p,n,o),v(n,c)},p:Q,d(p){p&&(u(e),u(l),u(n))}}}function ut(t){let e,s,l,n,a,c,d,p=ie.isSome(t[3]),o=p&&ct(t);return{c(){e=_("div"),s=_("h3"),l=ee(t[2]),n=x(),a=_("p"),c=ee(t[1]),d=x(),o&&o.c(),this.h()},l(f){e=g(f,"DIV",{class:!0,style:!0});var h=L(e);s=g(h,"H3",{class:!0});var I=L(s);l=te(I,t[2]),I.forEach(u),n=C(h),a=g(h,"P",{class:!0});var b=L(a);c=te(b,t[1]),b.forEach(u),d=C(h),o&&o.l(h),h.forEach(u),this.h()},h(){i(s,"class","svelte-em1y9z"),i(a,"class","svelte-em1y9z"),i(e,"class","infobox svelte-em1y9z"),B(e,"--primary-color",t[0])},m(f,h){w(f,e,h),v(e,s),v(s,l),v(e,n),v(e,a),v(a,c),v(e,d),o&&o.m(e,null)},p(f,[h]){p&&o.p(f,h)},i:Q,o:Q,d(f){f&&u(e),o&&o.d()}}}function ft(t,e,s){let{info:l}=e;const{text:n,hex:a}=l,{ability:c,description:d,name:p,tools:o}=n;return Be(()=>{}),t.$$set=f=>{"info"in f&&s(4,l=f.info)},[a,d,p,o,l]}class mt extends ce{constructor(e){super(),ue(this,e,ft,ut,oe,{info:4})}}function Ve(t,e,s){const l=t.slice();return l[8]=e[s],l}function qe(t){let e,s=Ue(t[0]),l=[];for(let n=0;n<s.length;n+=1)l[n]=ze(Ve(t,s,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=De()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);e=De()},m(n,a){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(n,a);w(n,e,a)},p(n,a){if(a&97){s=Ue(n[0]);let c;for(c=0;c<s.length;c+=1){const d=Ve(n,s,c);l[c]?l[c].p(d,a):(l[c]=ze(d),l[c].c(),l[c].m(e.parentNode,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}},d(n){n&&u(e),je(l,n)}}}function ze(t){let e,s,l,n,a,c,d,p;return{c(){e=_("div"),s=_("img"),c=x(),this.h()},l(o){e=g(o,"DIV",{});var f=L(e);s=g(f,"IMG",{src:!0,alt:!0,id:!0,class:!0}),c=C(f),f.forEach(u),this.h()},h(){Z(s.src,l=t[8].image)||i(s,"src",l),i(s,"alt",n="Logo for "+t[8].text.name),i(s,"id",a=t[8].text.name),i(s,"class","tech-icon svelte-18bpr63")},m(o,f){w(o,e,f),v(e,s),v(e,c),d||(p=[Ee(s,"mouseenter",function(){Se(t[5](t[8]))&&t[5](t[8]).apply(this,arguments)}),Ee(s,"mouseleave",function(){Se(t[6](t[8]))&&t[6](t[8]).apply(this,arguments)})],d=!0)},p(o,f){t=o,f&1&&!Z(s.src,l=t[8].image)&&i(s,"src",l),f&1&&n!==(n="Logo for "+t[8].text.name)&&i(s,"alt",n),f&1&&a!==(a=t[8].text.name)&&i(s,"id",a)},d(o){o&&u(e),d=!1,Me(p)}}}function ht(t){let e,s,l,n,a,c,d,p,o,f,h="Laurits Hillemann",I,b,E="Fullstack Dev | Native Dev",U,R,H,fe="I'm a pragmatic generalist ready to solve your problems",se,G,T,me="Contact",A,M,F,$,V,W,O,X,D,j,he="Hello!",ae,N,Y,le,q,pe='<div class="facts-column"><p class="svelte-18bpr63">📍 Greve, Denmark</p> <p class="svelte-18bpr63">🗣 Danish &amp; English</p></div> <div class="facts-column"><p class="svelte-18bpr63">♂ He/Him</p> <p class="svelte-18bpr63">🎓 HTX Graduate</p></div>',k;M=new $e({props:{height:"15rem"}});let S=t[0]!=null&&qe(t);return O=new $e({props:{height:"15rem"}}),{c(){e=_("img"),n=x(),a=_("img"),p=x(),o=_("div"),f=_("h1"),f.textContent=h,I=x(),b=_("h2"),b.textContent=E,U=x(),R=_("div"),H=_("p"),H.textContent=fe,se=x(),G=_("div"),T=_("a"),T.textContent=me,A=x(),ye(M.$$.fragment),F=x(),$=_("div"),V=_("div"),S&&S.c(),W=x(),ye(O.$$.fragment),X=x(),D=_("div"),j=_("h3"),j.textContent=he,ae=x(),N=_("p"),Y=ee(t[1]),le=x(),q=_("div"),q.innerHTML=pe,this.h()},l(r){e=g(r,"IMG",{id:!0,src:!0,alt:!0,srcset:!0,class:!0}),n=C(r),a=g(r,"IMG",{id:!0,src:!0,alt:!0,srcset:!0,class:!0}),p=C(r),o=g(r,"DIV",{id:!0,class:!0});var m=L(o);f=g(m,"H1",{id:!0,class:!0,"data-svelte-h":!0}),J(f)!=="svelte-1b8vhrm"&&(f.textContent=h),I=C(m),b=g(m,"H2",{class:!0,"data-svelte-h":!0}),J(b)!=="svelte-74ir76"&&(b.textContent=E),U=C(m),R=g(m,"DIV",{id:!0,class:!0});var K=L(R);H=g(K,"P",{"data-svelte-h":!0}),J(H)!=="svelte-15l0mru"&&(H.textContent=fe),se=C(K),G=g(K,"DIV",{style:!0});var ve=L(G);T=g(ve,"A",{style:!0,href:!0,class:!0,"data-svelte-h":!0}),J(T)!=="svelte-fpmr61"&&(T.textContent=me),ve.forEach(u),K.forEach(u),m.forEach(u),A=C(r),xe(M.$$.fragment,r),F=C(r),$=g(r,"DIV",{id:!0,class:!0});var de=L($);V=g(de,"DIV",{id:!0,class:!0});var _e=L(V);S&&S.l(_e),_e.forEach(u),de.forEach(u),W=C(r),xe(O.$$.fragment,r),X=C(r),D=g(r,"DIV",{id:!0,class:!0});var P=L(D);j=g(P,"H3",{class:!0,"data-svelte-h":!0}),J(j)!=="svelte-dnshfn"&&(j.textContent=he),ae=C(P),N=g(P,"P",{class:!0});var ge=L(N);Y=te(ge,t[1]),ge.forEach(u),le=C(P),q=g(P,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),J(q)!=="svelte-b014lp"&&(q.innerHTML=pe),P.forEach(u),this.h()},h(){i(e,"id","dynBg"),Z(e.src,s=re)||i(e,"src",s),i(e,"alt",""),be(e,l="")||i(e,"srcset",l),i(e,"class","svelte-18bpr63"),z(e,"opaque",t[2]==1),z(e,"transparent",t[2]==0),i(a,"id","bgimg-persistent"),Z(a.src,c=re)||i(a,"src",c),i(a,"alt",""),be(a,d="")||i(a,"srcset",d),i(a,"class","svelte-18bpr63"),z(a,"opaque",t[2]==0),z(a,"transparent",t[2]==1),i(f,"id","main-heading"),i(f,"class","svelte-18bpr63"),i(b,"class","svelte-18bpr63"),B(T,"background","var(--theme)"),i(T,"href","mailto:laurits.k.hillemann@gmail.com"),i(T,"class","button svelte-18bpr63"),B(G,"--theme",t[3]),i(R,"id","call-to-action"),i(R,"class","svelte-18bpr63"),i(o,"id","hero"),i(o,"class","svelte-18bpr63"),i(V,"id","techview"),i(V,"class","svelte-18bpr63"),i($,"id","techview-continer"),i($,"class","svelte-18bpr63"),i(j,"class","svelte-18bpr63"),i(N,"class","svelte-18bpr63"),i(q,"id","facts-quad"),i(q,"class","svelte-18bpr63"),i(D,"id","short-about"),i(D,"class","svelte-18bpr63")},m(r,m){w(r,e,m),w(r,n,m),w(r,a,m),w(r,p,m),w(r,o,m),v(o,f),v(o,I),v(o,b),v(o,U),v(o,R),v(R,H),v(R,se),v(R,G),v(G,T),w(r,A,m),Ce(M,r,m),w(r,F,m),w(r,$,m),v($,V),S&&S.m(V,null),w(r,W,m),Ce(O,r,m),w(r,X,m),w(r,D,m),v(D,j),v(D,ae),v(D,N),v(N,Y),v(D,le),v(D,q),k=!0},p(r,[m]){(!k||m&4)&&z(e,"opaque",r[2]==1),(!k||m&4)&&z(e,"transparent",r[2]==0),(!k||m&4)&&z(a,"opaque",r[2]==0),(!k||m&4)&&z(a,"transparent",r[2]==1),(!k||m&8)&&B(G,"--theme",r[3]),r[0]!=null?S?S.p(r,m):(S=qe(r),S.c(),S.m(V,null)):S&&(S.d(1),S=null),(!k||m&2)&&Oe(Y,r[1])},i(r){k||(Re(M.$$.fragment,r),Re(O.$$.fragment,r),k=!0)},o(r){Ie(M.$$.fragment,r),Ie(O.$$.fragment,r),k=!1},d(r){r&&(u(e),u(n),u(a),u(p),u(o),u(A),u(F),u($),u(W),u(X),u(D)),Le(M,r),S&&S.d(),Le(O,r)}}}function pt(t,e,s){let l,n;we(t,ne,h=>s(3,n=h));let a=null,c=null,d=Ge(0);we(t,d,h=>s(2,l=h));let p="";return Be(async()=>{var I,b;const h=Pe;{const E=Te(h,"content","tech-text");a=(I=(await He(E)).data())==null?void 0:I.text,s(0,c=[{text:a[0],image:Ye,hex:y.Rust},{text:a[1],image:et,hex:y.TS},{text:a[2],image:Xe,hex:y.React},{text:a[3],image:Ze,hex:y.Svelte},{text:a[4],image:Ke,hex:y.Sass},{text:a[5],image:We,hex:y.Java},{text:a[6],image:Fe,hex:y.C}])}{const E=Te(h,"content","about-text"),U=await He(E);s(1,p=((b=U.data())==null?void 0:b.text.text)??"")}}),[c,p,l,n,d,h=>()=>{ne.set(h.hex);const I=ke("#dynBg");I.src=ot(h.hex),d.set(1),new mt({target:document.body,props:{info:h}});const b=ke(".infobox");b.id=Je("%s_infobox",h.text.name);const E=Ne(h.text.name),U=b.style;U.zIndex="1";const R=E.getBoundingClientRect(),H=b.getBoundingClientRect();U.top=`${R.top+window.scrollY+100}px`,U.left=`${R.left-H.width/2+R.width/2}px`},h=>()=>{d.set(0);let I=document.getElementsByClassName("infobox");for(const b of I){const E=b.style;E.opacity="0",ne.set(y.Default),b.remove()}}]}class St extends ce{constructor(e){super(),ue(this,e,pt,ht,oe,{})}}export{St as component};