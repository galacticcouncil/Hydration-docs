"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[5946],{1640:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=i(4848),o=i(8453);const s={id:"omnipool_security",title:"State of the Art Security"},n=void 0,r={id:"omnipool_security",title:"State of the Art Security",description:"The HydraDX Protocol pursues a multi-layered security strategy. On this page you will find a description of the various measures which work together to keep your funds safe.",source:"@site/docs/omnipool_security.md",sourceDirName:".",slug:"/omnipool_security",permalink:"/es/omnipool_security",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/omnipool_security.md",tags:[],version:"current",frontMatter:{id:"omnipool_security",title:"State of the Art Security"},sidebar:"sidebar",previous:{title:"Hydrate Your Treasury (B2B)",permalink:"/es/omnipool_treasuries"},next:{title:"Impermanent Loss",permalink:"/es/omnipool_impermanent_loss"}},c={},l=[{value:"Audits",id:"audits",level:2},{value:"Bug Bounty Program",id:"bug-bounties",level:2},{value:"Mechanisms for Protecting Omnipool Liquidity",id:"protecting-liquidity",level:2},{value:"TVL Caps",id:"tvl-caps",level:3},{value:"Oracles",id:"oracles",level:3},{value:"Dynamic Withdrawal Fees",id:"dynamic-withdrawal-fees",level:3},{value:"In-block Trade Limits",id:"trade-limits",level:3},{value:"Targeted Function Pausing",id:"tfp",level:3}];function d(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The HydraDX Protocol pursues a multi-layered security strategy. On this page you will find a description of the various measures which work together to keep your funds safe."}),"\n",(0,a.jsx)(t.p,{children:"The most basic layer of the HydraDX security strategy consists carefully conducted research and development, as well as rigorous peer review processes. On top of that, HydraDX strives to have all mission-critical code undergo rigorous audits. The next layer of the security strategy is a generous bug bounty program which makes it worthwhile to find and disclose vulnerabilities (as opposed to exploiting them)."}),"\n",(0,a.jsxs)(t.p,{children:["Finally, the protocol has implemented a combination of state-of-the-art measures which are designed to ",(0,a.jsx)(t.a,{href:"https://docs.hydradx.io/omnipool_security#protecting-liquidity",children:"protect your liquidity"})," against unfortunate events such as toxic assets or (economic) exploits."]}),"\n",(0,a.jsx)(t.h2,{id:"audits",children:"Audits"}),"\n",(0,a.jsxs)(t.p,{children:["The HydraDX protocol conducts audits of all mission-critical code and ",(0,a.jsx)(t.a,{href:"https://github.com/galacticcouncil/HydraDX-audit-reports",children:"publishes the audit reports"})," on a regular basis."]}),"\n",(0,a.jsxs)(t.p,{children:["The security audit of the Rust implementation of the HydraDX Omnipool was performed by ",(0,a.jsx)(t.a,{href:"https://runtimeverification.com/",children:"Runtime Verification"})," - an established industry leader with clients such as NASA, Ethereum and Polkadot. The scope of the security audit includes the source code of\xa0",(0,a.jsx)(t.a,{href:"https://github.com/galacticcouncil/HydraDX-node/blob/master/pallets/omnipool/src/",children:"HydraDX Omnipool pallet"}),",its\xa0",(0,a.jsx)(t.a,{href:"https://github.com/galacticcouncil/HydraDX-math/tree/main/src/omnipool",children:"mathematical logic"})," and\xa0",(0,a.jsx)(t.a,{href:"https://github.com/galacticcouncil/warehouse/tree/main/asset-registry",children:"asset registry"}),", as well as 3rd party libraries which have been included as a (Substrate) dependency. The results of the audit were published in September 2022, you can ",(0,a.jsx)(t.a,{href:"https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220907-Runtime-Verification-Security-Audit.pdf",children:"consult the full report here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In March 2022, the economic/math audit of the Omnipool was completed by ",(0,a.jsx)(t.a,{href:"https://block.science/",children:"BlockScience"})," - a leading web3 native firm dedicated to analyzing complex systems for the likes of Graph Protocol and Protocol Labs (Filecoin). The scope of this audit was to provide an overview of the AMM specification with a special attention to the mathematical and economic concepts underpinning the Omnipool, together with the implications of those mechanisms for liquidity provisioning and trading activity. You can ",(0,a.jsx)(t.a,{href:"https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220322-BlockScience-Omnipool-Report%2Baddendum-by-HydraDX.pdf",children:"consult the full report here"}),", including the addendum by HydraDX with post-factum changes."]}),"\n",(0,a.jsx)(t.h2,{id:"bug-bounties",children:"Bug Bounty Program"}),"\n",(0,a.jsxs)(t.p,{children:["HydraDX has set up a ",(0,a.jsx)(t.a,{href:"https://immunefi.com/bounty/hydradx/",children:"generous bug bounty program"})," which provides strong incentives for the detection and responsible disclosure of bugs and other vulnerabilities."]}),"\n",(0,a.jsxs)(t.p,{children:["Rewards are distributed according to the impact of the vulnerability based on the ",(0,a.jsx)(t.a,{href:"https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2/",children:"Immunefi Vulnerability Severity Classification System V2.2"}),". This is a simplified 5-level scale, with separate scales for websites/apps, smart contracts, and blockchains/DLTs, focusing on the impact of the vulnerability reported."]}),"\n",(0,a.jsx)(t.h2,{id:"protecting-liquidity",children:"Mechanisms for Protecting Omnipool Liquidity"}),"\n",(0,a.jsx)(t.p,{children:"The HydraDX protocol is continuously researching and implementing mechanisms that keep the Omnipool liquidity safe. These mechanisms are activated in the unfortunate (but not impossible) scenario that an actor tries to drain liquidity from the Omnipool by abusing a toxic asset situation (LUNA-like scenario) or some malicious exploit."}),"\n",(0,a.jsx)(t.h3,{id:"tvl-caps",children:"TVL Caps"}),"\n",(0,a.jsx)(t.p,{children:"All assets are subject to a specific TVL cap defining the maximum proportion of liquidity which any given asset can represent in the Omnipool. Riskier assets will have lower caps compared to less risky (high mcap or stable) assets. This allows the HydraDX protocol to significantly limit the damage which may potentially be caused from toxic asset flows: Using a hyper-inflationary asset, attackers cannot drain more liquidity than its TVL cap."}),"\n",(0,a.jsx)(t.h3,{id:"oracles",children:"Oracles"}),"\n",(0,a.jsx)(t.p,{children:"On-chain oracles provide average price information for a specified Omnipool asset during a given timeframe (e.g. 10 blocks). Oracles are an essential monitoring tool that allow the HydraDX protocol to detect irregularities and potential price manipulation attacks - and to act accordingly."}),"\n",(0,a.jsx)(t.h3,{id:"dynamic-withdrawal-fees",children:"Dynamic Withdrawal Fees"}),"\n",(0,a.jsx)(t.p,{children:"To protect the Omnipool liquidity, all withdrawals of liquidity positions are subject to a fee. The withdrawal fee is dynamic, ranging between 0.01% and 1% of the total amount. The exact fee amount is determined at the time of withdrawal based on the asset in question."}),"\n",(0,a.jsx)(t.p,{children:"The withdrawal fee covers the spread between the current spot price of the asset and the its average price over the previous 10 blocks (fetched from the HydraDX oracles). A large discrepancy between spot and average price indicates a potential price manipulation attack, and a higher withdrawal fee is applied to eliminate the economic incentives for carrying out such an attack."}),"\n",(0,a.jsx)(t.p,{children:"In the scenario that extreme volatility leads to the spread between the spot price and average oracle price of an asset being greater than 1%, liquidity addition or withdrawal for that asset will be temporarily paused. These operations will again resume once this threshold is respected."}),"\n",(0,a.jsx)(t.h3,{id:"trade-limits",children:"In-block Trade Limits"}),"\n",(0,a.jsx)(t.p,{children:"To protect the Omnipool against economic exploits, there is a limit in place that no more than 50% of an asset's liquidity can be traded in a single block - trades that are greater than this amount should be spread across multiple blocks."}),"\n",(0,a.jsx)(t.h3,{id:"tfp",children:"Targeted Function Pausing"}),"\n",(0,a.jsx)(t.p,{children:"If some suspicious behaviour is detected on-chain, Targeted Function Pausing allows the HydraDX Technical Committee to take swift action and temporarily pause certain or all actions relating to specific assets. This action of last resort can help mitigate the damage and allow for further investigation."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>r});var a=i(6540);const o={},s=a.createContext(o);function n(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);