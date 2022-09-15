"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Overview",slug:"/examples"},i=void 0,l={unversionedId:"examples/overview",id:"version-4.0.0-alpha.1/examples/overview",title:"Overview",description:"In our examples folder you find a number of examples written in ink!.",source:"@site/versioned_docs/version-4.0.0-alpha.1/examples/overview.md",sourceDirName:"examples",slug:"/examples",permalink:"/4.0.0-alpha.1/examples",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/examples/overview.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Overview",slug:"/examples"},sidebar:"reference",previous:{title:"Custom Data Structures",permalink:"/4.0.0-alpha.1/datastructures/custom-datastructure"},next:{title:"Overview",permalink:"/4.0.0-alpha.1/cargo-contract-cli"}},p={},c=[],s={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In our ",(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples"},"examples folder")," you find a number of examples written in ink!."),(0,a.kt)("p",null,"Some of the most interesting ones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delegator")," \u2012 Implements cross-contract calling."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trait-erc20")," \u2012 Defines a trait for ",(0,a.kt)("inlineCode",{parentName:"li"},"Erc20")," contracts and implements it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"erc721")," \u2012 An exemplary implementation of ",(0,a.kt)("inlineCode",{parentName:"li"},"Erc721")," NFT tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dns")," \u2012  A simple ",(0,a.kt)("inlineCode",{parentName:"li"},"DomainNameService")," smart contract."),(0,a.kt)("li",{parentName:"ul"},"\u2026and more, just rummage through the folder \ud83d\ude43.")),(0,a.kt)("p",null,"To build a single example navigate to the root of the example and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract build\n")),(0,a.kt)("p",null,"As a result you'll get a file ",(0,a.kt)("inlineCode",{parentName:"p"},"target/flipper.wasm")," file, a ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.json")," file and a ",(0,a.kt)("inlineCode",{parentName:"p"},"<contract-name>.contract")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"target/")," folder of your contract.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},".contract")," file combines the Wasm and metadata into one file and needs to be used when deploying the contract."),(0,a.kt)("p",null,"For further information, please have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/deploy-your-contract"},"Deploy your Contract")," section or our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/ink-workshop/pt1"},"smart contracts workshop"),"."))}m.isMDXComponent=!0}}]);