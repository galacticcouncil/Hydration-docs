"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[5965],{9622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=n(4848),o=n(8453),r=n(6025);const a={id:"democracy_referenda",title:"Referenda"},s=void 0,d={id:"democracy_referenda",title:"Referenda",description:"Referenda allow stakeholders to put a proposal to a weighted, stake-based vote by the wider community. The object of the referendum is some suggested action which affects the protocol - for example, a Treasury payout, or even a change in the runtime code.",source:"@site/docs/democracy_referenda.md",sourceDirName:".",slug:"/democracy_referenda",permalink:"/democracy_referenda",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/democracy_referenda.md",tags:[],version:"current",frontMatter:{id:"democracy_referenda",title:"Referenda"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/democracy_intro"},next:{title:"HydraDX Council",permalink:"/democracy_council"}},c={},l=[{value:"Initiating a Referendum",id:"referenda-initiate",level:2},{value:"Public Referendum",id:"referenda-initiate-public",level:3},{value:"Council Referendum",id:"referenda-initiate-council",level:3},{value:"Emergency Proposals by the Technical Committee",id:"referenda-initiate-tech-committee",level:3},{value:"Canceling a Referendum",id:"cancel",level:3},{value:"Voting in a Referendum",id:"referenda-vote",level:2},{value:"Votes Weighing",id:"referenda-votes-weighing",level:3},{value:"Voting Modes",id:"referenda-voting-modes",level:3},{value:"Positive Turnout Bias",id:"positive-turnout-bias",level:4},{value:"Negative Turnout Bias",id:"negative-turnout-bias",level:4},{value:"Simple Majority",id:"simple-majority",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Referenda allow stakeholders to put a proposal to a weighted, stake-based vote by the wider community. The object of the referendum is some suggested action which affects the protocol - for example, a Treasury payout, or even a change in the runtime code."}),"\n",(0,i.jsxs)(t.p,{children:["Generally speaking, only one referendum is brought to a vote at a time. Other pending referendum proposals are put in a queue. There are separate queues for publicly submitted proposals and for Council proposals. Every 3 days, the referendum mechanism picks the top proposal with the highest amount of support, alternating between the two queues. After a referendum has been voted upon and accepted, there is a so-called ",(0,i.jsx)(t.em,{children:"enactment delay"})," period of 3 days which needs to pass before the decision is put into effect. An exception to these rules applies for emergency proposals by the Technical Committee which deal with major protocol problems and need to be fast-tracked."]}),"\n",(0,i.jsx)(t.h2,{id:"referenda-initiate",children:"Initiating a Referendum"}),"\n",(0,i.jsx)(t.p,{children:"There are multiple ways to initiate a referendum which are described in greater detail below. The way the referendum was initiated is decisive for the applicable voting mode."}),"\n",(0,i.jsx)(t.h3,{id:"referenda-initiate-public",children:"Public Referendum"}),"\n",(0,i.jsxs)(t.p,{children:["Any holder of HDX tokens can ",(0,i.jsx)(t.a,{href:"/participate_in_referenda",children:"propose a referendum"})," by depositing the minimum required amount of HDX tokens and submitting the proposal on-chain. Other community members can ",(0,i.jsxs)(t.a,{href:"/participate_in_referenda",children:["support (",(0,i.jsx)(t.em,{children:"second"}),") the proposal"]})," for a referendum by locking up an equal amount of tokens. At the beginning of every voting cycle, the referendum proposal with the highest amount of ",(0,i.jsx)(t.em,{children:"seconding"})," (total deposited tokens) is advanced to a vote by the community."]}),"\n",(0,i.jsxs)(t.p,{children:["The voting mode which applies to public referenda is ",(0,i.jsx)(t.a,{href:"#referenda-voting-modes",children:"Positive Turnout Bias"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"All HDX tokens which are deposited to propose or second a referendum are locked up for the whole period until the referendum has entered the voting cycle. It is important to remember that there is no guarantee that any given proposal will ever receive sufficient backing to move into the voting round, meaning that your funds might remain locked for an indefinite period."})}),"\n",(0,i.jsx)(t.h3,{id:"referenda-initiate-council",children:"Council Referendum"}),"\n",(0,i.jsxs)(t.p,{children:["The HydraDX Council has the powers to propose a referendum for a community vote. If it does so unanimously, the applicable voting mode for the referendum is ",(0,i.jsx)(t.a,{href:"#referenda-voting-modes",children:"Negative Turnout Bias"}),". If the referendum is proposed with a simple majority of the Council votes, then the voting mode for accepting the proposals by the community is ",(0,i.jsx)(t.a,{href:"#referenda-voting-modes",children:"Simple Majority"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"referenda-initiate-tech-committee",children:"Emergency Proposals by the Technical Committee"}),"\n",(0,i.jsx)(t.p,{children:"The Technical Committee can submit emergency proposals which deal with (critical) bug fixes or the quick adoption of battle-tested functionality. Emergency proposals skip the waiting queue and enter the voting round directly. The community can vote on emergency proposals in parallel to any regular proposal which has entered the voting round. Furthermore, emergency proposals have a shorter voting period to ensure that they can be fast-tracked."}),"\n",(0,i.jsx)(t.h3,{id:"cancel",children:"Canceling a Referendum"}),"\n",(0,i.jsxs)(t.p,{children:["Once a referendum has been proposed, it cannot be revoked until it has entered the voting round. An exception to this rule is made for proposals which are deemed detrimental to the protocol (e.g. code changes introducing a bug). In this limited case, the referendum proposal can be cancelled by the ",(0,i.jsx)(t.a,{href:"/democracy_council",children:"HydraDX Council"})," (with a 60% super-majority) or the ",(0,i.jsx)(t.a,{href:"/democracy_technical_committee",children:"Technical Committee"})," (unanimously). All tokens wich were locked by supporters seconding the proposal are burned."]}),"\n",(0,i.jsx)(t.h2,{id:"referenda-vote",children:"Voting in a Referendum"}),"\n",(0,i.jsx)(t.p,{children:"HydraDX referenda have a launch period of 3 days. At the beginning of every new period, the proposal with the highest amount of seconding is taken from the waiting queue and put into a voting round. Every voting round has a duration of 3 days. During this period, community members can vote on the referendum using a weighted, stake-base mechanism. They do so by locking up a certain amount of HDX tokens for a given timeframe."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Locked HDX tokens cannot be transferred for the duration of the chosen lock period. However, they can still be used for voting."})}),"\n",(0,i.jsx)(t.h3,{id:"referenda-votes-weighing",children:"Votes Weighing"}),"\n",(0,i.jsxs)(t.p,{children:["There are two factors which determine the weight of each vote in a referendum. The first factor is the ",(0,i.jsx)(t.strong,{children:"amount of HDX tokens"})," which the voter locks up in support of the vote. The second factor is the so-called ",(0,i.jsx)(t.strong,{children:"conviction multiplier"})," which reflects the duration for which the voter is willing to lock up the tokens."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"vote_weight = tokens * conviction_multiplier\n"})}),"\n",(0,i.jsx)(t.p,{children:"The table below contains an overview of the various Conviction Multipliers and the amount of days the tokens will be locked up for. It is possible to bring out a vote without locking your HDX, however its weight would be only a fraction (conviction multiplier of 0.1x). As shown in the table below, locking the tokens for the maximum of 192d would raise the conviction multiplier to 6x."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Conviction Multiplier"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Days Locked"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.1x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0d"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"6d"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"12d"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"24d"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"48d"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"96d"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"6x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"192d"})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"An example:\n\nAlice votes with 5000 HDX and 0.1x Conviction Multiplier.\nBob votes with 100 HDX and 6x Conviction Multiplier.\n\nWeight Alice: 500\nWeight Bob: 600\n\nToken lock Alice: 0 days\nToken lock Bob: 192 days\n"})}),"\n",(0,i.jsx)(t.h3,{id:"referenda-voting-modes",children:"Voting Modes"}),"\n",(0,i.jsx)(t.p,{children:"Another important aspect of the democracy module are the different voting modes which apply. The threshold of votes needed for approving or rejecting a referendum can vary depending on how the referendum was initiated and on the turnout of the vote. The turnout is calculated based on the total amount of HDX tokens which were used to vote in the referendum (conviction multipliers excluded). Whether the turnout was low or not is determined by the relationship between the turnout and the elactorate (i.e. the total amount of HDX tokens eligible to vote)."}),"\n",(0,i.jsx)(t.h4,{id:"positive-turnout-bias",children:"Positive Turnout Bias"}),"\n",(0,i.jsxs)(t.p,{children:["This is the default voting mode when a referendum is proposed by the Community. At lower turnouts, a qualified super-majority of ",(0,i.jsx)(t.code,{children:"yes"})," votes is required in order to approve the referendum. As the turnout grows, the threshold decreases towards a simple majority."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,r.A)("/democracy/positive-turnout-bias.png"),width:"300px"})}),"\n",(0,i.jsx)(t.h4,{id:"negative-turnout-bias",children:"Negative Turnout Bias"}),"\n",(0,i.jsxs)(t.p,{children:["This voting mode applies to referenda which have been proposed by the Council unanimously. Such proposals require a qualified super-majority of ",(0,i.jsx)(t.code,{children:"no"})," votes to be rejected at low turnouts. As the turnout grows, the threshold for rejecting the referendum decreases towards a simple majority."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,r.A)("/democracy/negative-turnout-bias.png"),width:"280px"})}),"\n",(0,i.jsx)(t.h4,{id:"simple-majority",children:"Simple Majority"}),"\n",(0,i.jsx)(t.p,{children:"Referenda which were initiated by the Council with majority agreement (i.e. not unanimously) can be accepted by the community with a simple majority of the votes (50% + 1)."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,r.A)("/democracy/simple-majority.png"),width:"200px"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(6540);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);