"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[880],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4736:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905)),o=n(4996);const l={id:"collator_setup",title:"Set up a Collator Node"},i=void 0,s={unversionedId:"collator_setup",id:"collator_setup",title:"Set up a Collator Node",description:"This is a step-by-step how-to so you can get your HydraDX collator up and running. In this guide, we use Ubuntu 20.04 LTS.",source:"@site/docs/collator_setup.md",sourceDirName:".",slug:"/collator_setup",permalink:"/collator_setup",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/collator_setup.md",tags:[],version:"current",frontMatter:{id:"collator_setup",title:"Set up a Collator Node"},sidebar:"sidebar",previous:{title:"Omnipool Design",permalink:"/omnipool_design"},next:{title:"Performance Benchmark",permalink:"/performance_benchmark"}},u={},c=[{value:"Required technical specifications",id:"technical-specifications",level:2},{value:"Create a technical <code>hydra</code> user and add it to Sudoers",id:"create-a-technical-hydra-user-and-add-it-to-sudoers",level:2},{value:"Download and configure the <code>hydradx</code> binary",id:"download-and-configure-the-hydradx-binary",level:2},{value:"Command to run your collator",id:"command-to-run-your-collator",level:2},{value:"Generate your session key",id:"generate-your-session-key",level:2},{value:"Set your session key",id:"set-your-session-key",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a step-by-step how-to so you can get your HydraDX collator up and running. In this guide, we use Ubuntu 20.04 LTS."),(0,r.kt)("h2",{id:"technical-specifications"},"Required technical specifications"),(0,r.kt)("p",null,"The following technical specifications are required as a minimum for running a HydraDX collator node: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS: Ubuntu 20.04"),(0,r.kt)("li",{parentName:"ul"},"CPU: Intel Core i7-7700K @ 4.5Ghz (or equivalent single core performance)"),(0,r.kt)("li",{parentName:"ul"},"Memory: 64GB RAM"),(0,r.kt)("li",{parentName:"ul"},"Storage: NVMe SSD with a capacity of at least 200GB (the data footprint will grow over time)")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"These are the minimum technical requirements which have been verified by the team. Want to make sure that your machine has sufficient resources to run a node? Run a ",(0,r.kt)("a",{parentName:"p",href:"/performance_benchmark"},"performance benchmark")," to find out.")),(0,r.kt)("h2",{id:"create-a-technical-hydra-user-and-add-it-to-sudoers"},"Create a technical ",(0,r.kt)("inlineCode",{parentName:"h2"},"hydra")," user and add it to Sudoers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser hydra\nsudo usermod -aG sudo hydra\nsu - hydra\n")),(0,r.kt)("h2",{id:"download-and-configure-the-hydradx-binary"},"Download and configure the ",(0,r.kt)("inlineCode",{parentName:"h2"},"hydradx")," binary"),(0,r.kt)("p",null,"Pick a 12.x release, we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"v12.1.0")," from our assets repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/galacticcouncil/HydraDX-node/releases/download/v12.1.0/hydradx\nsudo mv hydradx /usr/local/bin\nsudo chmod +x /usr/local/bin/hydradx\nsudo chown hydra:hydra /usr/local/bin/hydradx\n\n")),(0,r.kt)("h2",{id:"command-to-run-your-collator"},"Command to run your collator"),(0,r.kt)("p",null,"Best is to run your collator as a ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl"),". To do so, create a file, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"hydradx-collator.service")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/hydradx-collator.service"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/systemd/system/hydradx-collator.service\n")),(0,r.kt)("p",null,"Then paste the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[Unit]\nDescription=hydradx validator\n[Service]\nType=exec\nUser=hydra\nExecStart=/usr/local/bin/hydradx \\\n    --name YOUR_COLLATOR_NAME \\\n    --prometheus-external \\\n    --base-path /var/lib/hydradx \\\n    --collator \\\n    -- \\\n    --execution wasm \\\n    --telemetry-url "wss://telemetry.hydradx.io:9000/submit/ 0" \\\n    --base-path /var/lib/hydradx\n    \nRestart=always\nRestartSec=120\n[Install]\nWantedBy=multi-user.target\n')),(0,r.kt)("p",null,"Before starting your node, let's create the base-path folder and give it the necessary permissions and ownership:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /var/lib/hydradx\nchown hydra:hydra /var/lib/hydradx\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you have enough volume for your ",(0,r.kt)("inlineCode",{parentName:"p"},"base-path")," by using ",(0,r.kt)("inlineCode",{parentName:"p"},"df -h")," command.")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"--prometheus-external")," is optional, but we highly recommend it so you can be able to export prometheus metrics and monitor your node's health through Grafana. For more details about monitoring, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hydradx.io/node_monitoring/"},"this link"),"."),(0,r.kt)("p",null,"If you need to monitor both the ",(0,r.kt)("inlineCode",{parentName:"p"},"parachain")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"relaychain")," metrics, ",(0,r.kt)("inlineCode",{parentName:"p"},"--prometheus-external"),"option should be setup in both parts. You also need to set a separate port for the relaychain part as follows: ",(0,r.kt)("inlineCode",{parentName:"p"},"--prometheus-port YOUR_CUSTOM_PORT_NUMBER")),(0,r.kt)("p",null,"Depending on your setup, you might also want to override certain parameters like the websocket, rpc or your node p2p port. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"hydradx --help")," for more information about the available options."),(0,r.kt)("p",null,"After saving your file, run the following commands to start your node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable hydradx-collator\nsudo systemctl start hydradx-collator.service\n")),(0,r.kt)("p",null,"Your node should now be up and running. Make sure your ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra")," user has the necessary permissions to access your ",(0,r.kt)("inlineCode",{parentName:"p"},"base-path")," and key file."),(0,r.kt)("p",null,"If you need to troubleshoot your running service, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"journalctl")," command with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," option for tailing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -fu hydradx-collator\n")),(0,r.kt)("h2",{id:"generate-your-session-key"},"Generate your session key"),(0,r.kt)("p",null,"In order to generate keys for your node, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n')),(0,r.kt)("p",null,"Once done, you will have an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}\n')),(0,r.kt)("h2",{id:"set-your-session-key"},"Set your session key"),(0,r.kt)("p",null,"To associate the generated session keys with your Controller account, navigate to the following menu item in the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics"},"Polkadot/apps")," on the Polkadot parachain HydraDX: ",(0,r.kt)("em",{parentName:"p"},"Developer")," > ",(0,r.kt)("em",{parentName:"p"},"Extrinsics"),"."),(0,r.kt)("p",null,"Fill in the fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"using selected account"),": select your Controller account;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"submit the following extrinsic"),": select ",(0,r.kt)("inlineCode",{parentName:"li"},"session")," on the left side and ",(0,r.kt)("inlineCode",{parentName:"li"},"setKeys")," on the right;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"keys"),": enter your session key you just generated;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"proof"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),";")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,o.Z)("/collator-node/session-keys.png")})),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Make sure that your node is fully synced. Once this is done, let us know in the dedicated Discord channel (only if you have been preselected as a collator)."))}p.isMDXComponent=!0}}]);