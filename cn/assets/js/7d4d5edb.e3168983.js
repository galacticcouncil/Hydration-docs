"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[546],{1292:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=r(4848),i=r(8453);r(6025);const l={id:"learn_amm",title:"\u4ec0\u4e48\u662f AMM"},t=void 0,c={id:"learn_amm",title:"\u4ec0\u4e48\u662f AMM",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u81ea\u52a8\u505a\u5e02\u5546\uff08AMM\uff09\u53ca\u5176\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5\uff0c\u4f8b\u5982 \u6ed1\u70b9\u3001\u6d41\u52a8\u6027\u4f9b\u5e94 \u548c \u65e0\u5e38\u635f\u5931\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/learn_amm.md",sourceDirName:".",slug:"/learn_amm",permalink:"/cn/learn_amm",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/learn_amm.md",tags:[],version:"current",frontMatter:{id:"learn_amm",title:"\u4ec0\u4e48\u662f AMM"},sidebar:"sidebar",previous:{title:"\u8fde\u63a5\u5230\u516c\u5171\u8282\u70b9",permalink:"/cn/polkadotjs_apps_public"},next:{title:"\u7b80\u4ecb",permalink:"/cn/democracy_intro"}},d={},a=[{value:"AMM \u7b80\u4ecb",id:"amm-\u7b80\u4ecb",level:2},{value:"\u8ba2\u5355\u8584",id:"\u8ba2\u5355\u8584",level:3},{value:"AMM",id:"amm",level:3},{value:"\u6ed1\u70b9",id:"slippage",level:2},{value:"\u63d0\u4f9b\u6d41\u52a8\u6027",id:"lp",level:2},{value:"\u65e0\u5e38\u635f\u5931\uff08IL\uff09",id:"impermanent-loss",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u672c\u6587\u4ecb\u7ecd\u4e86\u81ea\u52a8\u505a\u5e02\u5546\uff08AMM\uff09\u53ca\u5176\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#slippage",children:"\u6ed1\u70b9"})}),"\u3001",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#lp",children:"\u6d41\u52a8\u6027\u4f9b\u5e94"})})," \u548c ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#impermanent-loss",children:"\u65e0\u5e38\u635f\u5931"})}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e9b\u4ecb\u7ecd\u6027\u4fe1\u606f\uff0c\u5c06\u5e2e\u52a9\u60a8\u66f4\u597d\u4e86\u89e3 HydraDX Omnipool\uff08\u4e07\u80fd\u6c60\uff09\u80cc\u540e\u7684\u673a\u5236\uff0c\u60a8\u53ef\u5728\u6211\u4eec\u7684 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/",children:"\u4ea7\u54c1\u6587\u6863"})})," \u4e2d\u627e\u5230\u76f8\u5173\u63cf\u8ff0\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"amm-\u7b80\u4ecb",children:"AMM \u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u91ca\u81ea\u52a8\u505a\u5e02\u5546\uff08AMM\uff09\u53ca\u5176\u5de5\u4f5c\u539f\u7406\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u4e0e\u4e2d\u5fc3\u5316\u8ba2\u5355\u8584\u8fdb\u884c\u5bf9\u6bd4\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u8ba2\u5355\u8584",children:"\u8ba2\u5355\u8584"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba2\u5355\u7c3f\u63d0\u4f9b\u4e86\u4e00\u79cd\u7531\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240\uff08CEX\uff09\u90e8\u7f72\u7684\u673a\u5236\uff0c\u7528\u4ee5\u4fc3\u8fdb\u4e24\u79cd\u8d44\u4ea7\u95f4\u7684\u4ea4\u6613\u3002 \u7528\u6237\u53ef\u5728\u4ea4\u6613\u6240\u7ba1\u7406\u7684\u7535\u5b50\u6e05\u5355\u4e2d\u4e0b\u4e70\u5165\u6216\u5356\u51fa\u8ba2\u5355\u3002 \u8fd9\u4e2a\u6240\u8c13\u8ba2\u5355\u7c3f\u4e2d\u7684\u8ba2\u5355\uff0c\u662f\u6309\u4ef7\u683c\u6c34\u5e73\u7ec4\u7ec7\u7684\uff0c\u5e76\u968f\u9700\u6c42\u53d8\u5316\u548c\u8ba2\u5355\u5339\u914d\u9010\u6b65\u586b\u5199\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4e2d\u5fc3\u5316\u80cc\u666f\u4e0b\uff0c\u8ba2\u5355\u7c3f\u7684\u5c40\u9650\u6027\u663e\u800c\u6613\u89c1\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e2d\u592e\u673a\u6784\u201c\u4fdd\u5b58\u201d\u7740\u8ba2\u5355\u7c3f\uff0c\u5e76\u63a8\u52a8\u8ba2\u5355\u5339\u914d\u8fdb\u7a0b\uff0c\u8fd9\u5c31\u4ea7\u751f\u4e86\u5bf9\u4e2d\u592e\u673a\u6784\u7684\u4f9d\u8d56\u3002 \u4e2d\u592e\u673a\u6784\u63a7\u5236\u7740\u4ea4\u6613\uff0c\u9700\u8981\u5f97\u5230\u53c2\u4e0e\u8005\u7684\u4fe1\u4efb\u3002 \u5728\u4ea4\u6613\u91cf\u5927\u3001\u6ce2\u52a8\u5927\u7684\u65f6\u5019\uff0c\u4e2d\u592e\u673a\u6784\u53ef\u4ee5\u51b3\u5b9a\u6682\u505c\u4ea4\u6613\u5e76\u505c\u6b62\u5176\u5c65\u884c\u505a\u5e02\u7684\u804c\u80fd\u3002 \u6b64\u5916\uff0c\u5982\u679c\u9879\u76ee\u65b9\u60f3\u6dfb\u52a0\u65b0\u7684\u53ef\u4ea4\u6613\u8d44\u4ea7\uff0c\u987b\u5728\u5f97\u5230\u4e2d\u592e\u673a\u6784\u8bb8\u53ef\u5e76\u63d0\u524d\u652f\u4ed8\u8d39\u7528\u540e\uff0c\u624d\u53ef\u8ba9\u5176\u8d44\u4ea7\u4e0a\u5e02\u4ea4\u6613\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"amm",children:"AMM"}),"\n",(0,s.jsx)(n.p,{children:"\u81ea\u52a8\u505a\u5e02\u5546\uff08AMM\uff09\uff0c\u662f DeFi \u884c\u4e1a\u5bf9\u8ba2\u5355\u7c3f\u7684\u9769\u65b0\u3002AMM \u63d0\u4f9b\u4e86\u4e00\u79cd\u53bb\u4e2d\u5fc3\u5316\u3001\u65e0\u9700\u8bb8\u53ef\u7684\u4ee4\u724c\u4ea4\u6613\u65b9\u5f0f\uff0c\u66f4\u65e0\u9700\u5c48\u670d\u4e8e\u4e2d\u592e\u673a\u6784\u7684\u63a7\u5236\u3002"}),"\n",(0,s.jsx)(n.p,{children:"AMM \u7531\u6301\u6709\u57fa\u7840\u53ef\u4ea4\u6613\u8d44\u4ea7\u53ef\u7528\u6d41\u52a8\u6027\u7684\u6d41\u52a8\u6027\u6c60\u7ec4\u6210\u3002 \u8fd9\u79cd\u6d41\u52a8\u6027\u662f\u7531\u7528\u6237\uff08\u6240\u8c13\u201c\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u201d\uff09\u63d0\u4f9b\u7684\uff0c\u4ed6\u4eec\u8fd9\u6837\u505a\u7684\u52a8\u673a\u662f\uff0c\u6709\u53ef\u80fd\u4ece\u6c60\u4e2d\u4ea4\u6613\u4ea7\u751f\u7684\u8d39\u7528\u4e2d\u83b7\u5f97\u5956\u52b1\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 AMM \u7684\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55\u7528\u6237\u90fd\u53ef\u4ee5\u5728\u7ed9\u5b9a\u7684\u4ea4\u6613\u6c60\u4e2d\u6267\u884c\u4e70\u5165\u6216\u5356\u51fa\u8ba2\u5355\u3002 \u4ea4\u6613\u4ef7\u683c\uff0c\u7531\u786e\u5b9a\u6027\u7b97\u6cd5\u5f53\u573a\u786e\u5b9a\u3002\u8be5\u7b97\u6cd5\uff0c\u5c06\u4ea4\u6613\u8d44\u4ea7\u7684\u6d41\u52a8\u6027\uff0c\u4e0e\u4f9d\u8d56\u4e8e\u7279\u5b9a AMM \u5b9e\u73b0\u7684\u5176\u4ed6\u56e0\u7d20\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u4f5c\u4e3a\u8f93\u5165\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"slippage",children:"\u6ed1\u70b9"}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u4ea4\u6613\u65f6\uff0c\u7528\u6237\u53ef\u80fd\u4f1a\u9047\u5230 AMM \u7684\u5e38\u89c1\u526f\u4f5c\u7528\uff0c\u5373 ",(0,s.jsx)(n.code,{children:"\u6ed1\u70b9"}),"\uff1a\u4ea4\u6613\u9884\u671f\u4ef7\u683c\u4e0e\u4ea4\u6613\u5b9e\u9645\u6267\u884c\u4ef7\u683c\u95f4\u7684\u5dee\u989d\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6ed1\u70b9\uff0c\u7531\u4ea4\u6613\u6c60\u4e2d\u53ef\u7528\u7684\u6d41\u52a8\u6027\u9ad8\u4f4e\u51b3\u5b9a\u3002 \u5982\u679c\u4e3a\u8d44\u4ea7\u63d0\u4f9b\u7684\u6d41\u52a8\u6027\u8f83\u4f4e\uff0c\u5219\u5728\u5904\u7406\u5927\u8ba2\u5355\u4ea4\u6613\u65f6\u7684\u6ed1\u70b9\u767e\u5206\u6bd4\u5c31\u4f1a\u66f4\u9ad8\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"lp",children:"\u63d0\u4f9b\u6d41\u52a8\u6027"}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u4e8e AMM \u7684\u53bb\u4e2d\u5fc3\u5316\u5c5e\u6027\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u901a\u8fc7\u5b58\u5165\u4e00\u5b9a\u4ef7\u503c\u7684\u4ee4\u724c\uff0c\u6765\u6362\u53d6\u4ee3\u8868\u5176\u6d41\u52a8\u6027\u7684\u4ed3\u4f4d\uff0c\u4ece\u800c\u6210\u4e3a\u6d41\u52a8\u6027\u6c60\u7684\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\uff08LP\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u63d0\u4f9b\u8fd9\u79cd\u6d41\u52a8\u6027\u7684\u62a5\u916c\uff0c\u6765\u6e90\u4e8e\u5176\u6240\u63d0\u4f9b\u6d41\u52a8\u6027\u7684\u8d44\u4ea7\u7ecf\u5386\u7684\u4ea4\u6613\u6d3b\u52a8\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"impermanent-loss",children:"\u65e0\u5e38\u635f\u5931\uff08IL\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u5e38\u635f\u5931\uff08IL\uff09\u662f\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u9762\u4e34\u7684\u4e00\u79cd\u98ce\u9669\uff0c\u5b83\u4f53\u73b0\u4e86\u5728 AMM \u4e2d\u6301\u6709\u4ee4\u724c\u4e0e\u5728\u94b1\u5305\u4e2d\u6301\u6709\u4ee4\u724c\u4e4b\u95f4\u7684\u4ef7\u503c\u5dee\u5f02\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6d41\u52a8\u6027\u6c60\uff0c\u7531\u591a\u4e2a\u4ee4\u724c\uff08\u901a\u5e38\u662f\u4e24\u4e2a\uff09\u6c47\u96c6\u800c\u6210\u3002 \u5f53\u6c60\u5185\u4ee4\u724c\u4ef7\u683c\uff08\u4e0e\u5b58\u5165\u65f6\u4ef7\u683c\uff09\u51fa\u73b0\u5dee\u5f02\u65f6\uff0cIL \u5c31\u4f1a\u53d1\u751f\u3002 \u5dee\u5f02\u8d8a\u5927\uff0c\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u7684\u8d1f\u56de\u62a5\u98ce\u9669\u5c31\u8d8a\u5927\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u79cd\u98ce\u9669\u88ab\u79f0\u4e3a\u201c\u65e0\u5e38\u201d\uff0c\u56e0\u4e3a\u53ea\u6709\u5f53\u6d41\u52a8\u6027\u4ece\u6c60\u4e2d\u64a4\u51fa\u65f6\uff0c\u635f\u5931\u624d\u4f1a\u4ea7\u751f\u3002 \u5982\u679c\u6c60\u4e2d\u4ee4\u724c\u7684\u76f8\u5bf9\u4ef7\u683c\u6062\u590d\u5230\uff08\u4ee4\u724c\u5b58\u5165\u65f6\uff09\u7684\u539f\u59cb\u72b6\u6001\uff0c\u635f\u5931\u5c06\u88ab\u6700\u5c0f\u5316\u6216\u6d88\u9664\u3002 \u5728\u6d41\u52a8\u6027\u64a4\u51fa\u7684\u90a3\u4e00\u523b\uff0c\u635f\u5931\u5c06\u6210\u4e3a ",(0,s.jsx)(n.em,{children:"\u6c38\u4e45\u6027\u7684"}),"\uff0c\u4ece\u800c\u9020\u6210\u6536\u76ca\u51cf\u5c11\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u9700\u8981\u6743\u8861\u8fd9\u4e24\u79cd\u884c\u4e3a\u7684\u6536\u76ca\u5dee\u5f02\uff1a\u5c06\u4ee4\u724c\u7528\u4e8e\u63d0\u4f9b\u6d41\u52a8\u6027\u8d5a\u53d6\u8d39\u7528\u548c\u5956\u52b1\uff0c\u8fd8\u662f\u7b80\u5355\u5730\u653e\u5728\u94b1\u5305\u4e2d\u3002\u7136\u540e\uff0c\u505a\u51fa\u81ea\u5df1\u7684\u9009\u62e9\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var s=r(6540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);