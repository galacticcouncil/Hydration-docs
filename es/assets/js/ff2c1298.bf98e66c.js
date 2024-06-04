"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[1752],{2290:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(4848),r=i(8453);i(6025);const o={id:"learn_amm",title:"What are AMMs?"},s=void 0,a={id:"learn_amm",title:"What are AMMs?",description:"This article provides an introduction to Automated Market Makers (AMMs) together with some of their underpinning concepts such as slippage, liquidity provisioning and impermanent loss.",source:"@site/docs/learn_amm.md",sourceDirName:".",slug:"/learn_amm",permalink:"/es/learn_amm",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/learn_amm.md",tags:[],version:"current",frontMatter:{id:"learn_amm",title:"What are AMMs?"},sidebar:"sidebar",previous:{title:"Conectarse a un nodo p\xfablico",permalink:"/es/polkadotjs_apps_public"},next:{title:"Introducci\xf3n",permalink:"/es/democracy_intro"}},d={},l=[{value:"A Short Intro into AMMs",id:"a-short-intro-into-amms",level:2},{value:"Order Books",id:"order-books",level:3},{value:"AMMs",id:"amms",level:3},{value:"Slippage",id:"slippage",level:2},{value:"Providing Liquidity",id:"lp",level:2},{value:"Impermanent Loss (IL)",id:"impermanent-loss",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This article provides an introduction to Automated Market Makers (AMMs) together with some of their underpinning concepts such as ",(0,n.jsx)(t.a,{href:"#slippage",children:"slippage"}),", ",(0,n.jsx)(t.a,{href:"#lp",children:"liquidity provisioning"})," and ",(0,n.jsx)(t.a,{href:"#impermanent-loss",children:"impermanent loss"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This introductory information will help you understand better the mechanics behind the HydraDX Omnipool which you can find described in our ",(0,n.jsx)(t.a,{href:"/",children:"product documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"a-short-intro-into-amms",children:"A Short Intro into AMMs"}),"\n",(0,n.jsx)(t.p,{children:"To explain Automated Market Makers (AMMs) and how they work, we can contrast them to their centralized counterpart: Order books."}),"\n",(0,n.jsx)(t.h3,{id:"order-books",children:"Order Books"}),"\n",(0,n.jsx)(t.p,{children:"Order books provide a mechanism which is deployed by centralized exchanges to facilitate trading between two assets. Users can place a Buy or Sell order in an electronic list managed by the exchange. The orders in this so-called Order Book are organized by price level and progressively filled as demand shifts and orders are being matched. The limitations of order books become apparent against the background of their centralized nature."}),"\n",(0,n.jsx)(t.p,{children:"The need for an intermediary to \u201ckeep\u201d the order book and to facilitate the process of order matching creates a dependency on a central authority. This central authority has control over the trading and needs to be trusted by the participants. In times of substantial volume traffic and volatility, the central authority can decide to halt trading and stop performing its market-making function. Furthermore, the process of adding new tradable assets is permissioned and projects may need to pay in advance to get their assets listed."}),"\n",(0,n.jsx)(t.h3,{id:"amms",children:"AMMs"}),"\n",(0,n.jsx)(t.p,{children:"Automated Market Makers (AMMs) is the answer by the DeFi industry to order books. AMMs provide a decentralized, permissionless way of trading tokens without the need to subdue oneself to a central authority of control."}),"\n",(0,n.jsx)(t.p,{children:"AMMs consist of liquidity pools that hold the available liquidity of the underlying tradable assets. This liquidity is provided by users (the so-called \u201cliquidity providers\u201d) who are incentivized to do so by the prospect of earning rewards from the fees generated by trades in the pool."}),"\n",(0,n.jsx)(t.p,{children:"In the case of AMMs, any user can execute a Buy or Sell order on top of a given trading pool. The price of the trade is determined on the spot by a deterministic algorithm which takes as input the relationship between the liquidity of the traded assets, together with other factors which depend on the particular AMM implementation."}),"\n",(0,n.jsx)(t.h2,{id:"slippage",children:"Slippage"}),"\n",(0,n.jsxs)(t.p,{children:["When a trade is executed, users may experience a common side-effect of AMMs known as ",(0,n.jsx)(t.code,{children:"slippage"}),". This is the difference between the expected price of a trade and the price when the trade is actually executed."]}),"\n",(0,n.jsx)(t.p,{children:"Slippage is determined by the amount of liquidity available within the trading pool. If there is a low amount of liquidity provided for the asset, then the slippage percentage when transacting with big orders will be higher."}),"\n",(0,n.jsx)(t.h2,{id:"lp",children:"Providing Liquidity"}),"\n",(0,n.jsx)(t.p,{children:"Thanks to the decentralized nature of an AMM, anyone can become a liquidity provider (LP) for a liquidity pool by depositing some amount of value in return for a token representing their liquidity position."}),"\n",(0,n.jsx)(t.p,{children:"LPs are rewarded with fees for providing this liquidity based on the trading activity experienced by the asset for which they have provided liquidity."}),"\n",(0,n.jsx)(t.h2,{id:"impermanent-loss",children:"Impermanent Loss (IL)"}),"\n",(0,n.jsx)(t.p,{children:"Impermanent loss (IL) is a risk faced by liquidity providers which embodies the difference in value between holding tokens in an AMM as opposed to holding them in your wallet."}),"\n",(0,n.jsx)(t.p,{children:"Liquidity pools consist of multiple tokens (usually two) which are pooled together. IL occurs when the tokens inside the pool diverge in price. The greater the divergence, the greater the risk of negative returns for the pool's LPs."}),"\n",(0,n.jsxs)(t.p,{children:['The risk is referred to as "impermanent" because the loss is only realized when liquidity is withdrawn from the pool. If the relative prices of tokens in the pool return to their original state (when the tokens were deposited), the loss is minimized or eliminated. The loss will become ',(0,n.jsx)(t.em,{children:"permanent"})," at the moment when the liquidity is withdrawn, leading to reduced earnings."]}),"\n",(0,n.jsx)(t.p,{children:"As such, LPs need to weigh the fees and rewards earned from LPing versus simply holding their tokens in their wallets."})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);