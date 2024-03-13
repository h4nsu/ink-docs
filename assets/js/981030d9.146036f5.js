"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9487],{5713:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var o=a(4848),n=a(8453);const s={title:"Smart Contracts in Polkadot",hide_title:!0,slug:"/smart-contracts-polkadot"},r="Smart Contracts in Polkadot",i={id:"intro/polkadot",title:"Smart Contracts in Polkadot",description:"One of the first questions we typically get when somebody learns about Substrate, Polkadot, or Kusama is when to develop a parachain vs. when to develop a smart contract.",source:"@site/docs/intro/polkadot.md",sourceDirName:"intro",slug:"/smart-contracts-polkadot",permalink:"/smart-contracts-polkadot",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/polkadot.md",tags:[],version:"current",frontMatter:{title:"Smart Contracts in Polkadot",hide_title:!0,slug:"/smart-contracts-polkadot"},sidebar:"reference",previous:{title:"Where to deploy?",permalink:"/where-to-deploy"},next:{title:"How it Works \u2013 Substrate",permalink:"/how-it-works"}},c={},h=[];function l(t){const e={code:"code",em:"em",h1:"h1",img:"img",p:"p",...(0,n.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"/img/title/polkadot.svg",className:"titlePic"}),"\n",(0,o.jsx)(e.h1,{id:"smart-contracts-in-polkadot",children:"Smart Contracts in Polkadot"}),"\n",(0,o.jsx)(e.p,{children:"One of the first questions we typically get when somebody learns about Substrate, Polkadot, or Kusama is when to develop a parachain vs. when to develop a smart contract."}),"\n",(0,o.jsxs)(e.p,{children:["The distinction here is that in the context of Polkadot and Kusama a parachain leases a slot for a couple of months for up to two years. The deal with a lease is that the parachain gets a fixed slot for executing its business logic (typically referred to as its ",(0,o.jsx)(e.em,{children:"state transition function"}),") and can persist its modified state in a block. In Substrate terminology this state transition function is called the chain's ",(0,o.jsx)(e.em,{children:"runtime"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["The distinction to other ecosystems here is that, in the context of Polkadot, parachains and smart contracts exist at different layers of the stack: ",(0,o.jsx)(e.em,{children:"smart contracts sit on top of parachains"}),". Parachains would usually be described as layer-1 blockchains \u2012 except for that they don't have to build their own security, are upgradable, and interoperable."]}),"\n",(0,o.jsx)(e.p,{children:"It's noteworthy that a parachain's state transition function doesn't get further validated \u2012 it's up to the parachain how it utilizes its slot time. The parachain already pre-paid for its slot when it won the slot auction on Polkadot or Kusama. This means the parachain can build its own (blockchain) world! For example, it can decide on how transaction fees are charged \u2012 or even if transaction fees are charged at all. These options are crucial when building new or more user-friendly business models. Other distinguishing factors between parachains that we observe in the wild are differences in how governance works or the crypto-economics. There are some constraints on how the parachain can build its world though. Like physics in the real world it has to adhere to certain ground rules. For Polkadot and Kusama that's for example the consensus algorithm for the Relay Chain to communicate with the parachain. From those ground rules the advantages of Polkadot and Kusama emerge. Advantages like the aforementioned shared security, cross-chain communication, or guaranteed execution slot time."}),"\n",(0,o.jsxs)(e.p,{children:["For smart contracts, on the other hand, an existing parachain has to include the ",(0,o.jsx)(e.code,{children:"pallet-contracts"})," for users to deploy smart contracts. The deployed smart contract is always untrusted code. Anyone (or any program) that has tokens of the chain can upload a smart contract without requiring permission. Smart contracts allow ",(0,o.jsx)(e.em,{children:"permissionless"})," deployment of ",(0,o.jsx)(e.em,{children:"untrusted"})," programs on a blockchain. The ",(0,o.jsx)(e.code,{children:"pallet-contracts"})," has to assume that these programs are adversarial, it has to put a number of safety pillars in place to ensure that the contract can not e.g. stall the chain or cause state corruption of other contracts. For ",(0,o.jsx)(e.code,{children:"pallet-contracts"})," those safety pillars include mechanisms like gas metering or deposits for storing data on-chain."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.em,{children:"To restate this important distinction: developing a parachain runtime is different from developing a smart contract \u2012 a smart contract sits on top of a parachain"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"The trade-off is that with a parachain one has the freedom to decide on (nearly) all the rules that make up the parachain. With a smart contract one is constrained by what the chain allows and the safety pillars that necessarily have to be in place. A smart contract can never be as fast as a native pallet built in the parachain runtime \u2012 there is too much logic in between.\nA smart contract on the other hand has less friction for developing and deploying it. Developers don't have to take care of governance, crypto-economics, etc. One just needs a few tokens and can go on its merry way deploying a smart contract. It's as simple as that."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:a(7467).A+"",width:"2400",height:"1200"})})]})}function d(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},7467:(t,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/smart-contract-vs-parachain-ebe1233980ba17f60e1f222b4f03966e.png"},8453:(t,e,a)=>{a.d(e,{R:()=>r,x:()=>i});var o=a(6540);const n={},s=o.createContext(n);function r(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);