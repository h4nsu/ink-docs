"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2817],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(n),y=a,h=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(h,c(c({ref:e},p),{},{components:n})):r.createElement(h,c({ref:e},p))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Instantiate a Contract",slug:"/cargo-contract-cli/instantiate"},c=void 0,i={unversionedId:"cargo-contract/instantiate",id:"version-4.0.0-alpha.1/cargo-contract/instantiate",title:"Instantiate a Contract",description:"TODO",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/cargo-contract/instantiate.md",sourceDirName:"cargo-contract",slug:"/cargo-contract-cli/instantiate",permalink:"/es/4.0.0-alpha.1/cargo-contract-cli/instantiate",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/cargo-contract/instantiate.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Instantiate a Contract",slug:"/cargo-contract-cli/instantiate"}},s={},l=[],p={toc:l};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TODO"),(0,a.kt)("p",null,"I am trying to deploy and instantiate a contract using a custom-built cargo-contract with the extrinsics feature. The 'deploy' and 'instantiate' commands require a \"secret key uri\" and \"secret key password\" that I don't know how to find for my canvas devnet. Can somebody help me understand what these are and how to obtain them?"),(0,a.kt)("p",null,"You probably just need to the key for some account with enough funds to deploy and instantiate the contract...I don't think the key is specific to the node in any way\nIf you're running the Canvas node in dev mode, these are the accounts that are pre-funded ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/canvas-node/blob/master/node/src/chain_spec.rs#L76"},"https://github.com/paritytech/canvas-node/blob/master/node/src/chain_spec.rs#L76"),"\nPeople typically use Alice...her information is here ",(0,a.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/tools/subkey/#well-known-keys"},"https://docs.substrate.io/v3/tools/subkey/#well-known-keys")," I guess you'd just leave the password blank\nSo the secret key URI will be bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice I think"))}u.isMDXComponent=!0}}]);