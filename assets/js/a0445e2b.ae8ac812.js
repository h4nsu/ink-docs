"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3082],{3860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(4848),s=n(8453);const i={title:"storage_never_freed",hide_title:!0,description:"storage_never_freed lint documentation"},o="storage_never_freed",a={id:"linter/rules/storage_never_freed",title:"storage_never_freed",description:"storage_never_freed lint documentation",source:"@site/docs/linter/rules/storage_never_freed.md",sourceDirName:"linter/rules",slug:"/linter/rules/storage_never_freed",permalink:"/linter/rules/storage_never_freed",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/linter/rules/storage_never_freed.md",tags:[],version:"current",frontMatter:{title:"storage_never_freed",hide_title:!0,description:"storage_never_freed lint documentation"},sidebar:"reference",previous:{title:"primitive_topic",permalink:"/linter/rules/primitive_topic"},next:{title:"strict_balance_equality",permalink:"/linter/rules/strict_balance_equality"}},l={},c=[{value:"What it does",id:"what-it-does",level:2},{value:"Why is this bad?",id:"why-is-this-bad",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"storage_never_freed",children:"storage_never_freed"}),"\n",(0,r.jsx)(t.h2,{id:"what-it-does",children:"What it does"}),"\n",(0,r.jsx)(t.p,{children:"This lint ensures that for every storage field with a collection type, when there is an\noperation to insert new elements, there's also an operation for removing elements."}),"\n",(0,r.jsx)(t.h2,{id:"why-is-this-bad",children:"Why is this bad?"}),"\n",(0,r.jsx)(t.p,{children:"When a user executes a contract function that writes to storage, they have to put a\ndeposit down for the amount of storage space used. Whoever frees up that storage at some\nlater point gets the deposit back. Therefore, it is always a good idea to make it possible\nfor users to free up their storage space."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["In the following example there is a storage field with the ",(0,r.jsx)(t.code,{children:"Mapping"})," type that has an\nfunction that inserts new elements:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[ink(storage)]\npub struct Transaction {\n    values: Mapping<AccountId, AccountId>,\n}\n\nfn add_value(&mut self, k: &AccountId, v: &AccountId) {\n    // ...\n    self.values.insert(k, v);\n    // ...\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"But, ideally, there also should be a function that allows the user to remove elements from\nthe Mapping freeing storage space:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"fn del_value(&mut self, k: &AccountId) {\n    // ...\n    self.values.remove(k);\n    // ...\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);