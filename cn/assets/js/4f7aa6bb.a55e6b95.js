"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[5868],{7476:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var t=i(4848),s=i(8453),r=i(6025);const d={id:"identity",title:"\u8bbe\u7f6e\u60a8\u7684\u8eab\u4efd"},c=void 0,l={id:"identity",title:"\u8bbe\u7f6e\u60a8\u7684\u8eab\u4efd",description:"\u5e10\u6237\u6301\u6709\u4eba\uff0c\u53ef\u901a\u8fc7\u63d0\u4f9b\u7279\u5b9a\u4fe1\u606f\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u94fe\u4e0a\u6765\u8bbe\u7f6e\u8eab\u4efd\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u8eab\u4efd\u4fe1\u606f\u8fd8\u53ef\u4ee5\u63d0\u4ea4\u7ed9 HydraDX \u6ce8\u518c\u5546\u8fdb\u884c\u8ba4\u8bc1\u3002\u901a\u8fc7\u8bbe\u7f6e\u5e76\u8ba4\u8bc1\u8eab\u4efd\uff0c\u6709\u52a9\u4e8e\u9a8c\u8bc1\u4eba\u53ca\u63d0\u540d\u4eba\u4fdd\u62a4\u5176\u7f51\u7edc\u4fe1\u7528\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/identity.md",sourceDirName:".",slug:"/identity",permalink:"/cn/identity",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/identity.md",tags:[],version:"current",frontMatter:{id:"identity",title:"\u8bbe\u7f6e\u60a8\u7684\u8eab\u4efd"},sidebar:"sidebar",previous:{title:"\u7533\u9886\u60a8\u7684 HDX",permalink:"/cn/claim"},next:{title:"\u8fde\u63a5\u5230\u672c\u5730\u8282\u70b9",permalink:"/cn/polkadotjs_apps_local"}},o={},a=[{value:"01 \u8bbe\u7f6e\u8eab\u4efd",id:"01-set-identity",level:2},{value:"02 \u63d0\u4ea4\u8eab\u4efd\u8bc1\u660e",id:"02-verify-identity",level:2},{value:"03 \u8ba4\u8bc1\u7ed3\u679c",id:"03-verification-outcome",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"\u5e10\u6237\u6301\u6709\u4eba\uff0c\u53ef\u901a\u8fc7\u63d0\u4f9b\u7279\u5b9a\u4fe1\u606f\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u94fe\u4e0a\u6765\u8bbe\u7f6e\u8eab\u4efd\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u8eab\u4efd\u4fe1\u606f\u8fd8\u53ef\u4ee5\u63d0\u4ea4\u7ed9 HydraDX \u6ce8\u518c\u5546\u8fdb\u884c\u8ba4\u8bc1\u3002\u901a\u8fc7\u8bbe\u7f6e\u5e76\u8ba4\u8bc1\u8eab\u4efd\uff0c\u6709\u52a9\u4e8e\u9a8c\u8bc1\u4eba\u53ca\u63d0\u540d\u4eba\u4fdd\u62a4\u5176\u7f51\u7edc\u4fe1\u7528\u3002"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u662f HydraDX \u6574\u7406\u4eba\uff0c\u6211\u4eec ",(0,t.jsx)(e.strong,{children:"\u5f3a\u70c8\u5efa\u8bae"})," \u60a8\u8bbe\u7f6e\u8eab\u4efd\u5e76\u901a\u8fc7\u8ba4\u8bc1\u7a0b\u5e8f\u3002\u7ecf\u8fc7\u8ba4\u8bc1\u7684\u6574\u7406\u4eba\u4f3c\u4e4e\u66f4\u503c\u5f97\u4fe1\u4efb\u3002"]})}),"\n",(0,t.jsx)(e.h2,{id:"01-set-identity",children:"01 \u8bbe\u7f6e\u8eab\u4efd"}),"\n",(0,t.jsxs)(e.p,{children:["\u8981\u8bbe\u7f6e\u8eab\u4efd\uff0c\u8bf7\u6253\u5f00 Polkadot/apps\uff08\u8fde\u63a5\u5230 ",(0,t.jsx)(e.em,{children:"HydraDX"})," \u7f51\u7edc\uff09\uff0c\u7136\u540e\u5bfc\u822a\u5230 ",(0,t.jsx)(e.em,{children:"My accounts"})," \uff08\u6211\u7684\u8d26\u6237\uff09\u3002\u6216\u8005\uff0c\u76f4\u63a5\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5\uff1a\n",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts",children:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts"})})]}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u5e10\u6237\u9875\u9762\uff0c\u627e\u5230\u6301\u6709\u60a8 HDX \u4ee4\u724c\u7684\u5e10\u6237\u3002\u7136\u540e\uff0c\u70b9\u51fb\u5e10\u53f7\u65c1\u8fb9\u7684\u4e09\u4e2a\u70b9\uff08\u5728\u53f3\u4fa7\uff09\uff0c\u5e76\u9009\u62e9 ",(0,t.jsx)(e.em,{children:"Set on-chain identity"})," \uff08\u8bbe\u7f6e\u94fe\u4e0a\u8eab\u4efd\uff09\u3002"]}),"\n",(0,t.jsx)("img",{alt:"authorize",src:(0,r.A)("/identity/set-identity-1.jpg")}),"\n",(0,t.jsxs)(e.p,{children:["\u60a8\u5c06\u770b\u5230\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(e.em,{children:"register identity"}),"\uff08\u6ce8\u518c\u8eab\u4efd\uff09\u7684\u5f39\u7a97\u3002\u5728\u8fd9\u91cc\uff0c\u60a8\u53ef\u4ee5\u8f93\u5165\u4ee5\u4e0b\u4fe1\u606f\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"legal name\uff08\u6cd5\u5b9a\u540d\u79f0\uff09\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"email\uff08\u90ae\u4ef6\uff09\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"web\uff08\u7f51\u7edc\uff09\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"twitter\uff08\u63a8\u7279\uff09\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"riot name\uff08roit \u59d3\u540d\uff09\uff08\u5982\u679c\u4f7f\u7528 Matrix \u4fe1\u606f\uff09\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"\u6240\u6709\u8fd9\u4e9b\u4fe1\u606f\u90fd\u662f\u53ef\u9009\u7684\uff0c\u60a8\u53ef\u4ee5\u6709\u9009\u62e9\u5730\u63d0\u4f9b\u3002\u4f46\u662f\uff0c\u5982\u679c\u60a8\u6b63\u5728\u8fd0\u884c\u6574\u7406\u5668\u8282\u70b9\uff0c\u5efa\u8bae\u60a8\u8bbe\u7f6e\u7535\u5b50\u90ae\u4ef6\uff0c\u4ee5\u4fbf\u5728\u60a8\u7684\u8282\u70b9\u9047\u5230\u95ee\u9898\u65f6\uff0c\u65b9\u4fbf\u548c\u60a8\u8054\u7cfb\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u5f39\u51fa\u7a97\u53e3\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u9700\u5b58\u5165\u7684 HDX \u6570\u91cf\uff0c\u4f5c\u4e3a\u5b58\u50a8\u60a8\u8eab\u4efd\u4fe1\u606f\u7684\u4fdd\u8bc1\u91d1\u3002\u4ee5\u540e\uff0c\u4e00\u65e6\u51b3\u5b9a\u6e05\u9664\u8eab\u4efd\u4fe1\u606f\uff0c\u60a8\u4f1a\u6536\u56de\u8fd9\u7b14\u4fdd\u8bc1\u91d1\u3002"}),"\n",(0,t.jsx)("img",{alt:"authorize",src:(0,r.A)("/identity/set-identity-2.jpg")}),"\n",(0,t.jsxs)(e.p,{children:["\u586b\u5199\u5b8c\u4fe1\u606f\u540e\uff0c\u5355\u51fb ",(0,t.jsx)(e.code,{children:"Set Identity"}),"\uff08\u8bbe\u7f6e\u8eab\u4efd\uff09\uff0c\u5e76\u4f7f\u7528 Polkadot.js \u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5e8f\u5bf9\u4ea4\u6613\u8fdb\u884c\u7b7e\u540d\u3002\u4e00\u65e6\u786e\u8ba4\u4e86\u4ea4\u6613\uff0c\u60a8\u7684\u8eab\u4efd\u5c31\u8bbe\u7f6e\u597d\u4e86\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"02-verify-identity",children:"02 \u63d0\u4ea4\u8eab\u4efd\u8bc1\u660e"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u60a8\u8bbe\u7f6e\u597d\u8eab\u4efd\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u5b83\u63d0\u4ea4\u7ed9\u7f51\u7edc\u6ce8\u518c\u5546\u8fdb\u884c\u8ba4\u8bc1\u3002\u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u8bf7\u6253\u5f00 Polkadot/apps \u5e76\u5bfc\u822a\u5230 ",(0,t.jsx)(e.em,{children:"Developer"}),"\uff08\u5f00\u53d1\u8005\uff09> ",(0,t.jsx)(e.em,{children:"Extrinsics"}),"\uff08\u4ea4\u6613\uff09\u3002\u6216\u8005\uff0c\u76f4\u63a5\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5\uff1a\n",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics",children:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics"})})]}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u4e0a\u4e00\u6b65\u9009\u62e9\u76f8\u5e94 HydraDX \u5e10\u6237\u540e\uff0c\u60a8\u9700\u8981\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"submit the following extrinsic"}),"\uff08\u63d0\u4ea4\u4e0b\u9762\u7684\u5916\u90e8\u4fe1\u606f\uff09\uff1a \u5de6\u8fb9\u9009 ",(0,t.jsx)(e.em,{children:"identity"}),"\uff08\u8eab\u4efd\uff09\uff1b\u4e2d\u95f4\u9009 ",(0,t.jsx)(e.em,{children:"requestJudgement(reg_index, max_fee)"}),"\uff08\u8bf7\u6c42\u5224\u5b9a\uff09\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"regindex"}),"\uff08\u6ce8\u518c\u5546 ID\uff09: \u5728\u8fd9\u91cc\u9700\u8981\u8f93\u5165\u60a8\u9009\u62e9\u7684\u6ce8\u518c\u5546 ID \u8fdb\u884c\u9a8c\u8bc1\u3002\nHydraDX \u6709\u4e24\u4e2a\u6ce8\u518c\u5546\uff1aSimon Kraus - HydraSik\uff08ID: ",(0,t.jsx)(e.strong,{children:"0"}),"\uff09\u3001Jimmy Tudeski - stakenode \uff08ID: ",(0,t.jsx)(e.strong,{children:"1"}),"\uff09"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"maxFee"}),"\uff08\u6700\u5927\u8d39\u7528\uff09\uff1a\u5728\u8fd9\u91cc\u9700\u8981\u8f93\u5165\u60a8\u613f\u610f\u7528 HDX \u652f\u4ed8\u7ed9\u6ce8\u518c\u5546\u7684\u6700\u9ad8\u8d39\u7528\u3002\u8d39\u7528\u53ea\u6709\u4f4e\u4e8e\u60a8\u652f\u4ed8\u6700\u9ad8\u8d39\u7528\u7684\u6ce8\u518c\u5546\uff0c\u624d\u6709\u8d44\u683c\u4e3a\u60a8\u8ba4\u8bc1\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u82e5\u8981\u63d0\u4ea4\u8ba4\u8bc1\u8bf7\u6c42\uff0c\u8bf7\u5355\u51fb ",(0,t.jsx)(e.code,{children:"Submit Transaction"}),"\uff08\u63d0\u4ea4\u4ea4\u6613\uff09\u5e76\u7b7e\u7f72\u4ea4\u6613\u3002"]}),"\n",(0,t.jsx)("img",{alt:"authorize",src:(0,r.A)("/identity/set-identity-3.jpg")}),"\n",(0,t.jsxs)(e.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u8eab\u4efd\u8ba4\u8bc1\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u3002\u8981\u67e5\u770b\u60a8\u7684\u8bf7\u6c42\u72b6\u6001\uff0c\u5bfc\u822a\u5230 ",(0,t.jsx)(e.strong,{children:"My accounts"}),"\uff08\u6211\u7684\u8d26\u6237\uff09\u5e76\u5c06\u9f20\u6807\u505c\u5728\u663e\u793a\u60a8\u8eab\u4efd\u7684\u90e8\u5206\uff0c\u60a8\u5c06\u770b\u5230\u4e00\u4e2a\u663e\u793a\u5f53\u524d\u72b6\u6001\u7684\u5f39\u51fa\u6846\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"03-verification-outcome",children:"03 \u8ba4\u8bc1\u7ed3\u679c"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u5904\u7406\u60a8\u7684\u8ba4\u8bc1\u8bf7\u6c42\u540e\uff0c\u6ce8\u518c\u5546\u5c06\u63d0\u4ea4\u4ee5\u4e0b\u5176\u4e2d\u4e00\u9879\u5224\u65ad\uff0c\u8be5\u5224\u65ad\u5c06\u5728\u60a8\u7684\u8eab\u4efd\u72b6\u6001\u4e2d\u663e\u793a\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Unknown"})," - \u9ed8\u8ba4\u503c\uff0c\u5c1a\u672a\u5f00\u59cb\uff1b"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Reasonable"})," - \u63d0\u4f9b\u7684\u8d44\u6599\u770b\u8d77\u6765\u5408\u7406\uff0c\u4f46\u8fd8\u6ca1\u8fdb\u884c\u6df1\u5165\u68c0\u67e5\uff1b"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"KnownGood"})," - \u4fe1\u606f\u6b63\u786e\uff1b"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"OutOfDate"})," - \u4fe1\u606f\u8fc7\u53bb\u662f\u6b63\u786e\u7684\uff0c\u73b0\u5728\u5df2\u8fc7\u65f6\uff1b"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"LowQuality"})," - \u4fe1\u606f\u4e0d\u51c6\u786e\uff0c\u4f46\u53ef\u901a\u8fc7\u4fee\u6539\u8fdb\u884c\u66f4\u6b63\uff1b"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Erroneous"})," - \u63d0\u4f9b\u4fe1\u606f\u9519\u8bef\uff0c\u53ef\u80fd\u5b58\u5728\u6076\u610f\u610f\u56fe\u3002"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>c});var t=i(6540);const s={},r=t.createContext(s);function d(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);