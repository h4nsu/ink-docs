"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9833],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3464:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Call Your Contract",slug:"/getting-started/calling-your-contract"},i=void 0,l={unversionedId:"getting-started/calling",id:"version-4.0.0-alpha.1/getting-started/calling",title:"Call Your Contract",description:"Now that your contract has been fully deployed, we can start interacting with it! Flipper only has",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/getting-started/calling.md",sourceDirName:"getting-started",slug:"/getting-started/calling-your-contract",permalink:"/es/4.0.0-alpha.1/getting-started/calling-your-contract",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/getting-started/calling.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Call Your Contract",slug:"/getting-started/calling-your-contract"},sidebar:"reference",previous:{title:"Deploy Your Contract",permalink:"/es/4.0.0-alpha.1/getting-started/deploy-your-contract"},next:{title:"Troubleshooting",permalink:"/es/4.0.0-alpha.1/getting-started/troubleshooting"}},c={},s=[{value:"1. get() function",id:"1-get-function",level:3},{value:"2. flip() function",id:"2-flip-function",level:3}],p={toc:s};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that your contract has been fully deployed, we can start interacting with it! Flipper only has\ntwo functions, ",(0,a.kt)("inlineCode",{parentName:"p"},"flip()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," so we will show you what it's like to play with both of them."),(0,a.kt)("h3",{id:"1-get-function"},"1. get() function"),(0,a.kt)("p",null,"We set the initial value of the Flipper contract\n",(0,a.kt)("inlineCode",{parentName:"p"},"value")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," when we instantiated the contract. Let's check that this is the case."),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Message to Send"),' section, select the "',(0,a.kt)("strong",{parentName:"p"},"get(): bool"),'" message and accept the default\nvalues for the other options.'),(0,a.kt)("p",null,"Press ",(0,a.kt)("strong",{parentName:"p"},'"Read"')," and confirm that it returns the value ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An image of Flipper RPC call with false",src:n(7142).Z,width:"2379",height:"1442"})),(0,a.kt)("h3",{id:"2-flip-function"},"2. flip() function"),(0,a.kt)("p",null,"So let's make the value turn ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," now!"),(0,a.kt)("p",null,"The alternative message to send with the UI is ",(0,a.kt)("inlineCode",{parentName:"p"},"flip()"),". Again, accept the default values for the other options and click ",(0,a.kt)("strong",{parentName:"p"},"Call")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An image of a Flipper transaction",src:n(2215).Z,width:"2212",height:"1448"})),(0,a.kt)("p",null,"If the transaction was successful, we should then be able to go back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," function and see our updated storage:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An image of Flipper RPC call with true",src:n(217).Z,width:"2367",height:"1441"})),(0,a.kt)("p",null,"Woohoo! You deployed your first smart contract!"))}u.isMDXComponent=!0},7142:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/flipper-false-43f1db9996ab4f0962983033eeec0d0d.png"},217:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/flipper-true-15a74eb2a5f9653cf1438056d9b11cd1.png"},2215:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/send-as-transaction-25c96f27b353d7e9f3021cfa1ff68f46.png"}}]);