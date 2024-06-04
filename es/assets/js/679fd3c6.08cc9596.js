"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[2207],{5673:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var r=n(4848),s=n(8453),d=n(6025);const t={id:"build_dev_chain",title:"Configura una Cadena para desarrolladores."},c=void 0,o={id:"build_dev_chain",title:"Configura una Cadena para desarrolladores.",description:"Esta secci\xf3n le muestra el proceso de configuraci\xf3n de una instancia de cadena HydraDX local para el desarrollo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/build_dev_chain.md",sourceDirName:".",slug:"/build_dev_chain",permalink:"/es/build_dev_chain",draft:!1,unlisted:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/build_dev_chain.md",tags:[],version:"current",frontMatter:{id:"build_dev_chain",title:"Configura una Cadena para desarrolladores."},sidebar:"sidebar",previous:{title:"Intro to Development",permalink:"/es/dev_intro"},next:{title:"HydraDX Crowdloan",permalink:"/es/archive_hydradx_crowdloan"}},l={},i=[{value:"01 Instalar dependencias",id:"01-instalar-dependencias",level:2},{value:"02 Crea",id:"02-crea",level:2},{value:"03 Ejecuta",id:"03-ejecuta",level:2},{value:"04 Con\xe9ctese a su instancia de cadena local",id:"04-con\xe9ctese-a-su-instancia-de-cadena-local",level:2}];function u(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Esta secci\xf3n le muestra el proceso de configuraci\xf3n de una instancia de cadena HydraDX local para el desarrollo."}),"\n",(0,r.jsx)(a.h2,{id:"01-instalar-dependencias",children:"01 Instalar dependencias"}),"\n",(0,r.jsx)(a.p,{children:"Para preparar una instancia local de HydraDX Chain para el desarrollo, su m\xe1quina debe cubrir todas las dependencias para ejecutar una cadena de substrate. Deber\xe1 instalar un entorno de desarrollador de Rust y asegurarse de que est\xe9 configurado correctamente para compilar el Substrate runtime code  para el destino WebAssembly (Wasm)."}),"\n",(0,r.jsxs)(a.p,{children:["Puede instalar y configurar todas las dependencias  manualmente siguiendo la ",(0,r.jsx)(a.a,{href:"https://substrate.dev/docs/en/knowledgebase/getting-started",children:"Substrate guide"}),", o puede dejar que este script haga todo el trabajo por usted."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ curl https://getsubstrate.io -sSf | bash -s -- --fast\n$ source ~/.cargo/env\n"})}),"\n",(0,r.jsx)(a.h2,{id:"02-crea",children:"02 Crea"}),"\n",(0,r.jsx)(a.p,{children:"Cree los entornos de ejecuci\xf3n nativos y de Wasm:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n\n# Build the binary\n$ cd HydraDX-node/\n$ cargo build --release\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Deber\xeda poder encontrar la compilaci\xf3n bajo  ",(0,r.jsx)(a.code,{children:"./target/release/hydra-dx"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"03-ejecuta",children:"03 Ejecuta"}),"\n",(0,r.jsx)(a.p,{children:"Antes de ejecutar su compilaci\xf3n, puede purgar cualquier cadena de desarrollo existente en su m\xe1quina (deber\xe1 hacer esto a menudo en el proceso de desarrollo):"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ ./target/release/hydra-dx purge-chain --dev\n"})}),"\n",(0,r.jsx)(a.p,{children:"Ejecute su compilaci\xf3n usando uno de los siguientes comandos:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ ./target/release/hydra-dx --dev\n\n# Run with detailed logging\n$ RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug --dev\n"})}),"\n",(0,r.jsx)(a.h2,{id:"04-con\xe9ctese-a-su-instancia-de-cadena-local",children:"04 Con\xe9ctese a su instancia de cadena local"}),"\n",(0,r.jsxs)(a.p,{children:["Puede conectarse a su nodo de desarrollo HydraDX usando Polkadot / apps y cambiando la red a Desarrollo. Tambi\xe9n puede utilizar este enlace:\n",(0,r.jsx)(a.a,{href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer",children:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer"})]}),"\n",(0,r.jsx)("img",{alt:"connect to node",src:(0,d.A)("/building/connect-to-node.jpg")})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>c});var r=n(6540);const s={},d=r.createContext(s);function t(e){const a=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:a},e.children)}}}]);