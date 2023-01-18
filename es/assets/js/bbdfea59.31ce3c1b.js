"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,f=m["".concat(s,".").concat(b)]||m[b]||u[b]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"#[ink(payable)]",slug:"/macros-attributes/payable"},i=void 0,o={unversionedId:"macros-attributes/payable",id:"version-4.0.0-alpha.1/macros-attributes/payable",title:"#[ink(payable)]",description:"Applicable to ink! messages.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/macros-attributes/payable.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/payable",permalink:"/es/4.0.0-alpha.1/macros-attributes/payable",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/macros-attributes/payable.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"#[ink(payable)]",slug:"/macros-attributes/payable"},sidebar:"reference",previous:{title:'#[ink(namespace = "\u2026")]',permalink:"/es/4.0.0-alpha.1/macros-attributes/namespace"},next:{title:"#[ink(selector = S:u32)]",permalink:"/es/4.0.0-alpha.1/macros-attributes/selector"}},s={},p=[{value:"Example",id:"example",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Applicable to ink! messages."),(0,r.kt)("p",null,"Allows receiving value as part of the call of the ink! message.\nink! constructors are implicitly payable, due to the initial endowment which a contract requires."),(0,r.kt)("p",null,"An ink! message by default will reject calls that additional fund the smart contract.\nAuthors of ink! smart contracts can make an ink! message payable by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"payable"),"\nflag to it. An example below:"),(0,r.kt)("p",null,"Note that ink! constructors are always implicitly payable and thus cannot be flagged\nas such."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(payable)] // You can either specify payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message, payable)] // or specify payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message, payable)]\npub fn pay_me(&self) {\n    let _transferred = self.env().transferred_balance();\n}\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/contract-transfer/lib.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"examples/contract-transfer"))," contract for a more extensive example."))}u.isMDXComponent=!0}}]);