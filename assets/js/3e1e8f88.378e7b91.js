"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2367],{3453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(4848),s=a(8453);const r={title:"Storage Layout",slug:"/datastructures/storage-layout",hide_title:!0},o="Storage Layout",i={id:"datastructures/storage-layout",title:"Storage Layout",description:"Smart contract authors are given some flexibility in regards on how they want to organize",source:"@site/versioned_docs/version-4.x/datastructures/storage-layout.md",sourceDirName:"datastructures",slug:"/datastructures/storage-layout",permalink:"/4.x/datastructures/storage-layout",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.x/datastructures/storage-layout.md",tags:[],version:"4.x",frontMatter:{title:"Storage Layout",slug:"/datastructures/storage-layout",hide_title:!0},sidebar:"reference",previous:{title:"Working with Mapping",permalink:"/4.x/datastructures/mapping"},next:{title:"Custom Data Structures",permalink:"/4.x/datastructures/custom-datastructure"}},c={},l=[{value:"Storage Organization",id:"storage-organization",level:2},{value:"Packed vs Non-Packed layout",id:"packed-vs-non-packed-layout",level:2},{value:"Eager Loading vs. Lazy Loading",id:"eager-loading-vs-lazy-loading",level:2},{value:"Manual vs. Automatic Key Generation",id:"manual-vs-automatic-key-generation",level:2},{value:"Considerations",id:"considerations",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/img/title/storage.svg",className:"titlePic"}),"\n",(0,n.jsx)(t.h1,{id:"storage-layout",children:"Storage Layout"}),"\n",(0,n.jsx)(t.p,{children:"Smart contract authors are given some flexibility in regards on how they want to organize\nthe storage layout of their contracts.\nLet's dive deeper into the concepts behind ink! storage to get a better understanding\nof some of its implications and limitations."}),"\n",(0,n.jsx)(t.h2,{id:"storage-organization",children:"Storage Organization"}),"\n",(0,n.jsx)(t.p,{children:"The following schema depicts the storage which is exposed\nto ink! by the contracts pallet:"}),"\n",(0,n.jsx)("div",{class:"schema",children:(0,n.jsx)("img",{src:"/img/kv.svg",alt:"Storage Organization: Layout"})}),"\n",(0,n.jsxs)(t.p,{children:["Storage data is always encoded with the\n",(0,n.jsx)(t.a,{href:"https://docs.substrate.io/reference/scale-codec/",children:(0,n.jsx)(t.code,{children:"SCALE"})})," codec.\nThe storage API operates by storing and loading entries into and from a single storage\ncells, where each storage cell is accessed under its own dedicated storage key. To some\nextent, the storage API works similar to a traditional key-value database."]}),"\n",(0,n.jsx)(t.h2,{id:"packed-vs-non-packed-layout",children:"Packed vs Non-Packed layout"}),"\n",(0,n.jsxs)(t.p,{children:["Types that can be stored entirely under a single storage cell are considered\n",(0,n.jsx)(t.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Packed.html",children:(0,n.jsx)(t.code,{children:"Packed"})}),".\nBy default, ink! tries to store all storage struct fields under a single storage cell.\nConsequentially, with a ",(0,n.jsx)(t.code,{children:"Packed"})," storage layout, any message interacting with the contract\nstorage will always need to operate on the entire contract storage struct."]}),"\n",(0,n.jsx)(t.p,{children:"For example, if we have a somewhat small contract storage struct consisting of only a few\ntiny fields, pulling everything from the storage inside every message is not\nproblematic. It may even be advantageous - especially if we expect most messages to\ninteract with most of the storage fields."}),"\n",(0,n.jsxs)(t.p,{children:["On the other hand, this can get problematic if we're storing a large ",(0,n.jsx)(t.code,{children:"ink::prelude::vec::Vec"}),"\nin the contract storage but provide messages that do not need to read and write from this\n",(0,n.jsx)(t.code,{children:"Vec"}),". In that scenario, each and every contract message bears runtime overhead by dealing\nwith that ",(0,n.jsx)(t.code,{children:"Vec"}),", regardless whether they access it or not. This results in extra gas costs.\nTo solve this problem we need to turn our storage into a non-packed layout somehow."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["If any type exhibiting ",(0,n.jsx)(t.code,{children:"Packed"})," layout gets large enough (an ever-growing ",(0,n.jsx)(t.code,{children:"Vec"})," might be\na prime candidate for this), it will break your contract.\nThis is because for encoding and decoding storage items, there is a buffer with only limited\ncapacity (around 16KB in the default configuration) available. This means any contract\ntrying to decode more than that will trap! If you are unsure about the potential size a\ndata structure might get, consider using an ink! ",(0,n.jsx)(t.code,{children:"Mapping"}),", which can store an arbitrary\nnumber of elements, instead."]})}),"\n",(0,n.jsx)(t.h2,{id:"eager-loading-vs-lazy-loading",children:"Eager Loading vs. Lazy Loading"}),"\n",(0,n.jsxs)(t.p,{children:["ink! provides means of breaking the storage up into smaller pieces, which can be loaded\non demand, with the\n",(0,n.jsx)(t.a,{href:"https://paritytech.github.io/ink/ink/storage/struct.Lazy.html",children:(0,n.jsx)(t.code,{children:"Lazy"})})," primitive.\nWrapping any storage field inside a ",(0,n.jsx)(t.code,{children:"Lazy"})," struct makes the storage\nstruct in which that field appears also\nnon-",(0,n.jsx)(t.code,{children:"Packed"}),", preventing it from being eagerly loaded during arbitrary storage operations:"]}),"\n",(0,n.jsx)("div",{class:"schema",children:(0,n.jsx)("img",{src:"/img/storage-layout.svg",alt:"Storage Organization: Layout with a Lazy field"})}),"\n",(0,n.jsxs)(t.p,{children:["Note that in above illustration, the key of ",(0,n.jsx)(t.code,{children:"0x12345678"})," just serves as an example; we'll\nlearn more about storage key calculation\n",(0,n.jsx)(t.a,{href:"#manual-vs-automatic-key-generation",children:"later in this chapter"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The following example demonstrates how we can solve the problem introduced in the above\nsection. You'll notice that for the lazily loaded storage field, we now work with getters\nand setters to access and modify the underlying storage value:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[ink::contract]\nmod mycontract {\n    use ink::prelude::vec::Vec;\n    use ink::storage::Lazy;\n\n    #[derive(Default)]\n    #[ink(storage)]\n    pub struct MyContract {\n        tiny_value: Balance,\n        /// This vector might get large and expensive to work with.\n        /// We want to enforce a non-`Packed` storage layout.\n        large_vec: Lazy<Vec<Balance>>,\n    }\n\n    impl MyContract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self::default()\n        }\n\n        /// Because `large_vec` is loaded lazily, this message is always cheap.\n        #[ink(message)]\n        pub fn get_balance(&self) -> Balance {\n            self.tiny_value\n        }\n\n        /// Lazy fields like `large_vec` provide `get()` and `set()` storage operators.\n        #[ink(message)]\n        pub fn add_balance(&mut self, value: Balance) {\n            let mut balances = self.large_vec.get_or_default();\n            balances.push(value);\n            self.large_vec.set(&balances);\n        }\n    }\n}\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ink::prelude::vec::Vec"}),"'s are always loaded in their entirety. This is because all elements\nof the ",(0,n.jsx)(t.code,{children:"ink::prelude::vec::Vec"})," live under a single storage key. Wrapping the\n",(0,n.jsx)(t.code,{children:"ink::prelude::vec::Vec"})," inside ",(0,n.jsx)(t.code,{children:"Lazy"}),", like the\nprovided example above does, has no influence on its inner layout. If you are dealing with\nlarge or sparse arrays on contract storage, consider using a ",(0,n.jsx)(t.code,{children:"Mapping"})," instead."]})}),"\n",(0,n.jsx)(t.h2,{id:"manual-vs-automatic-key-generation",children:"Manual vs. Automatic Key Generation"}),"\n",(0,n.jsxs)(t.p,{children:["By default, keys are calculated automatically for you, thanks to the\n",(0,n.jsx)(t.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.AutoKey.html",children:(0,n.jsx)(t.code,{children:"AutoKey"})}),"\nprimitive. They'll be generated at compile time and ruled out for conflicts.\nHowever, for non-",(0,n.jsx)(t.code,{children:"Packed"})," types like ",(0,n.jsx)(t.code,{children:"Lazy"})," or the ",(0,n.jsx)(t.code,{children:"Mapping"}),", the\n",(0,n.jsx)(t.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.ManualKey.html",children:(0,n.jsx)(t.code,{children:"ManualKey"})}),"\nprimitive allows manual control over the storage key of a field like so:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"#[ink(storage)]\npub struct MyContract {\n    /// The storage key for this field is always `0x0000007f`\n    inner: Lazy<bool, ManualKey<127>>,\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"This may be advantageous: Your storage key will always stay the same, regardless of\nthe version of your contract or ink! itself (note that the key calculation algorithm may\nchange with future ink! versions)."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Using ",(0,n.jsx)(t.code,{children:"ManualKey"})," instead of ",(0,n.jsx)(t.code,{children:"AutoKey"})," might be especially desirable for upgradable\ncontracts, as using ",(0,n.jsx)(t.code,{children:"AutoKey"})," might result in a different storage key for the same field\nin a newer version of the contract. This may break your contract after an upgrade \ud83d\ude31!"]})}),"\n",(0,n.jsxs)(t.p,{children:["The storage key of the contracts root storage struct defaults to ",(0,n.jsx)(t.code,{children:"0x00000000"}),".  However,\ncontract developers can set the key to an arbitrary 4 bytes value by providing it a\n",(0,n.jsx)(t.code,{children:"ManualKey"})," like so:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"/// Manually set the root storage key of `MyContract` to be `0xcafebabe`.\n#[ink(storage)]\npub struct MyContract<KEY: StorageKey = ManualKey<0xcafebabe>> {\n    value: bool,\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"considerations",children:"Considerations"}),"\n",(0,n.jsxs)(t.p,{children:["It might be worthwhile to think about the desired storage layout of your contract. While\nusing a ",(0,n.jsx)(t.code,{children:"Packed"})," layout will keep your contracts overall code size smaller, it can cause\nunnecessarily high gas costs. Thus, we consider it a good practice to break up large\nor complex storage layouts into reasonably sized distinct storage cells."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["ink! ",(0,n.jsx)(t.code,{children:"Mapping"}),"s are always non-",(0,n.jsx)(t.code,{children:"Packed"})," and loaded lazily, one key-value pair at the time."]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var n=a(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);