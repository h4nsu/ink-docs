"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5799],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={title:"Working with Mapping",slug:"/datastructures/mapping"},l=void 0,i={unversionedId:"datastructures/mapping",id:"version-4.0.0-alpha.1/datastructures/mapping",title:"Working with Mapping",description:"In this section we demonstrate how to work with ink! Mapping.",source:"@site/versioned_docs/version-4.0.0-alpha.1/datastructures/mapping.md",sourceDirName:"datastructures",slug:"/datastructures/mapping",permalink:"/4.0.0-alpha.1/datastructures/mapping",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/datastructures/mapping.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Working with Mapping",slug:"/datastructures/mapping"},sidebar:"reference",previous:{title:"Overview",permalink:"/4.0.0-alpha.1/datastructures/overview"},next:{title:"Storage Layout",permalink:"/4.0.0-alpha.1/datastructures/storage-layout"}},s={},p=[{value:"Example: Using a <code>Mapping</code>",id:"example-using-a-mapping",level:2},{value:"Considerations when using the <code>Mapping</code> type",id:"considerations-when-using-the-mapping-type",level:2},{value:"Storage loading behaviour",id:"storage-loading-behaviour",level:3},{value:"Updating values",id:"updating-values",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section we demonstrate how to work with ink! ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/4.0.0-beta.1/ink_storage/struct.Mapping.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,r.kt)("p",null,"Here is an example of a mapping from a user to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    /// Assign a balance to every account.\n    balances: ink::storage::Mapping<AccountId, Balance>,\n}\n")),(0,r.kt)("p",null,'This means that for a given key, you can store a unique instance of a value type. In this\ncase, each "user" gets credited their own balance.'),(0,r.kt)("h2",{id:"example-using-a-mapping"},"Example: Using a ",(0,r.kt)("inlineCode",{parentName:"h2"},"Mapping")),(0,r.kt)("p",null,"The following example contract utilizes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," so that anyone can deposit and withdraw\nbalance for their own account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[ink::contract]\nmod mycontract {\n    use ink::storage::Mapping;\n\n    #[ink(storage)]\n    pub struct MyContract {\n        /// Assign a balance to every account ID\n        balances: Mapping<AccountId, Balance>,\n    }\n\n    impl MyContract {\n        /// Constructor to initialize the contract with an empty mapping.\n        #[ink(constructor, payable)]\n        pub fn new() -> Self {\n            let balances = Mapping::default();\n            Self { balances }\n        }\n\n        /// Retrieve the balance of the caller.\n        #[ink(message)]\n        pub fn get_balance(&self) -> Option<Balance> {\n            let caller = self.env().caller();\n            self.balances.get(caller)\n        }\n\n        /// Credit more money to the contract.\n        #[ink(message, payable)]\n        pub fn transfer(&mut self) {\n            let caller = self.env().caller();\n            let balance = self.balances.get(caller).unwrap_or(0);\n            let endowment = self.env().transferred_value();\n            self.balances.insert(caller, &(balance + endowment));\n        }\n\n        /// Withdraw all your balance from the contract.\n        pub fn withdraw(&mut self) {\n            let caller = self.env().caller();\n            let balance = self.balances.get(caller).unwrap();\n            self.balances.remove(caller);\n            self.env().transfer(caller, balance).unwrap()\n        }\n    }\n}\n\n')),(0,r.kt)("h2",{id:"considerations-when-using-the-mapping-type"},"Considerations when using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"Mapping")," type"),(0,r.kt)("p",null,"One of the main purposes of the ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," is to allow storing a lot of values."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There are many additional datastructures accessible under ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::prelude::collections"),", such\nsuch as ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"BTreeMap")," (to name a few). Note that these datastructures all exhibit\n",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," storage loading behavior, as opposed to the ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"!")),(0,r.kt)("h3",{id:"storage-loading-behaviour"},"Storage loading behaviour"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," value lives under it's own storage key. Briefly, this means that ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"s\nare lazily loaded in ink!. In other words, if your message only accesses a single key of a\nmapping, it will not load the whole mapping but only the value being accessed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// This causes only a single storage access and the decoding of a single "MyValue" struct,\n// no matter how many elements there are inside the mapping.\nlet foo: MyValue = my_mapping.get(0)?;\n\nfor n in 0..5 {\n    // This causes a storage access and a decoding operation for each loop iteration.\n    // It is not possible to "fetch" all key/value pairs directly at once.\n    let bar: MyValue = my_mapping.get(n)?;\n}\n')),(0,r.kt)("p",null,"Furthermore, it follows that mapping values do not have a contiguous storage layout and it is\nnot possible to iterate over the contents of a map."),(0,r.kt)("h3",{id:"updating-values"},"Updating values"),(0,r.kt)("p",null,"The attentive reader may have noticed that accessing mapping values via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping::get()"),'\nmethod will result in an owned value (a local copy), as opposed to a direct reference\ninto the storage. Changes to this value won\'t be reflected in the contracts storage\n"automatically". To avoid this common pitfall, the value must be inserted again at the same\nkey after it was modified. The ',(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," function from above example illustrates this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn transfer(&mut self) {\n    let caller = self.env().caller();\n    // `balance` is a local value and not a reference to the value on storage!\n    let balance = self.balances.get(caller).unwrap_or(0);\n    let endowment = self.env().transferred_value();\n    // The following line of code would have no effect to the balance of the\n    // caller stored in contract storage:\n    //\n    // balance += endowment;\n    //\n    // Instead, we use the `insert` function to write it back like so:\n    self.balances.insert(caller, &(balance + endowment));\n}\n")))}u.isMDXComponent=!0}}]);