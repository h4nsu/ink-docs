"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Introducci\xf3n",slug:"/"},i=void 0,s={unversionedId:"intro/intro",id:"intro/intro",title:"Introducci\xf3n",description:"Con ink! podes desarrollar smart contracts en Rust, para Blockchains desarrollados con el",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intro/intro.mdx",sourceDirName:"intro",slug:"/",permalink:"/es/",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/intro.mdx",tags:[],version:"current",frontMatter:{title:"Introducci\xf3n",slug:"/"},sidebar:"reference",next:{title:"Why Rust for Smart Contracts?",permalink:"/es/why-rust-for-smart-contracts"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("img",{src:"./img/ink-squink.svg",alt:"Squink \u2012 the ink! mascot",className:"squid",height:"90"}),(0,o.kt)("h2",null,"Con ink! podes desarrollar smart contracts en Rust, para Blockchains desarrollados con el framework de ",(0,o.kt)("a",{href:"https://github.com/paritytech/substrate"},"Substrate"),".")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/paritytech/ink?label=ink!%20on%20GitHub",alt:"version"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/#ink:matrix.parity.io"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/matrix-chat-brightgreen.svg?style=flat",alt:"matrix"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/j2DKRRbSJ"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/722223075629727774?style=flat-square&label=discord",alt:"discord"}))),(0,o.kt)("p",null,"En este portal buscamos proveer de documentaci\xf3n exhaustiva para el desarrollo de cualquier proyecto\ncon ink!."),(0,o.kt)("p",null,"En caso de necesitar un tutorial paso a paso dedicado para principiantes, por favor dirijirse a nuestro\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/ink-workshop/pt1"},"Tutorial Guiado"),"."),(0,o.kt)("p",null,"De encontrar errores en la documentaci\xf3n provista, o si ciertas \xe1reas son poco claras, por favor d\xe9janoslo\nsaber, ya sea ",(0,o.kt)("a",{href:"https://github.com/paritytech/ink-docs/issues"},"creando un issue"),"\no ",(0,o.kt)("a",{href:"https://github.com/paritytech/ink-docs/pulls"},"haciendo un pull-request"),"."),(0,o.kt)("p",null,"Nuestro objetivo es proveer buena documentaci\xf3n para que los desarrolladores sean lo m\xe1s productivos posible."))}u.isMDXComponent=!0}}]);