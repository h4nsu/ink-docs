"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Use OpenBrush",slug:"/getting-started/use-openbrush"},i=void 0,s={unversionedId:"getting-started/openbrush",id:"getting-started/openbrush",title:"Use OpenBrush",description:"OpenBrush] is a library for smart contract development on ink! mainatined by the [Brushfam team. OpenBrush is to ink! what OpenZeppellin is to Solidity.",source:"@site/docs/getting-started/openbrush.md",sourceDirName:"getting-started",slug:"/getting-started/use-openbrush",permalink:"/es/getting-started/use-openbrush",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/getting-started/openbrush.md",tags:[],version:"current",frontMatter:{title:"Use OpenBrush",slug:"/getting-started/use-openbrush"},sidebar:"reference",previous:{title:"Creating an ink! Project",permalink:"/es/getting-started/creating-an-ink-project"},next:{title:"Compile Your Contract",permalink:"/es/getting-started/building-your-contract"}},l={},p=[{value:"Why use OpenBrush?",id:"why-use-openbrush",level:3},{value:"Which standard tokens and useful contracts does it provide?",id:"which-standard-tokens-and-useful-contracts-does-it-provide",level:3},{value:"Generic Trait Implementation",id:"generic-trait-implementation",level:3},{value:"Wrapper around Traits",id:"wrapper-around-traits",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Typechain-Polkadot",id:"typechain-polkadot",level:2},{value:"Sol2Ink",id:"sol2ink",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts"},"OpenBrush")," is a library for smart contract development on ink! mainatined by the ",(0,a.kt)("a",{parentName:"p",href:"https://brushfam.io"},"Brushfam")," team. OpenBrush is to ink! what OpenZeppellin is to Solidity."),(0,a.kt)("p",null,"It provides standard contracts based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/w3f/PSPs"},"PSPs"),", as well as useful contracts and Rust macros to help you build ink! smart contracts."),(0,a.kt)("p",null,"Using OpenBrush is simple, you will only add the dependency to your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file. Here is an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openbrush.io/smart-contracts/overview"},"example")," of how to do it."),(0,a.kt)("h3",{id:"why-use-openbrush"},"Why use OpenBrush?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To make contracts ",(0,a.kt)("strong",{parentName:"li"},"interoperable")," to do ",(0,a.kt)("strong",{parentName:"li"},"safe")," cross-contracts calls (by having the same function's signature among every contract)"),(0,a.kt)("li",{parentName:"ul"},"To ensure the usage of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"Polkadot Standards Proposals")),(0,a.kt)("li",{parentName:"ul"},"To ensure the usage of the ",(0,a.kt)("strong",{parentName:"li"},"latest and most secure")," implementation"),(0,a.kt)("li",{parentName:"ul"},"Useful contracts that provide custom logic to be implemented in contracts"),(0,a.kt)("li",{parentName:"ul"},"To ",(0,a.kt)("strong",{parentName:"li"},"save time")," by not writing boilerplate code"),(0,a.kt)("li",{parentName:"ul"},"Useful features which can simplify development")),(0,a.kt)("h3",{id:"which-standard-tokens-and-useful-contracts-does-it-provide"},"Which standard tokens and useful contracts does it provide?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PSP22")," - Fungible Token (",(0,a.kt)("em",{parentName:"li"},"ERC20 equivalent"),") with extensions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PSP34")," - Non-Fungible Token (",(0,a.kt)("em",{parentName:"li"},"ERC721 equivalent"),") with extensions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PSP37"),": ",(0,a.kt)("em",{parentName:"li"},"ERC1155 equivalent")," with extensions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ownable")," Restrict access to action for non-owners"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access Control"),": Define a set of roles and restrict access to an action by roles"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reentrancy Guard"),": Prevent reentrant calls to a function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pausable"),": Pause/Unpause the contract to disable/enable some operations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Timelock Controller"),": Execute transactions with some delay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Payment Splitter"),": Split the amount of native tokens between participants")),(0,a.kt)("h3",{id:"generic-trait-implementation"},"Generic Trait Implementation"),(0,a.kt)("p",null,"More importantly, OpenBrush adds support for generic Trait implementation so you can split Trait and Impls into different files, which will increase the readability and maintainability of your smart-contract code base (see detailed description ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/blob/main/docs/docs/smart-contracts/example/setup_project.md"},"here"),")"),(0,a.kt)("h3",{id:"wrapper-around-traits"},"Wrapper around Traits"),(0,a.kt)("p",null,"Defining a Trait definition is sufficient (a contract that implements that Trait is not needed anymore) to call methods of that Trait from some contract in the network (do a cross contract call). It makes cross-contract calls easier."),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures/openbrush-contracts"},"OpenBrush Github repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.openbrush.io/"},"Official Docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openbrush.io/"},"OpenBrush website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=I5OFGNVvzOc"},"Substrate Seminar (Youtube)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76"},"How to use modifiers"))),(0,a.kt)("h2",{id:"typechain-polkadot"},"Typechain-Polkadot"),(0,a.kt)("p",null,"Another tool essential for ink! smart contracts development is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/typechain-polkadot"},"Typechain-Polkadot"),"."),(0,a.kt)("p",null,"Typechain-Polkadot is used to generate Typescript wrappers around your smart-contract, which can be used in UI or in integration tests of your ink! smart contracts. It uses polkadot-api under the hood, but is especially useful because all calls and queries are typed, therefore the chance of getting some error during a call is mitigated."),(0,a.kt)("h2",{id:"sol2ink"},"Sol2Ink"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/sol2ink"},"Sol2Ink")," is a useful tool which can help you migrating from Solidity to ink! You will only pass the Solidity code of your smart contract to Sol2Ink and get the ink! contract in return. You can also use Sol2Ink to learn the differences between Solidity and ink! code and use it to help you learning to create ink! smart contracts."))}u.isMDXComponent=!0}}]);