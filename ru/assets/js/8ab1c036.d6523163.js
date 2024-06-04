"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[4375],{2308:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=r(4848),s=r(8453),a=r(6025);const t={id:"collator_setup",title:"Set up a Collator Node"},d=void 0,i={id:"collator_setup",title:"Set up a Collator Node",description:"This is a step-by-step how-to so you can get your HydraDX collator up and running. In this guide, we use Ubuntu 20.04 LTS.",source:"@site/docs/collator_setup.md",sourceDirName:".",slug:"/collator_setup",permalink:"/ru/collator_setup",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/collator_setup.md",tags:[],version:"current",frontMatter:{id:"collator_setup",title:"Set up a Collator Node"},sidebar:"sidebar",previous:{title:"Omnipool Design",permalink:"/ru/omnipool_design"},next:{title:"\u0422\u0435\u0441\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",permalink:"/ru/performance_benchmark"}},c={},l=[{value:"Required technical specifications",id:"technical-specifications",level:2},{value:"Create a technical <code>hydra</code> user and add it to Sudoers",id:"create-a-technical-hydra-user-and-add-it-to-sudoers",level:2},{value:"Download and configure the <code>hydradx</code> binary",id:"download-and-configure-the-hydradx-binary",level:2},{value:"Command to run your collator",id:"command-to-run-your-collator",level:2},{value:"Generate your session key",id:"generate-your-session-key",level:2},{value:"Set your session key",id:"set-your-session-key",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This is a step-by-step how-to so you can get your HydraDX collator up and running. In this guide, we use Ubuntu 20.04 LTS."}),"\n",(0,o.jsx)(n.h2,{id:"technical-specifications",children:"Required technical specifications"}),"\n",(0,o.jsx)(n.p,{children:"The following technical specifications are required as a minimum for running a HydraDX collator node:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"OS: Ubuntu 20.04"}),"\n",(0,o.jsx)(n.li,{children:"CPU: Intel Core i7-7700K @ 4.5Ghz (or equivalent single core performance)"}),"\n",(0,o.jsx)(n.li,{children:"Memory: 64GB RAM"}),"\n",(0,o.jsx)(n.li,{children:"Storage: NVMe SSD with a capacity of at least 200GB (the data footprint will grow over time)"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["These are the minimum technical requirements which have been verified by the team. Want to make sure that your machine has sufficient resources to run a node? Run a ",(0,o.jsx)(n.a,{href:"/performance_benchmark",children:"performance benchmark"})," to find out."]})}),"\n",(0,o.jsxs)(n.h2,{id:"create-a-technical-hydra-user-and-add-it-to-sudoers",children:["Create a technical ",(0,o.jsx)(n.code,{children:"hydra"})," user and add it to Sudoers"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo adduser hydra\nsudo usermod -aG sudo hydra\nsu - hydra\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"download-and-configure-the-hydradx-binary",children:["Download and configure the ",(0,o.jsx)(n.code,{children:"hydradx"})," binary"]}),"\n",(0,o.jsxs)(n.p,{children:["Pick a 12.x release, we are using ",(0,o.jsx)(n.code,{children:"v12.1.0"})," from our assets repository:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/galacticcouncil/HydraDX-node/releases/download/v12.1.0/hydradx\nsudo mv hydradx /usr/local/bin\nsudo chmod +x /usr/local/bin/hydradx\nsudo chown hydra:hydra /usr/local/bin/hydradx\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"command-to-run-your-collator",children:"Command to run your collator"}),"\n",(0,o.jsxs)(n.p,{children:["Best is to run your collator as a ",(0,o.jsx)(n.code,{children:"service"})," using ",(0,o.jsx)(n.code,{children:"systemctl"}),". To do so, create a file, namely ",(0,o.jsx)(n.code,{children:"hydradx-collator.service"})," under ",(0,o.jsx)(n.code,{children:"/etc/systemd/system/hydradx-collator.service"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/systemd/system/hydradx-collator.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then paste the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'[Unit]\nDescription=hydradx validator\n[Service]\nType=exec\nUser=hydra\nExecStart=/usr/local/bin/hydradx \\\n    --name YOUR_COLLATOR_NAME \\\n    --prometheus-external \\\n    --base-path /var/lib/hydradx \\\n    --collator \\\n    -- \\\n    --execution wasm \\\n    --telemetry-url "wss://telemetry.hydradx.io:9000/submit/ 0" \\\n    --base-path /var/lib/hydradx\n    \nRestart=always\nRestartSec=120\n[Install]\nWantedBy=multi-user.target\n'})}),"\n",(0,o.jsx)(n.p,{children:"Before starting your node, let's create the base-path folder and give it the necessary permissions and ownership:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mkdir /var/lib/hydradx\nchown hydra:hydra /var/lib/hydradx\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Make sure you have enough volume for your ",(0,o.jsx)(n.code,{children:"base-path"})," by using ",(0,o.jsx)(n.code,{children:"df -h"})," command."]})}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"--prometheus-external"})," is optional, but we highly recommend it so you can be able to export prometheus metrics and monitor your node's health through Grafana. For more details about monitoring, please visit ",(0,o.jsx)(n.a,{href:"https://docs.hydradx.io/node_monitoring/",children:"this link"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you need to monitor both the ",(0,o.jsx)(n.code,{children:"parachain"})," and ",(0,o.jsx)(n.code,{children:"relaychain"})," metrics, ",(0,o.jsx)(n.code,{children:"--prometheus-external"}),"option should be setup in both parts. You also need to set a separate port for the relaychain part as follows: ",(0,o.jsx)(n.code,{children:"--prometheus-port YOUR_CUSTOM_PORT_NUMBER"})]}),"\n",(0,o.jsxs)(n.p,{children:["Depending on your setup, you might also want to override certain parameters like the websocket, rpc or your node p2p port. Please use ",(0,o.jsx)(n.code,{children:"hydradx --help"})," for more information about the available options."]}),"\n",(0,o.jsx)(n.p,{children:"After saving your file, run the following commands to start your node:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable hydradx-collator\nsudo systemctl start hydradx-collator.service\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Your node should now be up and running. Make sure your ",(0,o.jsx)(n.code,{children:"hydra"})," user has the necessary permissions to access your ",(0,o.jsx)(n.code,{children:"base-path"})," and key file."]}),"\n",(0,o.jsxs)(n.p,{children:["If you need to troubleshoot your running service, you can use the ",(0,o.jsx)(n.code,{children:"journalctl"})," command with the ",(0,o.jsx)(n.code,{children:"-f"})," option for tailing:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"journalctl -fu hydradx-collator\n"})}),"\n",(0,o.jsx)(n.h2,{id:"generate-your-session-key",children:"Generate your session key"}),"\n",(0,o.jsx)(n.p,{children:"In order to generate keys for your node, run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n'})}),"\n",(0,o.jsx)(n.p,{children:"Once done, you will have an output similar to:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"set-your-session-key",children:"Set your session key"}),"\n",(0,o.jsxs)(n.p,{children:["To associate the generated session keys with your Controller account, navigate to the following menu item in the ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics",children:"Polkadot/apps"})," on the Polkadot parachain HydraDX: ",(0,o.jsx)(n.em,{children:"Developer"})," > ",(0,o.jsx)(n.em,{children:"Extrinsics"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Fill in the fields:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"using selected account"}),": select your Controller account;"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"submit the following extrinsic"}),": select ",(0,o.jsx)(n.code,{children:"session"})," on the left side and ",(0,o.jsx)(n.code,{children:"setKeys"})," on the right;"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"keys"}),": enter your session key you just generated;"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"proof"}),": ",(0,o.jsx)(n.code,{children:"0"}),";"]}),"\n"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)("img",{src:(0,a.A)("/collator-node/session-keys.png")})}),"\n",(0,o.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,o.jsx)(n.p,{children:"Make sure that your node is fully synced. Once this is done, let us know in the dedicated Discord channel (only if you have been preselected as a collator)."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var o=r(6540);const s={},a=o.createContext(s);function t(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);