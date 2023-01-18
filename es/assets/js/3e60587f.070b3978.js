"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7571],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),g=r,h=d["".concat(i,".").concat(g)]||d[g]||p[g]||a;return o?n.createElement(h,s(s({ref:t},u),{},{components:o})):n.createElement(h,s({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9551:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={title:"Troubleshooting",slug:"/getting-started/troubleshooting"},s=void 0,l={unversionedId:"getting-started/troubleshooting",id:"version-4.0.0-alpha.1/getting-started/troubleshooting",title:"Troubleshooting",description:"Here are solutions to some of the common problems you may come across:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/getting-started/troubleshooting.md",sourceDirName:"getting-started",slug:"/getting-started/troubleshooting",permalink:"/es/4.0.0-alpha.1/getting-started/troubleshooting",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/getting-started/troubleshooting.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Troubleshooting",slug:"/getting-started/troubleshooting"},sidebar:"reference",previous:{title:"Call Your Contract",permalink:"/es/4.0.0-alpha.1/getting-started/calling-your-contract"},next:{title:"Contract Template",permalink:"/es/4.0.0-alpha.1/basics/contract-template"}},i={},c=[{value:"Unexpected Epoch Change",id:"unexpected-epoch-change",level:3},{value:"Old Contracts in Local Storage",id:"old-contracts-in-local-storage",level:3},{value:"Other Issues",id:"other-issues",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here are solutions to some of the common problems you may come across:"),(0,r.kt)("h3",{id:"unexpected-epoch-change"},"Unexpected Epoch Change"),(0,r.kt)("p",null,"There is a known issue with the Substrate block production (BABE) on a running chain. If you stop your node for too long (closing the terminal, putting your computer to sleep, etc.), you will get the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ClientImport("Unexpected epoch change")\n')),(0,r.kt)("p",null,"To solve this you will need to restart your node with: ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node --dev --tmp"),". At that point, you will\nneed to re-deploy any contracts and re-do any steps that you may have done before on your node. As\nlong as you keep your node running, you should face no issues."),(0,r.kt)("h3",{id:"old-contracts-in-local-storage"},"Old Contracts in Local Storage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Contracts UI")," uses its own local storage to track the contracts that you have deployed. This means\nthat if you deploy a contract using the UI, and then purge your Substrate node, you will be prompted to\nreset your local storage and please do so. And then re-deploy any contracts and re-do any steps that\nyou may have done before on your node."),(0,r.kt)("h3",{id:"other-issues"},"Other Issues"),(0,r.kt)("p",null,"If you run into any other issues during this tutorial, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-docs/issues"},"report an issue"),"!"))}p.isMDXComponent=!0}}]);