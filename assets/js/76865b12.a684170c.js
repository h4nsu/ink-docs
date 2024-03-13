"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7222],{5241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var c=t(4848),r=t(8453);const o={title:"Debugging",slug:"/basics/contract-debugging",hide_title:!0},a="Contract Debugging",s={id:"testing/debugging",title:"Debugging",description:"There are three ways to debug your ink! contract currently:",source:"@site/docs/testing/debugging.md",sourceDirName:"testing",slug:"/basics/contract-debugging",permalink:"/basics/contract-debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/testing/debugging.md",tags:[],version:"current",frontMatter:{title:"Debugging",slug:"/basics/contract-debugging",hide_title:!0}},i={},l=[{value:"How do I print to the terminal console from ink!?",id:"how-do-i-print-to-the-terminal-console-from-ink",level:3},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:"/img/title/magnifying-glass.svg",className:"titlePic"}),"\n",(0,c.jsx)(n.h1,{id:"contract-debugging",children:"Contract Debugging"}),"\n",(0,c.jsx)(n.p,{children:"There are three ways to debug your ink! contract currently:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["You can write tests using one of the mechanisms described on the\n",(0,c.jsx)(n.a,{href:"/basics/contract-testing/overview",children:"Contract Testing"})," page."]}),"\n",(0,c.jsxs)(n.li,{children:["You can interact with your contract via a UI or command-line. This is\ndescribed on the ",(0,c.jsx)(n.a,{href:"/getting-started/calling-your-contract",children:"Call Your Contract"})," page."]}),"\n",(0,c.jsxs)(n.li,{children:["You can print debug statements in your contract. Those will appear\non the Substrate node's ",(0,c.jsx)(n.code,{children:"stdout"}),". This is described on this page."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"how-do-i-print-to-the-terminal-console-from-ink",children:"How do I print to the terminal console from ink!?"}),"\n",(0,c.jsx)(n.p,{children:"You can use those two macros:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/macro.debug_println.html",children:(0,c.jsx)(n.code,{children:"ink::env::debug_println!"})})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/macro.debug_print.html",children:(0,c.jsx)(n.code,{children:"ink::env::debug_print!"})})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"There are things you could do to enable debug messages on the client console:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:["Enable the feature ",(0,c.jsx)(n.code,{children:"ink-debug"})," for the ",(0,c.jsx)(n.code,{children:"ink_env"})," crate."]}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.code,{children:"cargo-contract"})," does this automatically for you (for versions ",(0,c.jsx)(n.code,{children:">= 0.13.0"}),"), except if\nyou compile a contract in ",(0,c.jsx)(n.code,{children:"--release"})," mode."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:["Set the log level of your node to ",(0,c.jsx)(n.code,{children:"runtime::contracts=debug"}),"."]}),(0,c.jsx)("br",{}),"\nFor example, to have only errors and debug output show up for the ",(0,c.jsx)(n.code,{children:"substrate-contracts-node"}),":"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"substrate-contracts-node -lerror,runtime::contracts=debug\n"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:["Set the log level of your node to ",(0,c.jsx)(n.code,{children:"runtime::contracts::strace"})," to trace host function calls."]}),(0,c.jsx)("br",{}),"\nThese function calls logs will also be displayed in the ",(0,c.jsx)(n.code,{children:"Debug message"})," panel of ",(0,c.jsx)(n.a,{href:"https://github.com/paritytech/contracts-ui",children:"Contracts UI"}),".\nFor example, to view these traces in addition to the logs described above:"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"substrate-contracts-node -lerror,runtime::contracts=debug,runtime::contracts::strace=trace\n"})}),"\n",(0,c.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.p,{children:"The following code depicts how to print debug statements\nfrom a message or constructor."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:'#[ink(constructor)]\nfn new() -> Self {\n    ink::env::debug_println!("created new instance at {}", Self::env().block_number());\n    Self { }\n}\n\n#[ink(message)]\nfn print(&self) {\n   let caller = self.env().caller();\n   let message = ink_prelude::format!("got a call from {:?}", caller);\n   ink::env::debug_println!(&message);\n}\n'})}),"\n",(0,c.jsxs)(n.admonition,{type:"note",children:[(0,c.jsx)(n.p,{children:"Debug output is not printed for transactions!"}),(0,c.jsx)(n.p,{children:"It is only printed for RPC calls or off-chain tests."})]}),"\n",(0,c.jsx)(n.h1,{id:"decode-data-payload",children:"Decode Data Payload"}),"\n",(0,c.jsxs)(n.p,{children:["You can use a block explorer or an app like PolkadotJs to retrieve the data payload of a contract transaction, and then use ",(0,c.jsx)(n.a,{href:"https://github.com/paritytech/cargo-contract",children:"cargo-contract"})," to decode it."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# From your contract directory\ncargo contract decode message -d fe5bd8ea01000000\n"})}),"\n",(0,c.jsx)(n.p,{children:"This command will output the method name and parameters encoded in the data payload:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Decoded data: inc_by { n: 1 }\n"})}),"\n",(0,c.jsx)(n.p,{children:"If the contract was called through a cross-contract interaction, the payload will not be available in the transaction. In such cases, you can use the approach described in the next section to access it."}),"\n",(0,c.jsx)(n.h1,{id:"replay-and-debug-a-block",children:"Replay and Debug a Block"}),"\n",(0,c.jsxs)(n.p,{children:["To replay a transaction, you can use ",(0,c.jsx)(n.a,{href:"https://github.com/AcalaNetwork/chopsticks",children:"Chopstick"})," to create a local fork of the chain and replay the block with trace-level logging."]}),"\n",(0,c.jsxs)(n.p,{children:["Assuming you have a node that you can connect to at ",(0,c.jsx)(n.code,{children:"$ENDPOINT"})," and the transaction you want to replay is in block ",(0,c.jsx)(n.code,{children:"$BLOCK_HASH"}),", you can use the following command:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npx @acala-network/chopsticks@latest run-block \\\n--endpoint $ENDPOINT \\\n--block $BLOCK_HASH \\\n--runtime-log-level 5 \\\n| grep runtime::contracts\n"})}),"\n",(0,c.jsxs)(n.p,{children:["This command replays the block with trace-level logging enabled. By filtering the output with ",(0,c.jsx)(n.code,{children:"runtime::contracts"}),", you can view all the contract calls in the block:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [246, 118, 44, 201]\nruntime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 1, 0, 0, 0]\nruntime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }\nruntime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }\n"})}),"\n",(0,c.jsx)(n.p,{children:"From here, you can identify the call you are interested in and decode the data payload:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"echo 254, 91, 216, 234, 1, 0, 0, 0 \\\n| tr ',' ' ' \\\n| xargs printf '%02x' \\\n| xargs cargo contract decode message -d\n"})}),"\n",(0,c.jsx)(n.p,{children:"This command will output the following:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Decoded data: inc_by { n: 1 }\n"})}),"\n",(0,c.jsx)(n.h1,{id:"fork-node-and-replay-transactions",children:"Fork Node and Replay Transactions"}),"\n",(0,c.jsxs)(n.p,{children:["You can also use ",(0,c.jsx)(n.a,{href:"https://github.com/AcalaNetwork/chopsticks",children:"Chopstick"})," to start a local fork of your chain."]}),"\n",(0,c.jsxs)(n.p,{children:["This command starts a fork beginning at block ",(0,c.jsx)(n.code,{children:"$BLOCK_HASH"}),". You can connect to this fork using ",(0,c.jsx)(n.code,{children:"ws://localhost:8000"})," to submit extrinsics via PolkadotJs or ",(0,c.jsx)(n.code,{children:"cargo contract"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npx @acala-network/chopsticks@latest \\\n--endpoint $ENDPOINT \\\n--block $BLOCK_HASH \\\n--runtime-log-level 5\n"})}),"\n",(0,c.jsx)(n.p,{children:"Here, for example, you can re-run the transaction that we decoded in the previous section:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"cargo contract call \\\n--contract $CONTRACT_ADDR \\\n--message inc_by --args 1 \\\n--suri //Alice \\\n--url ws://localhost:8000\n"})}),"\n",(0,c.jsx)(n.p,{children:"Since trace-level logging is used, you will receive detailed information about all the host functions called during the execution of the contract:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 2, 0, 0, 0]\nruntime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }\nruntime::contracts           DEBUG: Execution finished with debug buffer: seal0::value_transferred(out_ptr: 65488, out_len_ptr: 65516) = Ok(())\nseal0::input(out_ptr: 65536, out_len_ptr: 65524) = Ok(())\nseal1::get_storage(key_ptr: 65536, key_len: 4, out_ptr: 65540, out_len_ptr: 65524) = Ok(Success)\nseal2::set_storage(key_ptr: 65536, key_len: 4, value_ptr: 65540, value_len: 4) = Ok(4)\nseal0::seal_return(flags: 0, data_ptr: 65536, data_len: 1) = Err(TrapReason::Return(ReturnData { flags: 0, data: [0] }))\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var c=t(6540);const r={},o=c.createContext(r);function a(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);