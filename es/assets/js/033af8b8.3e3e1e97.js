"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"ink! vs. CosmWasm",slug:"/ink-vs-cosmwasm"},i=void 0,s={unversionedId:"intro/ink-vs-cosmwasm",id:"intro/ink-vs-cosmwasm",title:"ink! vs. CosmWasm",description:"This is a short comparison between ink!",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intro/ink-vs-cosmwasm.md",sourceDirName:"intro",slug:"/ink-vs-cosmwasm",permalink:"/es/ink-vs-cosmwasm",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/ink-vs-cosmwasm.md",tags:[],version:"current",frontMatter:{title:"ink! vs. CosmWasm",slug:"/ink-vs-cosmwasm"},sidebar:"reference",previous:{title:"ink! vs. Solidity",permalink:"/es/ink-vs-solidity"},next:{title:"Overview",permalink:"/es/monthly-update/"}},c={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Environment Setup",id:"environment-setup",level:2},{value:"Compile and Test",id:"compile-and-test",level:2},{value:"Deploy and Interact",id:"deploy-and-interact",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a short comparison between ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/"},"ink!"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm"},"CosmWasm")," meant to onboard\ndevelopers coming from the Cosmos ecosystem."),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"CosmWasm is modular, meaning that any blockchain using the Cosmos SDK can add smart\ncontract support to their chain. That is similar to the ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate"),"\napproach, where chains have the option to add ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," to their runtime."),(0,r.kt)("p",null,"Aside from that, the architecture philosophy is likely the point where CosmWasm and ink!\ndiffer the most. CosmWasm follows the actor model design pattern, while ink! follows a\nsynchronous execution model. That means some fundamental differences in how the source\ncode is structured."),(0,r.kt)("p",null,"The main entry point functions of CosmWasm contracts are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instantiate")," which bootstraps the initial contract state (assuming it's already been\ndeployed)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"execute")," which has the actor perform operations to its internal state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," which retrieves data from the actor\u2019s internal state.")),(0,r.kt)("p",null,"An ink! contract can have as many public dispatchables as the developer desires, and\ndifferently from CosmWasm, it doesn\u2019t rely on JSON schemas for defining how the messages\nare structured."),(0,r.kt)("p",null,"Instead, ink! makes heavy usage of Rust macros. The main ink! macros are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#[ink(constructor)]")," which is called when the contract is deployed, and is responsible\nfor bootstrapping the initial contract state into the storage. It is analogous to the\nCosmWasm ",(0,r.kt)("inlineCode",{parentName:"li"},"instantiate")," function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#[ink(storage)]")," which annotates a struct that represents the contract's internal\nstate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#[ink(message)]")," which marks a function as a public dispatchable, meaning that it is\nexposed in the contract interface to the outside world. This macro can make a function\nbehave analogously to CosmWasm\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"execute")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," functions. This depends on how it\naffects the internal contract state and what the return types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#[ink(event)]")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"#[ink(topic)]")," which annotates a struct and its members as the\nevents and topics that the contract might emit.")),(0,r.kt)("p",null,"There are other ink! macros, for which details can be found at ",(0,r.kt)("a",{parentName:"p",href:"/macros-attributes"},"Macros & Attributes"),"."),(0,r.kt)("h1",{id:"unit-testing"},"Unit Testing"),(0,r.kt)("p",null,"Unit testing in CosmWasm is quite similar to ink!. Both use the conventional Rust\n",(0,r.kt)("inlineCode",{parentName:"p"},"#[cfg(test)]")," macro and set up a mock on-chain environment."),(0,r.kt)("p",null,"While CosmWasm unit tests have different modules for each of the three main entry-point\nfunctions, ink! allows for a more generalised approach, where the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(test)]")," macro is\nused for each unit test."),(0,r.kt)("p",null,"You can read more about ink! unit tests ",(0,r.kt)("a",{parentName:"p",href:"https://use.ink/basics/contract-testing#unit-tests"},"here"),"."),(0,r.kt)("h1",{id:"compiler"},"Compiler"),(0,r.kt)("p",null,"CosmWasm uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/crate/cargo-wasm/latest"},"cargo-wasm")," as its main\ncompiler, while ink! uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},"cargo-contract"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," is developed by Parity specifically for building, testing, and deploying\nink! contracts."),(0,r.kt)("h1",{id:"local-development-network"},"Local Development Network"),(0,r.kt)("p",null,"In terms of local development networks, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia"},"cosmos/gaia"),"\nrepository acts as the basic template for a generic Cosmos node. With the addition of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"x/wasm")," module and some clean-up, this template repository becomes\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd"},"wasmd"),", the entry point for CosmWasm development."),(0,r.kt)("p",null,"In terms of Substrate, ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate-node-template")," is a basic generic template of a node.\nSimilar to ",(0,r.kt)("inlineCode",{parentName:"p"},"x/wasm"),", [",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"[(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},"https://github.com/paritytech/substrate/tree/master/frame/contracts"),")\nis the module that adds WebAssembly smart contract functionality to the chain. Parity\nprovides the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},"substrate-contracts-node"),",\nwhich is analogous to ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," - a basic template node for smart contract development."),(0,r.kt)("h1",{id:"testnets"},"Testnets"),(0,r.kt)("p",null,"For CosmWasm development and on-chain testing, ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," can be operated as a local setup\n(single or multiple nodes), or connected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cliffnet")," public test network."),(0,r.kt)("p",null,"ink! contracts can be deployed on a few different options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Locally, on a single or multiple node setup of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-contracts-node"},(0,r.kt)("inlineCode",{parentName:"a"},"substrate-contracts-node")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer"},"Contracts on Rococo Parachain"),",\nwhich is connected to the ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer"},"Rococo relay chain test network"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.astar.network/maintain/collator/shibuya-network/"},"Astar Network\u2019s Shibuya testnet"),".")),(0,r.kt)("h1",{id:"development-workflow"},"Development Workflow"),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The first step in CosmWasm development is to\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/getting-started/installation"},"install dependencies"),",\nnamely Go, Rust and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd"),"."),(0,r.kt)("p",null,"For ink! you can also find ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/setup"},"a setup guide")," which will help you\nwith dependencies, namely Rust, ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node"),"."),(0,r.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,r.kt)("p",null,"The next step in the CosmWasm development workflow is\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/getting-started/setting-env"},"setting up the environment"),".\nThat consists mainly of configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," such that it has prefunded accounts that are able\nto interact with the network."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node")," is started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dev")," flag, it already contains well\nknown pre-funded accounts (",(0,r.kt)("inlineCode",{parentName:"p"},"alice"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bob"),", etc.) which are ready to be used for development."),(0,r.kt)("h2",{id:"compile-and-test"},"Compile and Test"),(0,r.kt)("p",null,"CosmWasm provides example contracts at the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-contracts"},"cw-contracts")," repository. After the\nrepository is cloned, from the contract directory it can be compiled via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cargo wasm\n")),(0,r.kt)("p",null,"and tested via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cargo unit-test\n")),(0,r.kt)("p",null,"Similarly, ink! provides an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/tree/master/examples"},(0,r.kt)("inlineCode",{parentName:"a"},"examples"))," directory of its\nmain repository."),(0,r.kt)("p",null,"A contract can be compiled from its directory via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cargo +nightly contract build\n")),(0,r.kt)("p",null,"and tested via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cargo test\n")),(0,r.kt)("h2",{id:"deploy-and-interact"},"Deploy and Interact"),(0,r.kt)("p",null,"CosmWasm contracts are deployed and instantiated with help of the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," executable. The\nlist of step is provided ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/getting-started/interact-with-contract"},"here"),"."),(0,r.kt)("p",null,"It is possible to deploy and interact with ink! contracts using either a CLI\n(",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract"),"), or a web UI (",(0,r.kt)("a",{parentName:"p",href:"https://contracts-ui.substrate.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"contracts-ui")),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/cargo-contract/blob/master/docs/extrinsics.md"},"Instructions for ",(0,r.kt)("inlineCode",{parentName:"a"},"cargo-contract"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/getting-started/deploy-your-contract"},"Instructions for ",(0,r.kt)("inlineCode",{parentName:"a"},"contracts-ui")))))}m.isMDXComponent=!0}}]);