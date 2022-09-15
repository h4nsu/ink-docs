"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Metadata",slug:"/metadata"},l="ink! Metadata",o={unversionedId:"basics/metadata",id:"version-4.0.0-alpha.1/basics/metadata",title:"Metadata",description:"The ink! metadata is used to describe a contract in a language agnostic way. It is",source:"@site/versioned_docs/version-4.0.0-alpha.1/basics/metadata.md",sourceDirName:"basics",slug:"/metadata",permalink:"/4.0.0-alpha.1/metadata",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/basics/metadata.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Metadata",slug:"/metadata"},sidebar:"reference",previous:{title:"Environment Functions",permalink:"/4.0.0-alpha.1/basics/environment-functions"},next:{title:"Overview",permalink:"/4.0.0-alpha.1/macros-attributes"}},s={},p=[{value:"metadata.json",id:"metadatajson",level:2},{value:"<code>source</code>",id:"source",level:3},{value:"<code>contract</code>",id:"contract",level:3},{value:"ABI",id:"abi",level:3},{value:"<code>spec</code>",id:"spec",level:4},{value:"<code>storage</code>",id:"storage",level:4},{value:"<code>types</code>",id:"types",level:4},{value:"<code>user</code>",id:"user",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ink-metadata"},"ink! Metadata"),(0,i.kt)("p",null,"The ink! metadata is used to describe a contract in a language agnostic way. It is\nintended to be used by third party tools (e.g UIs, block explorers) in order to correctly\ncall contract functions and interpret events."),(0,i.kt)("p",null,"The ink! metadata is generated when a contract is built using ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-contract"),", e.g\n",(0,i.kt)("inlineCode",{parentName:"p"},"cargo +nightly contract build"),"."),(0,i.kt)("p",null,"The metadata can be found in your contract's target directory under the name\n",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.json"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The metadata is also contained in your ",(0,i.kt)("inlineCode",{parentName:"p"},"$contract_name.contract")," file. The difference is\nthat the ",(0,i.kt)("inlineCode",{parentName:"p"},".contract")," file also contains the Wasm binary of your contract.")),(0,i.kt)("h2",{id:"metadatajson"},"metadata.json"),(0,i.kt)("p",null,"The metadata is defined by the following ",(0,i.kt)("strong",{parentName:"p"},"required")," keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source"),": Information about the contract's Wasm code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract"),": Metadata about the contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"abi"),": Raw JSON of the contract's abi metadata, generated during contract compilation.")),(0,i.kt)("p",null,"It may ",(0,i.kt)("em",{parentName:"p"},"optionally")," contain the following keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user"),": Additional user-defined metadata.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": {\n    "hash": "...",\n    "language": "...",\n    "compiler": "..."\n  },\n  "contract": {\n    "name": "...",\n    "version": "...",\n    "authors": [\n      "..."\n    ]\n  },\n  "V3": {\n    "spec": { ... },\n    "storage": { ... },\n    "types": { ... }\n  }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Notice that we don't have an ",(0,i.kt)("inlineCode",{parentName:"p"},"abi")," key, but we instead use the metadata version as the name\nof the key (",(0,i.kt)("inlineCode",{parentName:"p"},"V3")," in this case). You can read more about that in the ",(0,i.kt)("a",{parentName:"p",href:"/metadata#abi"},"ABI documentation"),".")),(0,i.kt)("p",null,"The following sections will dive deeper into how these sections are made up."),(0,i.kt)("h3",{id:"source"},(0,i.kt)("inlineCode",{parentName:"h3"},"source")),(0,i.kt)("p",null,"This object contains information about how the contract was built."),(0,i.kt)("p",null,"It consists of the following ",(0,i.kt)("strong",{parentName:"p"},"required")," keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash"),": The hash of the contract's Wasm code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language"),": The language used to write the contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compiler"),": The compiler used to compile the contract.")),(0,i.kt)("p",null,"It may ",(0,i.kt)("em",{parentName:"p"},"optionally")," include the following keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wasm"),": The actual Wasm code of the contract, for optionally bundling the code with the metadata.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"source": {\n  "hash": "0x157014494527fee27a82e49bbd9eea10c0713bb0566f6def37f4595db86236ff",\n  "language": "ink! 3.1.0",\n  "compiler": "rustc 1.63.0-nightly"\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you're interested in the code reference from ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-contract"),"\nsee ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L127"},"here"),".")),(0,i.kt)("h3",{id:"contract"},(0,i.kt)("inlineCode",{parentName:"h3"},"contract")),(0,i.kt)("p",null,"This object contains extra metadata about the contract."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"required")," keys include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": The name of the smart contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": The version of the smart contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors"),": The authors of the smart contract.")),(0,i.kt)("p",null,"It can ",(0,i.kt)("em",{parentName:"p"},"optionally")," include the following keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": The description of the smart contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"documentation"),": Link to the documentation of the smart contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repository"),": Link to the code repository of the smart contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"homepage"),": Link to the homepage of the smart contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"license"),": The license of the smart contract.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"contract": {\n  "name": "flipper",\n  "version": "3.1.0",\n  "authors": [\n    "Parity Technologies <admin@parity.io>"\n  ]\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you're interested in the code reference from ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-contract"),"\nsee ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L395"},"here"),".")),(0,i.kt)("h3",{id:"abi"},"ABI"),(0,i.kt)("p",null,"This is the specification of the contract."),(0,i.kt)("p",null,"Unlike the previous metadata sections the structure of the object stored here is not\ndefined. Instead, it is up to each programming language (e.g ink!, ask!, Solidity) to\ndefine their own metadata format which will then be stored here."),(0,i.kt)("p",null,"In this document we will focus on the ink! ABI."),(0,i.kt)("p",null,"The ABI starts with the version number of the ink! metadata. In our example below we are\nusing the ink! version 3 metadata, denoted by the ",(0,i.kt)("inlineCode",{parentName:"p"},"V3")," key."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The version of the ABI is distinct from any concept of Rust's crate versioning.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"V3": {\n  "spec": { ... },\n  "storage": { ... },\n  "types": { ... }\n}\n')),(0,i.kt)("p",null,"The ink! metadata consists of the following ",(0,i.kt)("strong",{parentName:"p"},"required")," sections"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec"),": The description of the contract (e.g constructors, messages, events, etc.)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage"),": The layout of the storage data structure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"types"),": A read-only registry containing types in their portable form for\nserialization.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you're interested in the code reference from ",(0,i.kt)("inlineCode",{parentName:"p"},"ink!"),"\nsee ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/80d302eb9b9cddb726200a9a86c71ae344d1b042/crates/metadata/src/lib.rs#L91"},"here"),".")),(0,i.kt)("h4",{id:"spec"},(0,i.kt)("inlineCode",{parentName:"h4"},"spec")),(0,i.kt)("p",null,"The contract ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," consists of the following ",(0,i.kt)("strong",{parentName:"p"},"required")," keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"constructors"),": The set of constructors of the contract.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label"),": The label of the constructor. In case of a trait provided constructor the\nlabel is prefixed with the trait label."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"selector"),": The selector hash of the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payable"),": If the constructor accepts any ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," from the caller."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),": The parameters of the deployment handler."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docs"),": The deployment handler documentation."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"messages"),": The external messages of the contract.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label"),": The label of the message. In case of trait provided messages and\nconstructors the prefix by convention in ink! is the label of the trait."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"selector"),": The selector hash of the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutates"),": If the message is allowed to mutate the contract state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payable"),": If the message accepts any ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," from the caller."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),": The parameters of the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"return_type"),": The return type of the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docs"),": The message documentation."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"events"),": The events of the contract.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label"),": The label of the event."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),": The event arguments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docs"),": The event documentation."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docs"),": The contract documentation.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"While all these keys are required, they may be empty. For example, if a contract does not\ndefine any events then the ",(0,i.kt)("inlineCode",{parentName:"p"},"events")," key would contain an empty array ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"spec": {\n  "constructors": [\n    {\n      "args": [\n        { ... }\n      ],\n      "docs": [\n        "Creates a new flipper smart contract initialized with the given value."\n      ],\n      "label": "new",\n      "payable": false,\n      "selector": "0x9bae9d5e"\n    }\n  ],\n  "docs": [],\n  "events": [],\n  "messages": [\n    {\n      "args": [],\n      "docs": [\n        " Flips the current value of the Flipper\'s boolean."\n      ],\n      "label": "flip",\n      "mutates": true,\n      "payable": false,\n      "returnType": null,\n      "selector": "0x633aa551"\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"storage"},(0,i.kt)("inlineCode",{parentName:"h4"},"storage")),(0,i.kt)("p",null,"This key describes the storage layout of an ink! contract. It tracks some of the\ndifferent structures which can be placed in storage."),(0,i.kt)("p",null,"It consists of the following\n",(0,i.kt)("em",{parentName:"p"},"optional")," keys (depending on what data structures are used by the contract):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cell"),": An encoded cell.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": The offset key into the storage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ty"),": The type of the encoded entity."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash"),": A layout that hashes values into the entire storage key space.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"offset"),": The key offset used by the strategy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"strategy"),": The hashing strategy to layout the underlying elements."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"layout"),": The storage layout of the unbounded layout elements."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"array"),": An array of associated storage cells encoded with a given type.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"offset"),": The offset key of the array layout. This is the same key as the element\nat index 0 of the array layout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"len"),": The number of elements in the array layout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cells_per_elem"),": The number of cells each element in the array layout consists of."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"layout"),": The layout of the elements stored in the array layout."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"struct"),": A struct layout with fields of different types.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fields"),": The fields of the struct layout."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enum"),": An enum layout with a discriminant telling which variant is layed out.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dispatch_key"),": The key where the discriminant is stored to dispatch the variants."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variants"),": The variants of the enum.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"storage": {\n  "struct": {\n    "fields": [\n      {\n        "layout": {\n          "cell": {\n            "key": "0x0000000000000000000000000000000000000000000000000000000000000000",\n            "ty": 0\n          }\n        },\n        "name": "value"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h4",{id:"types"},(0,i.kt)("inlineCode",{parentName:"h4"},"types")),(0,i.kt)("p",null,"This object contains the type registry for the smart contract. It consists of an array of\ntype objects, each of which is defined as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": Numerical ID for referencing the type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ty"),": The definition of the type.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),": The unique path to the type. Can be empty for built-in types."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),": The generic type parameters of the type in use. Empty for non generic\ntypes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"def"),": The actual type definition."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docs"),": Documentation.")))),(0,i.kt)("p",null,"The type definition object (",(0,i.kt)("inlineCode",{parentName:"p"},"def"),") supports the following ",(0,i.kt)("inlineCode",{parentName:"p"},"primitive")," types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"char"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"str"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"u8"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"u16"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"u32"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"u64"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"u128"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"i8"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"i16"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"i32"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"i64"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"i128"),".")),(0,i.kt)("p",null,"It also supports a variety of complex built-in and user-defined types. However, we will\nnot dig into them here. If you are interested in learning more take a look at the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/scale-info"},(0,i.kt)("inlineCode",{parentName:"a"},"scale-info"))," crate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"types": [\n  {\n    "id": 0,\n    "type": {\n      "def": {\n        "primitive": "bool"\n      }\n    }\n  }\n]\n')),(0,i.kt)("p",null,"Other parts of the metadata, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"storage")," object, will reference individual\ntypes from this type registry using the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," key."),(0,i.kt)("h3",{id:"user"},(0,i.kt)("inlineCode",{parentName:"h3"},"user")),(0,i.kt)("p",null,"This is an ",(0,i.kt)("em",{parentName:"p"},"optional")," field used to add user-defined metadata. Some examples of things\nyou may want to include here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"moon_phase"),": Phase of the moon during which the smart contract works."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"favorite_blockchain"),": The favorite blockchain of the contract authors (answer: Polkadot!).")))}m.isMDXComponent=!0}}]);