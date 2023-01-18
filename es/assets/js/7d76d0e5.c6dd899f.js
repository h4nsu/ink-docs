"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Mutating Storage Values",slug:"/basics/mutating-values"},i=void 0,s={unversionedId:"basics/mutating-values",id:"basics/mutating-values",title:"Mutating Storage Values",description:"It's time to modify some storage!",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/mutating-values.md",sourceDirName:"basics",slug:"/basics/mutating-values",permalink:"/es/basics/mutating-values",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/mutating-values.md",tags:[],version:"current",frontMatter:{title:"Mutating Storage Values",slug:"/basics/mutating-values"},sidebar:"reference",previous:{title:"Reading Values from Storage",permalink:"/es/basics/reading-values"},next:{title:"Events",permalink:"/es/basics/events"}},u={},l=[{value:"Mutable and Immutable Functions",id:"mutable-and-immutable-functions",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It's time to modify some storage!"),(0,a.kt)("h2",{id:"mutable-and-immutable-functions"},"Mutable and Immutable Functions"),(0,a.kt)("p",null,"You may have noticed that the function template included ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," as the first parameter of the\ncontract functions. It is through ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," that you gain access to all your contract functions and\nstorage items."),(0,a.kt)("p",null,"If you are simply ",(0,a.kt)("em",{parentName:"p"},"reading")," from the contract storage, you only need to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"&self"),". But\nif you want to ",(0,a.kt)("em",{parentName:"p"},"modify")," storage items, you will need to explicitly mark it as mutable,\n",(0,a.kt)("inlineCode",{parentName:"p"},"&mut self"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.my_number\n    }\n\n    #[ink(message)]\n    pub fn my_setter(&mut self, new_value: u32) {\n        self.my_number = new_value;\n    }\n}\n")))}m.isMDXComponent=!0}}]);