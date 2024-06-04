"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[1771],{1256:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=i(4848),n=i(8453),r=i(6025);const o={id:"lbp",title:"Liquidity bootstrapping (LBP)"},a=void 0,l={id:"lbp",title:"Liquidity bootstrapping (LBP)",description:"LBP (Liquidity Bootstrapping Pool) is a permissionless Automated Market Maker (AMM) built for the Polkadot ecosystem. Its aim is to empower young crypto projects by allowing them to bootstrap liquidity and navigate initial price discovery while performing a fair distribution of tokens to their communities. Another possible use of LBP is to conduct bond campaigns which allow the Protocol to acquire Protocol-owned liquidity (POL).",source:"@site/docs/lbp.md",sourceDirName:".",slug:"/lbp",permalink:"/de/lbp",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/lbp.md",tags:[],version:"current",frontMatter:{id:"lbp",title:"Liquidity bootstrapping (LBP)"},sidebar:"sidebar",previous:{title:"Bonds",permalink:"/de/bonds"},next:{title:"Fees",permalink:"/de/fees"}},h={},d=[{value:"Overview of General LBP Trajectory",id:"overview-of-general-lbp-trajectory",level:2},{value:"<strong>At Start</strong>",id:"at-start",level:3},{value:"During the LBP Event",id:"during-the-lbp-event",level:3},{value:"Model Scenario Examples (illustrative)",id:"model-scenario-examples-illustrative",level:2},{value:"Chart 1: If nobody buys",id:"chart-1-if-nobody-buys",level:3},{value:"Chart 2: If someone buys (with small bids)",id:"chart-2-if-someone-buys-with-small-bids",level:3},{value:"Chart 3: If someone buys (with a large bid)",id:"chart-3-if-someone-buys-with-a-large-bid",level:3},{value:"Chart 4: If someone buys (with a large bid at the end)",id:"chart-4-if-someone-buys-with-a-large-bid-at-the-end",level:3},{value:"Real-world LBP <strong>Examples</strong>",id:"real-world-lbp-examples",level:2},{value:"Exhibit A",id:"exhibit-a",level:3},{value:"Exhibit B",id:"exhibit-b",level:3},{value:"Exhibit C: HydraDX LBP",id:"exhibit-c-hydradx-lbp",level:3}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"LBP"})," (Liquidity Bootstrapping Pool) is a ",(0,s.jsx)(t.strong,{children:"permissionless Automated Market Maker (AMM)"})," built for the Polkadot ecosystem. Its aim is to ",(0,s.jsx)(t.strong,{children:"empower young crypto projects"})," by allowing them to ",(0,s.jsx)(t.strong,{children:"bootstrap liquidity"})," and ",(0,s.jsx)(t.strong,{children:"navigate initial price discovery"})," while performing a ",(0,s.jsx)(t.strong,{children:"fair distribution of tokens to their communities"}),". Another possible use of LBP is to conduct bond campaigns which allow the Protocol to acquire Protocol-owned liquidity (POL)."]}),"\n",(0,s.jsxs)(t.p,{children:["An LBP uses a ",(0,s.jsx)(t.strong,{children:"mechanism of time-based weights shifting"})," which exerts a ",(0,s.jsx)(t.strong,{children:"continuous downward pressure"})," on the price. This is being ",(0,s.jsx)(t.strong,{children:"counteracted by any buy orders"}),"  that change the amount of tokens in the pool and drive the price up."]}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.p,{children:"The information in this article is for illustrative purposes only. Every LBP is different and it is impossible to predict in advance how the price will develop."}),(0,s.jsx)(t.p,{children:"The starting price of the LBP, its weights settings and the overall general interest in the project raising liquidity are all factors which will affect the price navigation during LBP."}),(0,s.jsx)(t.p,{children:"Do your own research before aping!"})]}),"\n",(0,s.jsx)(t.h2,{id:"overview-of-general-lbp-trajectory",children:"Overview of General LBP Trajectory"}),"\n",(0,s.jsx)(t.h3,{id:"at-start",children:(0,s.jsx)(t.strong,{children:"At Start"})}),"\n",(0,s.jsx)(t.p,{children:"An LBP event begins with a predefined starting price. Projects can decide to set an unrealistically high price and let the weights push it down, but this is not necessarily always the case. You should DYOR with regard to the starting price."}),"\n",(0,s.jsx)(t.p,{children:"If the starting price is (many times higher) than the expected valuation, it may not be wise to buy at the very beginning of the LBP event."}),"\n",(0,s.jsx)(t.h3,{id:"during-the-lbp-event",children:"During the LBP Event"}),"\n",(0,s.jsx)(t.p,{children:"Every LBP event is set to run for a specific amount of time (usually 3-5 days). Through the pre-programmed changing of the token weights in the pool, a downward price pressure will begin to be exerted during the course of the LBP event. This programmed decline will have its highest downward pressure at the beginning periods of the LBP. This is because when the token weight ratio changes from, say, 90-10 to 89-11, that is a 10% increase in supply of the latter asset vs if the weighting changes from 60-40 to 59-41, which is a 2.5% increase in supply."}),"\n",(0,s.jsx)(t.p,{children:"As such, this programmed downward pressure allows participants to enter once price reaches what they deem a reasonable level. When participants begin to buy from the LBP, this will change the expected price trajectory because this will change the ratio between the two tokens. In addition, the size and timing of the buy order also affects how large the price impact will be. Placing a very large order will drive the price up (a lot), meaning that splitting orders into smaller chuncks may be a good idea."}),"\n",(0,s.jsx)(t.p,{children:"Eventually, as the downward pressure decreases, the buy pressure from participants will overcome the further downward pressure (supply) programmed and prices will begin to rise. At this time, some participants may also sell back their acquired tokens to the LBP. This would also change the expected price trajectory of the LBP."}),"\n",(0,s.jsx)(t.h2,{id:"model-scenario-examples-illustrative",children:"Model Scenario Examples (illustrative)"}),"\n",(0,s.jsx)(t.p,{children:"Let\u2019s take a look at how the LBP price trajectory may change based on user actions. Please note that the examples and prices below are for illustrative purposes only."}),"\n",(0,s.jsx)(t.h3,{id:"chart-1-if-nobody-buys",children:"Chart 1: If nobody buys"}),"\n",(0,s.jsx)(t.p,{children:"If nobody buys, the price will continually decline based on a similar curve displayed below:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{alt:"lbp",src:(0,r.A)("/lbp/model_1.jpg"),width:"600px"})}),"\n",(0,s.jsx)(t.h3,{id:"chart-2-if-someone-buys-with-small-bids",children:"Chart 2: If someone buys (with small bids)"}),"\n",(0,s.jsx)(t.p,{children:"In case of a small but consistent buy pressure just above the $0.01 mark, the curve would look something like this:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{alt:"lbp",src:(0,r.A)("/lbp/model_2.jpg"),width:"600px"})}),"\n",(0,s.jsx)(t.h3,{id:"chart-3-if-someone-buys-with-a-large-bid",children:"Chart 3: If someone buys (with a large bid)"}),"\n",(0,s.jsx)(t.p,{children:"If someone buys 1/4 of all tokens at the price of $0.005, and nobody else buys or sells, the curve would look like this:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{alt:"lbp",src:(0,r.A)("/lbp/model_3.jpg"),width:"600px"})}),"\n",(0,s.jsx)(t.h3,{id:"chart-4-if-someone-buys-with-a-large-bid-at-the-end",children:"Chart 4: If someone buys (with a large bid at the end)"}),"\n",(0,s.jsx)(t.p,{children:"In cases of large buy orders towards the end of the LBP event, the price may pump significantly. This is because at the end of the LBP, the downward pressure from the weights is very small while the effect of large buy orders is relatively bigger:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{alt:"lbp",src:(0,r.A)("/lbp/model_4.jpg"),width:"600px"})}),"\n",(0,s.jsxs)(t.h2,{id:"real-world-lbp-examples",children:["Real-world LBP ",(0,s.jsx)(t.strong,{children:"Examples"})]}),"\n",(0,s.jsx)(t.p,{children:"The abstract model scenarios above should shed some light on the interaction between user orders and the shifting weights."}),"\n",(0,s.jsx)(t.p,{children:"Now let's take a look at several real-world examples of an LBP:"}),"\n",(0,s.jsx)(t.h3,{id:"exhibit-a",children:"Exhibit A"}),"\n",(0,s.jsx)(t.p,{children:"Price was initially sniped by bots/whales and pumped significantly over the initial price. This was eventually counteracted by the reweighting over time and demand picking up once a more reasonable price was reached."}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{alt:"lbp",src:(0,r.A)("/lbp/exhibit_a.jpg"),width:"600px"})}),"\n",(0,s.jsx)(t.h3,{id:"exhibit-b",children:"Exhibit B"}),"\n",(0,s.jsx)(t.p,{children:"Initial price was not sniped and allowed to fall before the significant demand from buyers pushed up prices materially. Buyers still had a good window of opportunity to enter in on acceptable prices given the duration of the LBP."}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{alt:"lbp",src:(0,r.A)("/lbp/exhibit_b.jpg"),width:"600px"})}),"\n",(0,s.jsx)(t.h3,{id:"exhibit-c-hydradx-lbp",children:"Exhibit C: HydraDX LBP"}),"\n",(0,s.jsxs)(t.p,{children:["Finally, you can take a look at our ",(0,s.jsx)(t.a,{href:"https://hydradx.substack.com/p/lbp-analysis",children:"analysis of the HydraDX LBP"})," back in February 2021 which helped HydraDX raise 22.9M DAI to become one of the most successful LBPs ever conducted."]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{alt:"lbp",src:(0,r.A)("/lbp/exhibit_c.jpg"),width:"600px"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(6540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);