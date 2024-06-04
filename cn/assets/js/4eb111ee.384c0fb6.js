"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[3581],{5859:(n,i,o)=>{o.r(i),o.d(i,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var e=o(4848),t=o(8453),r=o(6025);const l={id:"omnipool_trading",title:"\u9ad8\u6548\u4ea4\u6613"},d=void 0,c={id:"omnipool_trading",title:"\u9ad8\u6548\u4ea4\u6613",description:"\u4f20\u7edf DeFi \u7cfb\u7edf\u7684\u7279\u70b9\u662f\u6d41\u52a8\u6027\u5206\u6563\u5316\uff0c\u5373\uff1a\u6d41\u52a8\u6027\u5206\u6563\u5728\u591a\u4e2a\u4ea4\u6613\u6c60\u4e2d\u3002\u8fd9\u4e2a\u7cfb\u7edf\u8dc3\u70b9\u8f83\u591a\uff0c\u6d41\u52a8\u6027\u8f83\u6d45\uff0c\u5bfc\u81f4\u4ef7\u683c\u5f71\u54cd\u53d8\u5927\u6ed1\u70b9\u5347\u9ad8\u3001\u7ecf\u6d4e\u6548\u7387\u4f4e\u4e0b\u3002HydraDX Omnipool\uff08\u4e07\u80fd\u6c60\uff09\u901a\u8fc7\u5c06\u6240\u6709\u6d41\u52a8\u6027\u5408\u5e76\u5230\u4e00\u4e2a\u4ea4\u6613\u6c60\u4e2d\uff0c\u5b9e\u73b0\u4e86\u5176\u5b83 AMM \u65e0\u6cd5\u6bd4\u62df\u7684\u9ad8\u6548\u7387\u4ea4\u6613\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/omnipool_trading.md",sourceDirName:".",slug:"/omnipool_trading",permalink:"/cn/omnipool_trading",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/omnipool_trading.md",tags:[],version:"current",frontMatter:{id:"omnipool_trading",title:"\u9ad8\u6548\u4ea4\u6613"},sidebar:"sidebar",previous:{title:"\u9047\u89c1 Omnipool",permalink:"/cn/"},next:{title:"DCA \u4ea4\u6613",permalink:"/cn/omnipool_dca"}},s={},a=[{value:"\u4f20\u7edf AMM\uff1a\u6d41\u52a8\u6027\u788e\u7247\u5316",id:"\u4f20\u7edf-amm\u6d41\u52a8\u6027\u788e\u7247\u5316",level:2},{value:"HydraDX Omnipool\uff1a\u7edf\u4e00\u6d41\u52a8\u6027",id:"hydradx-omnipool\u7edf\u4e00\u6d41\u52a8\u6027",level:2}];function p(n){const i={h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.p,{children:"\u4f20\u7edf DeFi \u7cfb\u7edf\u7684\u7279\u70b9\u662f\u6d41\u52a8\u6027\u5206\u6563\u5316\uff0c\u5373\uff1a\u6d41\u52a8\u6027\u5206\u6563\u5728\u591a\u4e2a\u4ea4\u6613\u6c60\u4e2d\u3002\u8fd9\u4e2a\u7cfb\u7edf\u8dc3\u70b9\u8f83\u591a\uff0c\u6d41\u52a8\u6027\u8f83\u6d45\uff0c\u5bfc\u81f4\u4ef7\u683c\u5f71\u54cd\u53d8\u5927\u6ed1\u70b9\u5347\u9ad8\u3001\u7ecf\u6d4e\u6548\u7387\u4f4e\u4e0b\u3002HydraDX Omnipool\uff08\u4e07\u80fd\u6c60\uff09\u901a\u8fc7\u5c06\u6240\u6709\u6d41\u52a8\u6027\u5408\u5e76\u5230\u4e00\u4e2a\u4ea4\u6613\u6c60\u4e2d\uff0c\u5b9e\u73b0\u4e86\u5176\u5b83 AMM \u65e0\u6cd5\u6bd4\u62df\u7684\u9ad8\u6548\u7387\u4ea4\u6613\u3002"}),"\n",(0,e.jsx)(i.h2,{id:"\u4f20\u7edf-amm\u6d41\u52a8\u6027\u788e\u7247\u5316",children:"\u4f20\u7edf AMM\uff1a\u6d41\u52a8\u6027\u788e\u7247\u5316"}),"\n",(0,e.jsx)(i.p,{children:"\u5148\u9a71 XYK AMM \u7684\u51fa\u73b0\uff0c\u6807\u5fd7\u7740 DeFi \u9886\u57df\u4e00\u4e2a\u5173\u952e\u65f6\u523b\u7684\u5230\u6765\uff0c\u56e0\u4e3a\u5b83\u8ba9\u53bb\u4e2d\u5fc3\u5316\u548c\u65e0\u9700\u8bb8\u53ef\u4ea4\u6613\u6210\u4e3a\u4e86\u53ef\u80fd\u3002 \u7b80\u5355\u7684 XYK \u6c60\uff0c\u5bf9 DeFi \u521d\u671f\u7684\u5e7f\u6cdb\u91c7\u7528\uff0c\u8d77\u5230\u4e86\u4fc3\u8fdb\u4f5c\u7528\u3002\u4f46\u65f6\u503c\u4eca\u65e5\uff0c\u6211\u4eec\u4e0d\u5f97\u4e0d\u9762\u4e34\u8fd9\u6837\u4e00\u4e2a\u5c40\u9762\uff1a XYK \u6a21\u578b\u4f4e\u4e0b\u7684\u7ecf\u6d4e\u6548\u7387\uff0c\u5df2\u7ecf\u963b\u788d\u4e86 DeFi \u5e94\u7528\u7684\u8fdb\u4e00\u6b65\u53d1\u5c55\u3002"}),"\n",(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)("img",{alt:"Omnipool",src:(0,r.A)("/omnipool/trading-1.jpg"),width:"300px"})}),"\n",(0,e.jsx)(i.p,{children:"XYK \u6a21\u578b\u7684\u7f3a\u9677\u4e4b\u4e00\uff0c\u662f\u4ea4\u6613\u6c60\u53ea\u80fd\u7531\u6210\u5bf9\u7684\u8d44\u4ea7\u6784\u6210\u3002 \u6d41\u52a8\u6027\u788e\u7247\u5316\uff0c\u5bfc\u81f4\u66f4\u5927\u7684\u4ef7\u683c\u5f71\u54cd\u548c\u66f4\u9ad8\u7684\u8dc3\u70b9\u548c\u6ed1\u70b9\u3002 \u4e0a\u9762\u622a\u56fe ETH-AAVE \u7684\u4ea4\u6613\u8def\u7ebf\uff0c\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u751f\u52a8\u7684\u4f8b\u5b50\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"85% \u7684\u4ea4\u6613\uff0c\u5c06 ETH \u76f4\u63a5\u4ea4\u6362\u6210 AAVE\uff08\u4ea7\u751f 0.3% \u7684\u8d39\u7528\uff09;"}),"\n",(0,e.jsx)(i.li,{children:"\u4f59\u4e0b\u7684 15% \u4ea4\u6613\uff0c\u5219\u8981\u5148\u5c06 ETH \u4ea4\u6362\u6210 UNI\uff0c\u7136\u540e\u518d\u5c06 UNI \u4ea4\u6362\u4e3a AAVE\uff08\u5728\u4e24\u4e2a\u4ea4\u6613\u6c60\u91cc\u5206\u522b\u4ea7\u751f\u4e86 0.3% \u7684\u4ea4\u6613\u8d39\u7528\uff09\u3002"}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"hydradx-omnipool\u7edf\u4e00\u6d41\u52a8\u6027",children:"HydraDX Omnipool\uff1a\u7edf\u4e00\u6d41\u52a8\u6027"}),"\n",(0,e.jsx)(i.p,{children:"\u5f97\u76ca\u4e8e Omnipool \u7684\u5c16\u7aef\u8bbe\u8ba1\uff0c\u6d41\u52a8\u6027\u624d\u771f\u6b63\u53d1\u6325\u51fa\u5b83\u5e94\u6709\u7684\u4f5c\u7528\u3002 \u901a\u8fc7 LRNA \u8fde\u63a5\u6240\u6709\u6d41\u52a8\u6027\uff0cOmnipool \u7684\u4efb\u4e00\u8d44\u4ea7\uff0c\u53ef\u76f4\u63a5\u8bbf\u95ee\u6c60\u4e2d\u6240\u6709\u8d44\u4ea7\u7edf\u4e00\u5f62\u6210\u7684\u5168\u90e8\u6d41\u52a8\u6027\uff0c\u4e14\u4e0e\u94fe\u4e0a\u6267\u884c\u65e0\u7f1d\u8854\u63a5\uff0c\u4ea4\u6362\u5728\u4e00\u6b21\u4ea4\u6613\u4e2d\u5b8c\u6210\uff0c\u65e0\u9700\u5728\u5f7c\u6b64\u72ec\u7acb\u7684\u4ea4\u6613\u6c60\u4e2d\u95f4\u8fdb\u884c\u4efb\u4f55\u8df3\u8f6c\u3002"}),"\n",(0,e.jsx)(i.p,{children:"\u6b64\u5916\uff0c\u6839\u636e\u5185\u5728\u7814\u7a76\uff0c\u968f\u7740 Omnipool \u4ee4\u724c\u6570\u91cf\u548c\u9501\u5b9a\u4ef7\u503c\uff08TVL\uff09\u7684\u4e0d\u65ad\u589e\u52a0\uff0c\u5bf9\u4e8e\u6ed1\u70b9\u7684\u51cf\u5c11\u5c06\u5448\u6307\u6570\u7ea7\u6539\u5584\u3002"}),"\n",(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)("img",{alt:"login",src:(0,r.A)("/omnipool/trading-2.jpg"),width:"300px"})}),"\n",(0,e.jsx)(i.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50\uff08\u5982\u4e0a\u56fe\uff09\uff0c\u5047\u8bbe\u8d44\u4ea7 TKN \u5206\u5e03\u5728 4 \u4e2a\u4e0d\u540c\u7684\u6d41\u52a8\u6c60\u4e2d\uff0c4 \u6c60\u6d41\u52a8\u6027\u6c34\u5e73\u5404\u4e0d\u76f8\u540c\u3002 \u4ea4\u6613\u8005\u5982\u679c\u60f3\u7528\uff08\u5c11\u91cf\u7684\uff09DAI \u4ea4\u6362 TKN\uff0c\u4ed6\u4eec\u53ef\u9009\u62e9\u62e5\u6709 100 \u4e07\u7f8e\u5143\u6d41\u52a8\u6027\u7684 TKN-DAI \u6c60\u3002 \u4f46\u5982\u679c\u4ea4\u6613\u89c4\u6a21\u52a0\u5927\uff0c\u5982 10 \u4e07\u7f8e\u5143\u4ee5\u4e0a\uff0c\u5927\u90e8\u5206\u7684\u4ea4\u6613\uff0c\u53ef\u80fd\u8981\u5148\u901a\u8fc7 DAI-ETH \u6c60\uff0c\u7136\u540e\u662f\u4f20\u7edf XYK \u73af\u5883\u7684 TKN-ETH \u6c60\u6765\u5b8c\u6210\u3002"}),"\n",(0,e.jsx)(i.p,{children:"\u7136\u800c\uff0c\u5bf9\u4e8e HydraDX Omnipool\uff0c\u540c\u6837\u7684 500 \u4e07\u7f8e\u5143 TKN \u8d44\u4ea7\uff081000 \u4e07\u7f8e\u5143 TVL \u7684 50%\uff09\u548c 300 \u4e07\u7f8e\u5143 DAI\uff0c\u5c06\u4f1a\u96c6\u4e2d\u5230\u4e00\u4e2a\u6c60\u5b50\u91cc\u3002 \u5982\u679c\u4ea4\u6613\u8005\u5728 Omnipool \u4e2d\u6267\u884c\u4ee5\u4e0a\u76f8\u540c\u7684\u4ea4\u6613\uff0c\u4ed6\u4eec\u5c06\u4eab\u53d7\u7531 500 \u4e07\u7f8e\u5143 TKN \u548c 300 \u4e07\u7f8e\u5143 DAI \u6240\u5f62\u6210\u7684\u5168\u90e8\u6d41\u52a8\u6027\u6548\u76ca\uff0c\u5e76\u5728\u4e00\u6b21\u4ea4\u6362\u4e2d\u5b8c\u6210\u4ea4\u6613\uff0c\u6574\u4f53\u4e0a\u7684\u4ef7\u683c\u5f71\u54cd\u5c06\u5927\u5927\u964d\u4f4e\u3002"})]})}function m(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(p,{...n})}):p(n)}},8453:(n,i,o)=>{o.d(i,{R:()=>l,x:()=>d});var e=o(6540);const t={},r=e.createContext(t);function l(n){const i=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function d(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),e.createElement(r.Provider,{value:i},n.children)}}}]);