"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1892],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={title:"#[ink::contract]",slug:"/macros-attributes/contract"},l=void 0,o={unversionedId:"macros-attributes/contract",id:"version-4.0.0-alpha.1/macros-attributes/contract",title:"#[ink::contract]",description:"This macro is the entry point for writing ink! smart contracts.",source:"@site/versioned_docs/version-4.0.0-alpha.1/macros-attributes/contract.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/contract",permalink:"/4.0.0-alpha.1/macros-attributes/contract",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/macros-attributes/contract.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"#[ink::contract]",slug:"/macros-attributes/contract"},sidebar:"reference",previous:{title:"Overview",permalink:"/4.0.0-alpha.1/macros-attributes"},next:{title:"#[ink(anonymous)]",permalink:"/4.0.0-alpha.1/macros-attributes/anonymous"}},s={},p=[{value:"Header Arguments",id:"header-arguments",level:2},{value:"<code>compile_as_dependency: bool</code>",id:"compile_as_dependency-bool",level:3},{value:"<code>env: impl Environment</code>",id:"env-impl-environment",level:3},{value:"Anaylsis",id:"anaylsis",level:2},{value:"Interacting with the Contract Executor",id:"interacting-with-the-contract-executor",level:2},{value:"Events",id:"events",level:2},{value:"Example: Flipper",id:"example-flipper",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This macro is the entry point for writing ink! smart contracts."),(0,r.kt)("p",null,"If you are a beginner trying to learn ink! we recommend you to check out\nour extensive ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/ink-workshop/pt1"},"ink! workshop"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," In all below examples we will be using ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_lang")," crate aliased as just ",(0,r.kt)("inlineCode",{parentName:"p"},"ink"),".\nYou can do this yourself by adding the following line to your code:\n",(0,r.kt)("inlineCode",{parentName:"p"},"use ink_lang as ink;")),(0,r.kt)("h1",{id:"description"},"Description"),(0,r.kt)("p",null,"The macro does analysis on the provided smart contract code and generates\nproper code."),(0,r.kt)("p",null,"ink! smart contracts can compile in several different modes.\nThere are two main compilation modes using either"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on-chain mode: ",(0,r.kt)("inlineCode",{parentName:"li"},"no_std")," + WebAssembly as target"),(0,r.kt)("li",{parentName:"ul"},"off-chain mode: ",(0,r.kt)("inlineCode",{parentName:"li"},"std"))),(0,r.kt)("p",null,"We generally use the on-chain mode for actual smart contract deployment\nwhereas we use the off-chain mode for smart contract testing using the\noff-chain environment provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env")," crate."),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("h2",{id:"header-arguments"},"Header Arguments"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," macro can be provided with some additional comma-separated\nheader arguments:"),(0,r.kt)("h3",{id:"compile_as_dependency-bool"},(0,r.kt)("inlineCode",{parentName:"h3"},"compile_as_dependency: bool")),(0,r.kt)("p",null,"Tells the ink! code generator to ",(0,r.kt)("strong",{parentName:"p"},"always")," or ",(0,r.kt)("strong",{parentName:"p"},"never"),"\ncompile the smart contract as if it was used as a dependency of another ink!\nsmart contract."),(0,r.kt)("p",null,"Normally this flag is only really useful for ink! developers who\nwant to inspect code generation of ink! smart contracts.\nThe author is not aware of any particular practical use case for users that\nmakes use of this flag but contract writers are encouraged to disprove this."),(0,r.kt)("p",null,"Note that it is recommended to make use of the built-in crate feature\n",(0,r.kt)("inlineCode",{parentName:"p"},"ink-as-dependency")," to flag smart contract dependencies listed in a contract's\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," as actual dependencies to ink!."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract(compile_as_dependency = true)]\nmod my_contract {\n    #[ink(storage)]\n    pub struct MyStorage;\n    \n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        \n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default value:")," Depends on the crate feature propagation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,r.kt)("h3",{id:"env-impl-environment"},(0,r.kt)("inlineCode",{parentName:"h3"},"env: impl Environment")),(0,r.kt)("p",null,"Tells the ink! code generator which environment to use for the ink! smart contract.\nThe environment must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," (defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env"),") trait and provides\nall the necessary fundamental type definitions for ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," etc."),(0,r.kt)("p",null,"When using a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," implementation for a smart contract all types\nthat it exposes to the ink! smart contract and the mirrored types used in the runtime\nmust be aligned with respect to SCALE encoding and semantics."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage Example:")),(0,r.kt)("p",null,"Given a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct MyEnvironment;\n\nimpl ink_env::Environment for MyEnvironment {\n    const MAX_EVENT_TOPICS: usize = 3;\n    \n    type AccountId = u64;\n    type Balance = u128;\n    type Hash = [u8; 32];\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = ::ink_env::NoChainExtension;\n}\n")),(0,r.kt)("p",null,"A user might implement their ink! smart contract using the above custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment"),"\nimplementation as demonstrated below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n#[ink::contract(env = MyEnvironment)]\nmod my_contract {\n    pub struct MyEnvironment;\n   \n    impl ink_env::Environment for MyEnvironment {\n        const MAX_EVENT_TOPICS: usize = 3;\n        type AccountId = u64;\n        type Balance = u128;\n        type Hash = [u8; 32];\n        type Timestamp = u64;\n        type BlockNumber = u32;\n        type ChainExtension = ::ink_env::NoChainExtension;\n    }\n    \n    #[ink(storage)]\n    pub struct MyStorage;\n    \n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        \n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default value:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultEnvironment")," defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env")," crate."),(0,r.kt)("h2",{id:"anaylsis"},"Anaylsis"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," macro fully analyses its input smart contract\nagainst invalid arguments and structure."),(0,r.kt)("p",null,"Some example rules include but are not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There must be exactly one ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct."),(0,r.kt)("p",{parentName:"li"},"   This struct defines the layout of the storage that the ink! smart contract operates on.\nThe user is able to use a variety of built-in facilities, combine them in various ways\nor even provide their own implementations of storage data structures."),(0,r.kt)("p",{parentName:"li"},"   For more information visit the ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate documentation."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn construct() -> Self { Flipper { value: false } }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There must be at least one ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," defined method."),(0,r.kt)("p",{parentName:"li"},"   Methods flagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," are special in that they are dispatchable\nupon contract instantiation. A contract may define multiple such constructors which\nallow users of the contract to instantiate a contract in multiple different ways."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",{parentName:"li"},"   Given the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper")," contract definition above we add an ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"\nas follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There must be at least one ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," defined method."),(0,r.kt)("p",{parentName:"li"},"   Methods flagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," are special in that they are dispatchable\nupon contract invocation. The set of ink! messages defined for an ink! smart contract\ndefine its API surface with which users are allowed to interact."),(0,r.kt)("p",{parentName:"li"},"   An ink! smart contract can have multiple such ink! messages defined."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An ink! message with a ",(0,r.kt)("inlineCode",{parentName:"p"},"&self")," receiver may only read state whereas an ink! message\nwith a ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut self")," receiver may mutate the contract's storage."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",{parentName:"li"},"Given the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper")," contract definition above we add some ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," definitions\nas follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Payable Messages:")),(0,r.kt)("p",{parentName:"li"},"An ink! message by default will reject calls that additional fund the smart contract.\nAuthors of ink! smart contracts can make an ink! message payable by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"payable"),"\nflag to it. An example below:"),(0,r.kt)("p",{parentName:"li"},"Note that ink! constructors are always implicitly payable and thus cannot be flagged\nas such."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(payable)] // You can either specify payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message, payable)] // ...or specify payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Controlling the messages selector:")),(0,r.kt)("p",{parentName:"li"},"Every ink! message and ink! constructor has a unique selector with which the\nmessage or constructor can be uniquely identified within the ink! smart contract.\nThese selectors are mainly used to drive the contract's dispatch upon calling it."),(0,r.kt)("p",{parentName:"li"},"An ink! smart contract author can control the selector of an ink! message or ink!\nconstructor using the ",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," flag. An example is shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        #[ink(selector = "0xDEADBEEF")] // Works on constructors as well.\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(selector = "0xCAFEBABE")] // You can either specify selector out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n       \n        /// Returns the current value.\n        #[ink(message, selector = "0xFEEDBEEF")] // ...or specify selector inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n')))))),(0,r.kt)("h2",{id:"interacting-with-the-contract-executor"},"Interacting with the Contract Executor"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env")," crate provides facitilies to interact with the contract executor that\nconnects ink! smart contracts with the outer world."),(0,r.kt)("p",null,"For example it is possible to query the current call's caller via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_env;\nink_env::test::run_test::<ink_env::DefaultEnvironment, _>(|_| {\n    let caller = ink_env::caller::<ink_env::DefaultEnvironment>();\n    let _caller = caller;\n    Ok(())\n}).unwrap();\n")),(0,r.kt)("p",null,"However, ink! provides a much simpler way to interact with the contract executor\nvia its environment accessor. An example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use ink_lang as ink;\n \n#[ink::contract]\nmod greeter {\n    #[ink(storage)]\n    pub struct Greeter;\n\n    impl Greeter {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let caller = Self::env().caller();\n            let message = format!("thanks for instantiation {:?}", caller);\n            ink_env::debug_println(&message);\n            Greeter {}\n        }\n\n        #[ink(message, payable)]\n        pub fn fund(&mut self) {\n            let caller = self.env().caller();\n            let value = self.env().transferred_balance();\n            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);\n            ink_env::debug_println(&message);\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"An ink! smart contract may define events that it can emit during contract execution.\nEmitting events can be used by third party tools to query information about a contract's\nexecution and state."),(0,r.kt)("p",null,"The following example ink! contract shows how an event ",(0,r.kt)("inlineCode",{parentName:"p"},"Transferred")," is defined and\nemitted in the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"}," use ink_lang as ink;\n \n #[ink::contract]\n mod erc20 {\n     /// Defines an event that is emitted every time value is transferred.\n     #[ink(event)]\n     pub struct Transferred {\n         from: Option<AccountId>,\n         to: Option<AccountId>,\n         value: Balance,\n     }\n\n     #[ink(storage)]\n     pub struct Erc20 {\n         total_supply: Balance,\n         // more fields ...\n     }\n\n     impl Erc20 {\n         #[ink(constructor)]\n         pub fn new(initial_supply: Balance) -> Self {\n             let caller = Self::env().caller();\n             Self::env().emit_event(Transferred {\n                 from: None,\n                 to: Some(caller),\n                 value: initial_supply,\n             });\n             Self { total_supply: initial_supply }\n         }\n\n         #[ink(message)]\n         pub fn total_supply(&self) -> Balance {\n             self.total_supply\n         }\n     }\n }\n")),(0,r.kt)("h2",{id:"example-flipper"},"Example: Flipper"),(0,r.kt)("p",null,'The below code shows the complete implementation of the so-called Flipper\nink! smart contract.\nFor us it acts as the "Hello, World!" of the ink! smart contracts because\nit is minimal while still providing some more or less useful functionality.'),(0,r.kt)("p",null,"It controls a single ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," value that can be either ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\nand allows the user to flip this value using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper::flip")," message\nor retrieve the current value using ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper::get"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\npub mod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        /// Creates a new flipper smart contract initialized with the given value.\n        #[ink(constructor)]\n        pub fn new(init_value: bool) -> Self {\n            Self { value: init_value }\n        }\n\n        /// Flips the current value of the Flipper's bool.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value of the Flipper's bool.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);