"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,h=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Contract Testing",slug:"/basics/contract-testing"},s=void 0,o={unversionedId:"basics/testing",id:"version-4.0.0-alpha.1/basics/testing",title:"Contract Testing",description:"Unit Tests",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/basics/testing.md",sourceDirName:"basics",slug:"/basics/contract-testing",permalink:"/es/4.0.0-alpha.1/basics/contract-testing",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/basics/testing.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Contract Testing",slug:"/basics/contract-testing"},sidebar:"reference",previous:{title:"Upgradeable Contracts",permalink:"/es/4.0.0-alpha.1/basics/upgradeable-contracts"},next:{title:"Environment Functions",permalink:"/es/4.0.0-alpha.1/basics/environment-functions"}},l={},c=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Off-chain Testing",id:"off-chain-testing",level:2},{value:"How do you find out if your test requires the off-chain environment?",id:"how-do-you-find-out-if-your-test-requires-the-off-chain-environment",level:2},{value:"Example",id:"example",level:2},{value:"On-chain Testing",id:"on-chain-testing",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,r.kt)("p",null,"Testing contracts off-chain is done by ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo test")," and users can simply use the standard routines\nof creating unit test modules within the ink! project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn my_test() { ... }\n}\n")),(0,r.kt)("p",null,"Test instances of contracts can be created with something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let contract = MyContract::my_constructor(a, b);\n")),(0,r.kt)("p",null,"Messages can simply be called on the returned instance as if ",(0,r.kt)("inlineCode",{parentName:"p"},"MyContract::my_constructor")," returns a\n",(0,r.kt)("inlineCode",{parentName:"p"},"Self")," instance."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/flipper/lib.rs"},"flipper example"),"."),(0,r.kt)("h2",{id:"off-chain-testing"},"Off-chain Testing"),(0,r.kt)("p",null,"ink! smart contracts can compile in several different modes.\nThere are two main compilation models using either"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on-chain mode: ",(0,r.kt)("inlineCode",{parentName:"li"},"no_std")," + WebAssembly as target"),(0,r.kt)("li",{parentName:"ul"},"off-chain mode: ",(0,r.kt)("inlineCode",{parentName:"li"},"std"))),(0,r.kt)("p",null,"We generally use the on-chain mode for actual smart contract deployment\nwhereas we use the off-chain mode for smart contract testing using the\noff-chain environment provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env")," crate."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::test]")," proc. macro enables more elaborate off-chain testing."),(0,r.kt)("p",null,"If you annotate a test with this attribute it will be executed in a simulated\nenvironment, similar to as it would be run on-chain.\nYou then have fine-grained control over how a contract is called;\nfor example you can influence the block advancement, the value transferred to it,\nby which account it is called, which storage it is run with, etc.."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"examples/erc20"))," contract on how to utilize those or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_lang/3.3.1/ink_lang/attr.test.html"},"the documentation")," for details."),(0,r.kt)("p",null,"At the moment there are some known limitations to our off-chain environment and we are working\non making it behave as close to the real chain environment as possible."),(0,r.kt)("p",null,"Defines a unit test that makes use of ink!'s off-chain testing capabilities."),(0,r.kt)("p",null,"If your unit test does not require the existence of an off-chain environment\nit is fine to not use this macro since it bears some overhead with the test."),(0,r.kt)("p",null,"Note that this macro is not required to run unit tests that require ink!'s\noff-chain testing capabilities but merely improves code readability."),(0,r.kt)("h2",{id:"how-do-you-find-out-if-your-test-requires-the-off-chain-environment"},"How do you find out if your test requires the off-chain environment?"),(0,r.kt)("p",null,"Normally if the test recursively uses or invokes some contract methods that\ncall a method defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"self.env()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::env()"),"."),(0,r.kt)("p",null,"An examples is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let caller: AccountId = self.env().caller();\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[cfg(test)]\nmod tests {\n    // Conventional unit test that works with assertions.\n    #[ink::test]\n    fn test1() {\n        // test code comes here as usual\n    }\n\n    // Conventional unit test that returns some Result.\n    // The test code can make use of operator-`?`.\n    #[ink::test]\n    fn test2() -> Result<(), ink_env::Error> {\n        // test code that returns a Rust Result type\n    }\n}\n")),(0,r.kt)("h2",{id:"on-chain-testing"},"On-chain Testing"),(0,r.kt)("p",null,"The easiest way to do on-chain testing is to\n",(0,r.kt)("a",{parentName:"p",href:"/getting-started/running-substrate"},"run a local substrate node"),",\ndeploy your contract there and interact with it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use ink_lang as ink;\n\n#[ink::contract]\nmod greeter {\n    #[ink(storage)]\n    pub struct Greeter;\n\n    impl Greeter {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let caller = Self::env().caller();\n            let message = format!("thanks for instantiation {:?}", caller);\n            ink_env::debug_println(&message);\n            Greeter {}\n        }\n\n        #[ink(message, payable)]\n        pub fn fund(&mut self) {\n            let caller = self.env().caller();\n            let value = self.env().transferred_balance();\n            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);\n            ink_env::debug_println(&message);\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);