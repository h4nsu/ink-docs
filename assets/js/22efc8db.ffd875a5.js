"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,c(c({ref:t},l),{},{components:n})):a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Contracts on Rococo",slug:"/testnet"},c=void 0,i={unversionedId:"testnet/overview",id:"version-4.0.0-alpha.1/testnet/overview",title:"Contracts on Rococo",description:"Rococo is a testnet for",source:"@site/versioned_docs/version-4.0.0-alpha.1/testnet/overview.md",sourceDirName:"testnet",slug:"/testnet",permalink:"/4.0.0-alpha.1/testnet",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/testnet/overview.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Contracts on Rococo",slug:"/testnet"},sidebar:"reference",previous:{title:"Dapps",permalink:"/4.0.0-alpha.1/examples/dapps"},next:{title:"OpenBrush",permalink:"/4.0.0-alpha.1/getting-started/use-openbrush"}},s={},p=[{value:"What is the <code>Contracts</code> parachain?",id:"what-is-the-contracts-parachain",level:2},{value:"How can I use it?",id:"how-can-i-use-it",level:2},{value:"(1) Create an Account",id:"1-create-an-account",level:3},{value:"(2) Get Testnet Tokens",id:"2-get-testnet-tokens",level:3},{value:"(3) Deploy Your Contract",id:"3-deploy-your-contract",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-pdk#rococo-testnet"},"Rococo")," is a testnet for\nPolkadot and Kusama parachains.\nWe have a live testnet named ",(0,o.kt)("inlineCode",{parentName:"p"},"Contracts")," as a parachain online there."),(0,o.kt)("img",{src:"/img/contracts-on-polkadot-js.png",alt:"Smart contracts parachain on Rococo"}),(0,o.kt)("h2",{id:"what-is-the-contracts-parachain"},"What is the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Contracts")," parachain?"),(0,o.kt)("p",null,"It's a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate")," parachain for smart\ncontracts. We configured it to use Substrate's smart contracts module \u2013 the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,o.kt)("inlineCode",{parentName:"a"},"contracts")),"\npallet \u2013 in a default configuration."),(0,o.kt)("p",null,"The code for this parachain can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo"},"in the ",(0,o.kt)("inlineCode",{parentName:"a"},"cumulus")," repository"),".\nOur parachain uses the Rococo relay chain's native token (",(0,o.kt)("inlineCode",{parentName:"p"},"ROC"),") instead of having its own token.\nDue to this you'll need ",(0,o.kt)("inlineCode",{parentName:"p"},"ROC")," in order to deploy contracts on our testnet."),(0,o.kt)("h2",{id:"how-can-i-use-it"},"How can I use it?"),(0,o.kt)("h3",{id:"1-create-an-account"},"(1) Create an Account"),(0,o.kt)("p",null,"As a first step, you should create an account. This can be done via command-line\ntools (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"subxt"),") or via a wallet (e.g. with the ",(0,o.kt)("inlineCode",{parentName:"p"},"polakdot-js")," browser extension).\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-account-generation"},"here")," for a detailed guide."),(0,o.kt)("h3",{id:"2-get-testnet-tokens"},"(2) Get Testnet Tokens"),(0,o.kt)("p",null,"As a second step, you have to get ",(0,o.kt)("inlineCode",{parentName:"p"},"ROC")," testnet tokens through the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet"},"Rococo Faucet"),".\nThis is a chat room in which you need to write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"!drip YOUR_SS_58_ADDRESS:1002\n")),(0,o.kt)("p",null,"The number ",(0,o.kt)("inlineCode",{parentName:"p"},"1002")," is the parachain id of ",(0,o.kt)("inlineCode",{parentName:"p"},"Contracts")," on Rococo, by supplying it the\nfaucet will teleport ",(0,o.kt)("inlineCode",{parentName:"p"},"ROC")," tokens directly to your account on the parachain.\nTeleport is a term "),(0,o.kt)("p",null,"If everything worked out, the teleported ",(0,o.kt)("inlineCode",{parentName:"p"},"ROC")," tokens will show up in your account.\nIn case you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"polkadot-js")," fronted, you can see them under\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts"},'the "Accounts" tab for ',(0,o.kt)("inlineCode",{parentName:"a"},"Contracts")),"."),(0,o.kt)("img",{src:"/img/roc-in-wallet.png",alt:"Rococo testnet tokens in wallet"}),(0,o.kt)("h3",{id:"3-deploy-your-contract"},"(3) Deploy Your Contract"),(0,o.kt)("p",null,"Once you have ",(0,o.kt)("inlineCode",{parentName:"p"},"ROC")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Contracts")," you can deploy a contract ",(0,o.kt)("em",{parentName:"p"},"nearly")," as you would with\na local developer node.\nThe only difference is that you can't use pre-endowed accounts like ",(0,o.kt)("inlineCode",{parentName:"p"},"Alice")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Bob"),",\nyou have to use the one you generated instead."),(0,o.kt)("img",{src:"/img/deployment-acc.png",alt:"Deploy a smart contract on Rococo/Polkadot"}),(0,o.kt)("p",null,"You can also deploy your contract from the command-line via ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract"),".\nMake sure you are in the folder of your contract and that it has been\nbuilt recently. Then execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cargo contract upload --suri "your twelve or twenty-four words"\ncargo contract instantiate --suri \u2026 --constructor new --args true\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"new")," in this case would be a constructor method exposed by the contract,\n",(0,o.kt)("inlineCode",{parentName:"p"},"--args")," would be any arguments the constructor expects."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/blob/master/docs/extrinsics.md#commands"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"cargo-contract")," docs"),"\nfor a more detailed documentation."))}u.isMDXComponent=!0}}]);