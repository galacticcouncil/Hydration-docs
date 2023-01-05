"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[209],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),u=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},y=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),y=r,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return n?i.createElement(m,a(a({ref:e},c),{},{components:n})):i.createElement(m,a({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=y;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8468:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var i=n(3117),r=(n(7294),n(3905)),o=n(4996);const a={id:"identity",title:"Set your Identity"},l=void 0,s={unversionedId:"identity",id:"identity",title:"Set your Identity",description:"Account holders have the possibility to set their identity by prodiving specific information and storing it on-chain. Besides that, the identity information can optionally be submitted to the HydraDX registrars for verification. By setting and verifying their identity, validators and nominators help safeguard the trust in the network.",source:"@site/docs/identity.md",sourceDirName:".",slug:"/identity",permalink:"/identity",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/identity.md",tags:[],version:"current",frontMatter:{id:"identity",title:"Set your Identity"},sidebar:"sidebar",previous:{title:"Claim your HDX",permalink:"/claim"},next:{title:"Connect to a Local Node",permalink:"/polkadotjs_apps_local"}},u={},c=[{value:"01 Set identity",id:"01-set-identity",level:2},{value:"02 Submit your identity for verification",id:"02-verify-identity",level:2},{value:"03 Outcome of the verification procedure",id:"03-verification-outcome",level:2}],p={toc:c};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Account holders have the possibility to set their identity by prodiving specific information and storing it on-chain. Besides that, the identity information can optionally be submitted to the HydraDX registrars for verification. By setting and verifying their identity, validators and nominators help safeguard the trust in the network."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are participating as a HydraDX validator we ",(0,r.kt)("strong",{parentName:"p"},"highly recommend")," that you both set your identity and undergo the verification process. Verified validators appear more trustworthy and attract more nominations, thereby increasing their chances to be included in the set of active validators.")),(0,r.kt)("h2",{id:"01-set-identity"},"01 Set identity"),(0,r.kt)("p",null,"To set your identity, open Polkadot/apps (connected to ",(0,r.kt)("em",{parentName:"p"},"HydraDX Snakenet")," network) and navigate to ",(0,r.kt)("em",{parentName:"p"},"My accounts"),". Alternatively, you can follow this link:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts"},"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts")),(0,r.kt)("p",null,"On the accounts page, locate the account holding your bonded HDX tokens. After that, click on the three dots next to the account (on the right side) and select ",(0,r.kt)("em",{parentName:"p"},"Set on-chain identity"),"."),(0,r.kt)("img",{alt:"authorize",src:(0,o.Z)("/identity/set-identity-1.jpg")}),(0,r.kt)("p",null,"You will see a popup called ",(0,r.kt)("em",{parentName:"p"},"register identity"),". Here, you can enter the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"legal name"),(0,r.kt)("li",{parentName:"ul"},"email"),(0,r.kt)("li",{parentName:"ul"},"web address"),(0,r.kt)("li",{parentName:"ul"},"twitter"),(0,r.kt)("li",{parentName:"ul"},"riot name (in case you are using Matrix messaging)")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All this information is optional - feel free to only provide the details you choose. However, if you are running a validator node, we encourage you to set your email. This would allow us to contact you in case we encounter issues with your node.")),(0,r.kt)("p",null,"In the last field of the popup, you can see the amount of HDX you need to deposit to store your identity information. You will receive this deposit back once you decide to clear your identity at a later point."),(0,r.kt)("img",{alt:"authorize",src:(0,o.Z)("/identity/set-identity-2.jpg")}),(0,r.kt)("p",null,"After filling out the information, click on ",(0,r.kt)("em",{parentName:"p"},"Set Identity")," and sign the transaction using the Polkadot.js browser extension. Once the transaction is confirmed, your identity is set."),(0,r.kt)("h2",{id:"02-verify-identity"},"02 Submit your identity for verification"),(0,r.kt)("p",null,"After you have set your identity, you can submit it to the network registrars for verification. To do so, open Polkadot/apps and navigate to ",(0,r.kt)("em",{parentName:"p"},"Developer")," > ",(0,r.kt)("em",{parentName:"p"},"Extrinsics"),". Alternatively, you can follow this link:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics"},"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics")),(0,r.kt)("p",null,"After selecting the relevant HydraDX account from the last step, you need to fill out the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"extrinsic"),": identity"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"action"),": requestJudgement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reg_index"),": here you need to enter the ID of the registrar that you choose to carry out the verification.",(0,r.kt)("br",{parentName:"li"}),"HydraDX has 2 registrars: Simon Kraus - HydraSik (ID: ",(0,r.kt)("strong",{parentName:"li"},"0"),") and Jimmy Tudeski - stakenode (ID: ",(0,r.kt)("strong",{parentName:"li"},"1"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max_fee"),": here you need to enter the maximum fee in HDX that you are willing to pay to the registrar for the verification. Only registrars with a fee below your max_fee will be eligible to carry out the verification.")),(0,r.kt)("p",null,"To submit your verification request, click on ",(0,r.kt)("em",{parentName:"p"},"Submit Transaction")," and sign the transaction."),(0,r.kt)("img",{alt:"authorize",src:(0,o.Z)("/identity/set-identity-3.jpg")}),(0,r.kt)("p",null,"Please note that the process of identity verification may take some time to complete. To see the status of your request, navigate to ",(0,r.kt)("strong",{parentName:"p"},"My accounts")," and hover the section displaying your identity - you will see a popup showing the current status."),(0,r.kt)("h2",{id:"03-verification-outcome"},"03 Outcome of the verification procedure"),(0,r.kt)("p",null,"After processing your verification request, the registrar will submit one of the following judgements which will become visible in your identity status:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unknown")," - default value, no judgement has been made yet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reasonable")," - the provided information appears reasonable, however no in-depth checks were made."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"KnownGood")," - the information is correct."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OutOfDate")," - the information was correct in the past but it is now out of date."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LowQuality")," - the information is unprecise but it can be fixed by updating it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Erroneous")," - the provided information is wrong and might indicate a malicious intent.")))}d.isMDXComponent=!0}}]);