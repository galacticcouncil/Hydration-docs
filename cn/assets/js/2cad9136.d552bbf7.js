"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[888],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return h}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(i),m=o,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return i?n.createElement(h,a(a({ref:t},c),{},{components:i})):n.createElement(h,a({ref:t},c))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3248:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return c}});var n=i(3117),o=(i(7294),i(3905)),r=i(4996);const a={id:"omnipool_trading",title:"Efficient Trading"},l=void 0,d={unversionedId:"omnipool_trading",id:"omnipool_trading",title:"Efficient Trading",description:"The traditional DeFi landscape is characterised by fragmented liquidity which is dispersed across several trading pools. This leads to economic inefficiencies: More hops and shallower liquidity create higher price impact and slippage. By combining all liquidity in a single trading pool, the HydraDX Omnipool enables efficient trading like no other AMM.",source:"@site/docs/omnipool_trading.md",sourceDirName:".",slug:"/omnipool_trading",permalink:"/cn/omnipool_trading",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/omnipool_trading.md",tags:[],version:"current",frontMatter:{id:"omnipool_trading",title:"Efficient Trading"},sidebar:"sidebar",previous:{title:"\u524d\u8a00",permalink:"/cn/"},next:{title:"Single-Sided LPing",permalink:"/cn/omnipool_lp"}},s={},c=[{value:"Traditional AMMs: Liquidity Fragmentation",id:"traditional-amms-liquidity-fragmentation",level:2},{value:"HydraDX Omnipool: Unified Liquidity",id:"hydradx-omnipool-unified-liquidity",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The traditional DeFi landscape is characterised by fragmented liquidity which is dispersed across several trading pools. This leads to economic inefficiencies: More hops and shallower liquidity create higher price impact and slippage. By combining all liquidity in a single trading pool, the HydraDX Omnipool enables efficient trading like no other AMM."),(0,o.kt)("h2",{id:"traditional-amms-liquidity-fragmentation"},"Traditional AMMs: Liquidity Fragmentation"),(0,o.kt)("p",null,"The pioneer XYK AMM model marked a pivotal moment for DeFi which made decentralized and permissionless trading possible. The simplicity of XYK pools boosted the initial adoption of DeFi, however today we stand at a point where the resulting economic inefficiencies hinder the continued adoption."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"Omnipool",src:(0,r.Z)("/omnipool/trading-1.jpg"),width:"300px"})),(0,o.kt)("p",null,"One of the flaws of the XYK model is that trading pools are constrained to pairs of assets. Fragmented liquidity results in a higher price impact due to more hops and slippage. The route of the ETH-AAVE trade in the screenshot above provides a practical example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"85% direct from ETH to AAVE (incurring 0.3% fee);"),(0,o.kt)("li",{parentName:"ul"},"15% ETH traded for UNI first then the UNI is swapped for AAVE (incurring two 0.3% swap fees).")),(0,o.kt)("h2",{id:"hydradx-omnipool-unified-liquidity"},"HydraDX Omnipool: Unified Liquidity"),(0,o.kt)("p",null,"Thanks to the cutting-edge design, liquidity in the Omnipool truly ",(0,o.kt)("em",{parentName:"p"},"acts as")," ",(0,o.kt)("em",{parentName:"p"},"one"),". By having all the liquidity connected through LRNA, the assets within the Omnipool have direct access to the entirety of liquidity for any other asset that is also deposited into the Omnipool. This allows for a\xa0",(0,o.kt)("strong",{parentName:"p"},"seamless on-chain execution"),"\xa0and enables swaps to be completed in a\xa0",(0,o.kt)("strong",{parentName:"p"},"single transaction")," with no hopping required between various isolated trading pools. "),(0,o.kt)("p",null,"Furthermore, based on internal research, the increase in the number of tokens and total value locked (TVL) within the Omnipool lead to exponential improvements in slippage reduction."),(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)("img",{alt:"login",src:(0,r.Z)("/omnipool/trading-2.jpg"),width:"300px"})),(0,o.kt)("p",null,"To illustrate with an example, imagine the TKN asset is distributed across 4 different liquidity pools with varying levels of liquidity. In the scenario that a trader wants to trade DAI for TKN, they would only have access to the direct liquidity of the $1M TKN-DAI pool. If their trade size is substantial (e.g. $100K+), the majority of the trade will likely be routed through a DAI-ETH pool followed by the TKN-ETH pool in the traditional XYK landscape."),(0,o.kt)("p",null,"However, with the Omnipool, that same $5mm (50% of the total $10mm TVL) of the TKN asset and $3mm of DAI would be concentrated in one pool. As such, if a trader proceeds to make the same trade in the HydraDX Omnipool, they will get the entire benefit of the $5mm of TKN and $3mm of DAI liquidity in their direct swap, materially reducing the overall price impact."))}u.isMDXComponent=!0}}]);