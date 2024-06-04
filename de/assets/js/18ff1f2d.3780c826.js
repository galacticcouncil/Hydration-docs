"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[2355],{1428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=n(4848),r=n(8453),s=n(6025);const i={id:"howto_trade",title:"Trade in Omnipool"},a=void 0,d={id:"howto_trade",title:"Trade in Omnipool",description:"This page provides a step-by-step guide which will help you execute your first trades using the HydraDX Omnipool.",source:"@site/docs/howto_trade.md",sourceDirName:".",slug:"/howto_trade",permalink:"/de/howto_trade",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/howto_trade.md",tags:[],version:"current",frontMatter:{id:"howto_trade",title:"Trade in Omnipool"},sidebar:"sidebar",previous:{title:"Cross-chain Transfer",permalink:"/de/howto_xcm"},next:{title:"Place a DCA Order",permalink:"/de/howto_dca"}},l={},c=[{value:"00 Transport tokens",id:"00-transport-tokens",level:2},{value:"01 Enter Omnipool",id:"01-enter-omnipool",level:2},{value:"02 Connect Your Account",id:"02-connect-your-account",level:2},{value:"03 Execute a Trade",id:"03-execute-a-trade",level:2},{value:"04 Execute a Split Trade",id:"04-execute-a-split-trade",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["This page provides a ",(0,o.jsx)(t.strong,{children:"step-by-step guide"})," which will ",(0,o.jsx)(t.strong,{children:"help you execute your first trades"})," using the HydraDX Omnipool."]}),"\n",(0,o.jsxs)(t.p,{children:["The HydraDX Omnipool is a next-gen AMM which unlocks unparalleled efficiencies, you can find out more in our ",(0,o.jsx)(t.a,{href:"/",children:"product documentation"}),"."]}),"\n",(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)("img",{alt:"metadata",src:(0,s.A)("/howto_trade/trade_screen_st.jpg")})}),"\n",(0,o.jsx)(t.h2,{id:"00-transport-tokens",children:"00 Transport tokens"}),"\n",(0,o.jsx)(t.p,{children:"If you would like to execute a trade using a non-native asset (e.g. DOT or DAI), you first need to get these assets to the HydraDX chain. This step does not apply to HDX."}),"\n",(0,o.jsx)(t.p,{children:"There are two different mechanisms to transport non-native assets:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://app.hydradx.io/cross-chain",children:"Cross-chain transfer"})," - use this tool to transfer assets from other Polkadot parachains, or from Polkadot itself. Step-by-step documentation ",(0,o.jsx)(t.a,{href:"howto_xcm",children:"here"}),";"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://www.portalbridge.com/#/transfer",children:"Ethereum bridge"})," - for bridging assets from the Ethereum ecosystem. Step-by-step documentation ",(0,o.jsx)(t.a,{href:"/bridge_from_ethereum",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"These solutions can also be used to transport tokens outside of the HydraDX network."}),"\n",(0,o.jsx)(t.h2,{id:"01-enter-omnipool",children:"01 Enter Omnipool"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://app.hydradx.io/trade",children:"https://app.hydradx.io/#/trade"})}),"\n",(0,o.jsx)(t.h2,{id:"02-connect-your-account",children:"02 Connect Your Account"}),"\n",(0,o.jsxs)(t.p,{children:["Click on ",(0,o.jsx)(t.code,{children:"Connect wallet"})," ",(0,o.jsx)(t.strong,{children:"(1 in image above)"})," and connect to your preferred Polkadot wallet. After that, select your account."]}),"\n",(0,o.jsx)(t.h2,{id:"03-execute-a-trade",children:"03 Execute a Trade"}),"\n",(0,o.jsx)(t.p,{children:"The HydraDX Trade UI allows you to intuitively execute a trade:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Select the pair of tokens you intend to trade ",(0,o.jsx)(t.strong,{children:"(2)"}),";"]}),"\n",(0,o.jsxs)(t.li,{children:["Enter the amount of tokens for the trade ",(0,o.jsx)(t.strong,{children:"(3)"}),".",(0,o.jsx)(t.br,{}),"\n","You can enter the amount of tokens you would like to pay with (e.g. 5000 DAI), but you can also enter the amount of tokens you would like to receive (e.g. 1000 HDX);"]}),"\n",(0,o.jsxs)(t.li,{children:["If you would like to adjust your slippage preferences, you can do so in ",(0,o.jsx)(t.code,{children:"Settings"})," ",(0,o.jsx)(t.strong,{children:"(4)"}),";"]}),"\n",(0,o.jsxs)(t.li,{children:["To complete the trade with instant execution (pre-selected) ",(0,o.jsx)(t.strong,{children:"(5)"}),", click on ",(0,o.jsx)(t.code,{children:"Swap"})," ",(0,o.jsx)(t.strong,{children:"(7)"})," and sign the transaction using your wallet. Otherwise, follow the additional steps below."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"04-execute-a-split-trade",children:"04 Execute a Split Trade"}),"\n",(0,o.jsxs)(t.p,{children:["If your trade is large enough so that price impact would be > 0.15%, the UI will allow you to select ",(0,o.jsx)(t.code,{children:"Split trade"})," ",(0,o.jsx)(t.strong,{children:"(6)"})," - breaking your trade into multiple smaller trades executed over < 3 hours and therefore reducing your price impact."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Select the pair of tokens and amounts as in ",(0,o.jsx)(t.strong,{children:"03 Execute a Trade"})," above;"]}),"\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.code,{children:"Split trade"})," ",(0,o.jsx)(t.strong,{children:"(6)"}),";"]}),"\n",(0,o.jsxs)(t.li,{children:["To schedule your Split trade execution, click on ",(0,o.jsx)(t.code,{children:"Place trades"})," ",(0,o.jsx)(t.strong,{children:"(7)"})," and sign the transaction using your wallet."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Stay hydrated, not liquidated."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);