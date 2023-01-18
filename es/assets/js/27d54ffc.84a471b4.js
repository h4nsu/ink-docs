"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9339],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7796:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"Deploy Your Contract",slug:"/getting-started/deploy-your-contract"},i=void 0,c={unversionedId:"getting-started/deploying",id:"getting-started/deploying",title:"Deploy Your Contract",description:"Now that we have generated the Wasm binary from our source code and connected to a local node, we want",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/getting-started/deploying.md",sourceDirName:"getting-started",slug:"/getting-started/deploy-your-contract",permalink:"/es/getting-started/deploy-your-contract",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/getting-started/deploying.md",tags:[],version:"current",frontMatter:{title:"Deploy Your Contract",slug:"/getting-started/deploy-your-contract"},sidebar:"reference",previous:{title:"Run a Substrate Node",permalink:"/es/getting-started/running-substrate"},next:{title:"Call Your Contract",permalink:"/es/getting-started/calling-your-contract"}},l={},s=[{value:"1. Upload Contract Code",id:"1-upload-contract-code",level:3},{value:"2. Instantiate a Contract on the Blockchain",id:"2-instantiate-a-contract-on-the-blockchain",level:3}],p={toc:s};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we have generated the Wasm binary from our source code and connected to a local node, we want\nto deploy this contract onto our Substrate blockchain."),(0,o.kt)("p",null,"Smart contract deployment on Substrate is a little different than on traditional smart contract\nblockchains."),(0,o.kt)("p",null,"Whereas a completely new blob of smart contract source code is deployed each time you push a\ncontract on other platforms, Substrate opts to optimize this behavior. For example, the standard\nERC20 token has been deployed to Ethereum thousands of times, sometimes only with changes to the\ninitial configuration (through the Solidity ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," function). Each of these instances take\nup space on the blockchain equivalent to the contract source code size, even though no code was\nactually changed."),(0,o.kt)("p",null,"In Substrate, the contract deployment process is split into two steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Putting your contract code on the blockchain"),(0,o.kt)("li",{parentName:"ol"},"Creating an instance of your contract")),(0,o.kt)("p",null,"With this pattern, contract code like the ERC20 standard can be put on the blockchain one single\ntime, but instantiated any number of times. No need to continually upload the same source code over\nand waste space on the blockchain."),(0,o.kt)("h3",{id:"1-upload-contract-code"},"1. Upload Contract Code"),(0,o.kt)("p",null,"Here we will upload the contract code and instantiate one copy of the contract on the blockchain\n(which is usually why we upload the contract code in the first place):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Add New Contract")," button in the sidebar."),(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Upload New Contract Code")," button in the Add New Contract page."),(0,o.kt)("li",{parentName:"ul"},"Choose an ",(0,o.kt)("strong",{parentName:"li"},"Instantiation account")," (e.g. ALICE)."),(0,o.kt)("li",{parentName:"ul"},"Give the contract a descriptive ",(0,o.kt)("strong",{parentName:"li"},"Name")," (e.g. Flipper Contract)."),(0,o.kt)("li",{parentName:"ul"},"Drag the ",(0,o.kt)("inlineCode",{parentName:"li"},"flipper.contract")," file that contains the bundled Wasm blob and metadata into the drag\n& drop area. You will see the UI parse the metadata and enabling the button that takes you to the next step."),(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Next")," button")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flipper Instantiate Contract 01",src:n(3722).Z,width:"2192",height:"1446"})),(0,o.kt)("h3",{id:"2-instantiate-a-contract-on-the-blockchain"},"2. Instantiate a Contract on the Blockchain"),(0,o.kt)("p",null,"Smart contracts exist as an extension of the account system on the blockchain. Thus creating an\ninstance of this contract will create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountId")," which will store any balance managed by the\nsmart contract and allow us to interact with the contract."),(0,o.kt)("p",null,"Now a screen displays the information that represents our smart contract. We are going to\ninstantiate a copy of the smart contract:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accept the default options for the contract ",(0,o.kt)("strong",{parentName:"li"},"Deployment Constructor"),"."),(0,o.kt)("li",{parentName:"ul"},"Accept the default options ",(0,o.kt)("strong",{parentName:"li"},"Max Gas Allowed")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"200000"),"."),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Next"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flipper Instantiate Contract 02",src:n(2023).Z,width:"2187",height:"1441"})),(0,o.kt)("p",null,"The transaction is now queued, review your data and click ",(0,o.kt)("strong",{parentName:"p"},"Upload and Instantiate")," or go back and modify your inputs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flipper Instantiate Contract 03",src:n(8570).Z,width:"2192",height:"1447"})),(0,o.kt)("p",null,"When you click ",(0,o.kt)("strong",{parentName:"p"},"Upload and Instantiate")," you should see\nthe extrinsic ",(0,o.kt)("inlineCode",{parentName:"p"},"instantiateWithCode")," is processing, and a flurry of events appear including the\ncreation of a new account (",(0,o.kt)("inlineCode",{parentName:"p"},"system.NewAccount"),") and the instantiation of the contract\n(",(0,o.kt)("inlineCode",{parentName:"p"},"contracts.Instantiated"),").\nYou will be redirected to a new page, where you can interact with the newly created contract instance."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flipper Instantiate Success",src:n(7703).Z,width:"2198",height:"1442"})))}d.isMDXComponent=!0},3722:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/flipper-instantiate-01-51d92de88119204b1628b1926ddd2f4e.png"},2023:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/flipper-instantiate-02-df44c72c8917af09a398fa0ea5f176bc.png"},8570:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/flipper-instantiate-03-1eec585921b302f0f52c1c1093f88f21.png"},7703:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/flipper-instantiate-04-4523e6f61c0404357b6200f2df820e28.png"}}]);