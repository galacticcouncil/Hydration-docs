"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[750],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5271:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905)),s=r(4996);const o={id:"node_monitoring",title:"Supervision de node"},l=void 0,i={unversionedId:"node_monitoring",id:"node_monitoring",title:"Supervision de node",description:"Dans ce chapitre nous allons vous guider tout au long du r\xe9glage d'une solution de monitoring locale pour votre node validateur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/node_monitoring.md",sourceDirName:".",slug:"/node_monitoring",permalink:"/fr/node_monitoring",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_monitoring.md",tags:[],version:"current",frontMatter:{id:"node_monitoring",title:"Supervision de node"},sidebar:"sidebar",previous:{title:"Benchmark de performance",permalink:"/fr/performance_benchmark"},next:{title:"Intro to Development",permalink:"/fr/dev_intro"}},u={},p=[{value:"Pr\xe9requis",id:"prerequisites",level:2},{value:"R\xe9glages de Prometheus",id:"prometheus-setup",level:2},{value:"User et Directories",id:"user-and-directories",level:3},{value:"Installer Prometheus",id:"install-prometheus",level:3},{value:"D\xe9marrer Prometheus",id:"starting-prometheus",level:3},{value:"Node Exporter",id:"node-exporter",level:2},{value:"Installer Node Exporter",id:"install-node-exporter",level:3},{value:"Cr\xe9er un Service Systemd",id:"create-a-systemd-service",level:3},{value:"Ajouter Scrape Job pour Node Exporter",id:"add-scrape-job-for-node-exporter",level:3},{value:"Configuration de Grafana",id:"grafana-setup",level:2},{value:"Installer Grafana",id:"install-grafana",level:3},{value:"Acc\xe9der \xe0 l&#39;interface web",id:"accessing-the-web-interface",level:3},{value:"Configurer les Datasource",id:"configuring-the-datasource",level:3},{value:"Importer le tableau de bord",id:"importing-the-dashboard",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dans ce chapitre nous allons vous guider tout au long du r\xe9glage d'une solution de monitoring locale pour votre node validateur."),(0,a.kt)("h2",{id:"prerequisites"},"Pr\xe9requis"),(0,a.kt)("p",null,"Vous devez avoir votre ",(0,a.kt)("a",{parentName:"p",href:"/collator_setup"},"node collateur")," install\xe9 et actif.\nCe guide a \xe9t\xe9  test\xe9 sous la version Ubuntu 20.04 LTS."),(0,a.kt)("h2",{id:"prometheus-setup"},"R\xe9glages de Prometheus"),(0,a.kt)("p",null,"Dans la premi\xe8re \xe9tape nous allons installer le serveur Prometheus."),(0,a.kt)("h3",{id:"user-and-directories"},"User et Directories"),(0,a.kt)("p",null,"Nous cr\xe9ons un user (utilisateur), ",(0,a.kt)("em",{parentName:"p"},"prometheus"),", juste \xe0 des fins de monitoring qui n'a pas de r\xe9pertoire home et ne peut pas \xeatre utilis\xe9 pour ouvrir une session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus\n")),(0,a.kt)("p",null,"Puis nous cr\xe9ons des r\xe9pertoires pour le fichier ex\xe9cutable et les fichiers de configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo mkdir /etc/prometheus\n$ sudo mkdir /var/lib/prometheus\n")),(0,a.kt)("p",null,"Nous allons changer le propri\xe9taire des r\xe9pertoires pour restreindre l'acc\xe8s au nouvel utilisateur, ",(0,a.kt)("em",{parentName:"p"},"prometheus"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus\n$ sudo chown -R prometheus:prometheus /var/lib/prometheus\n")),(0,a.kt)("h3",{id:"install-prometheus"},"Installer Prometheus"),(0,a.kt)("p",null,"V\xe9rifier le num\xe9ro de la derni\xe8re version de Prometheus sur la ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/releases/"},"page de sorties GitHub"),".\nAu moment de l'\xe9criture de l'article, la derni\xe8re version est la v2.25.2. Ins\xe9rer la derni\xe8re version dans les lignes de commandes suivantes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# download prometheus\n$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz\n\n# unpack the binaries\n$ tar xfz prometheus-*.tar.gz\n\n# enter the unpacked directory\n$ cd prometheus-2.25.2.linux-amd64\n")),(0,a.kt)("p",null,"Maintenant copier les binaires dans votre dossier local."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp ./prometheus /usr/local/bin/\n$ sudo cp ./promtool /usr/local/bin/\n")),(0,a.kt)("p",null,"Nous devons maintenant d\xe9finir le nouvel utilisateur, ",(0,a.kt)("em",{parentName:"p"},"prometheus"),", comme \xe9tant propri\xe9taire de ces binaires."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /usr/local/bin/prometheus\n$ sudo chown prometheus:prometheus /usr/local/bin/promtool\n")),(0,a.kt)("p",null,"Ensuite nous allons copier l'interface web et les pr\xe9-configurations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp -r ./consoles /etc/prometheus\n$ sudo cp -r ./console_libraries /etc/prometheus\n")),(0,a.kt)("p",null,"Vous l'avez peut-\xeatre devin\xe9, mais nous allons aussi changer le propri\xe9taire de ces r\xe9pertoires."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles\n$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n")),(0,a.kt)("p",null,"Maintenant que nous avons tous les paquets n\xe9cessaires, nous pouvons remonter d'un niveau et supprimer le dossier contenant les sources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ cd .. && rm -rf prometheus*\n")),(0,a.kt)("p",null,"Cr\xe9ation du fichier de configuration, ",(0,a.kt)("em",{parentName:"p"},"prometheus.yml"),", avec l'\xe9diteur de votre choix (nano / vim / pico)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),(0,a.kt)("p",null,"Notre config est divis\xe9 en trois sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"global"),": sets the default values for ",(0,a.kt)("inlineCode",{parentName:"li"},"scrape_interval")," and the rule-execution interval with ",(0,a.kt)("inlineCode",{parentName:"li"},"evaluation_interval")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rule_files"),": specify rule-files the Prometheus server should load"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scrape_configs"),": this is where you set the monitoring-resources")),(0,a.kt)("p",null,"Nous allons rester simples et terminer avec cette configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  # - "weHaveNo.rules"\n\nscrape_configs:\n  - job_name: "prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: "substrate_node"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9615"]\n')),(0,a.kt)("p",null,"La premi\xe8re t\xe2che d'organisation de donn\xe9es (scrape) exporte les donn\xe9es de Prometheus, la seconde exporte les mesures du node HydraDX.\nNous avons r\xe9gl\xe9 le ",(0,a.kt)("inlineCode",{parentName:"p"},"scrape_interval")," de chaque t\xe2che pour avoir des statistiques plus d\xe9taill\xe9es. Cela remplace les valeurs globales.\nLe ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," dans ",(0,a.kt)("inlineCode",{parentName:"p"},"static_configs")," d\xe9finit o\xf9 les exportateurs fonctionnent, nous nous en tenons aux ports par d\xe9faut ici."),(0,a.kt)("p",null,"Apr\xe8s avoir sauvegard\xe9 la configuration nous allons - encore une fois - changer le propri\xe9taire."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n")),(0,a.kt)("h3",{id:"starting-prometheus"},"D\xe9marrer Prometheus"),(0,a.kt)("p",null,"Pour faire d\xe9marrer Prometheus automatiquement et fonctionner en arri\xe8re-plan nous allons cr\xe9er un service Prometheus avec ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd"),".\nCr\xe9ez un nouveau config (encore avec l'\xe9diteur de votre choix):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/prometheus.service\n")),(0,a.kt)("p",null,"Coller les configurations suivantes et sauvegardez le fichier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[Unit]\n  Description=Prometheus Monitoring\n  Wants=network-online.target\n  After=network-online.target\n\n[Service]\n  User=prometheus\n  Group=prometheus\n  Type=simple\n  ExecStart=/usr/local/bin/prometheus \\\n  --config.file /etc/prometheus/prometheus.yml \\\n  --storage.tsdb.path /var/lib/prometheus/ \\\n  --web.console.templates=/etc/prometheus/consoles \\\n  --web.console.libraries=/etc/prometheus/console_libraries\n  ExecReload=/bin/kill -HUP $MAINPID\n\n[Install]\n  WantedBy=multi-user.target\n")),(0,a.kt)("p",null,"Ensuite nous allons effectuer les trois \xe9tapes suivantes:\n",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload")," charge les nouvelles configurations et met \xe0 jour celles existantes.\n",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl enable")," active notre nouveau service\n",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl start")," d\xe9clenche l'ex\xe9cution du service."),(0,a.kt)("p",null,"Vous pouvez effectuer les \xe9tapes au dessus en une commande en ex\xe9cutant:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus\n")),(0,a.kt)("p",null,"Vous devriez maintenant \xeatre capable d'acc\xe9der \xe0 l'interface web de Prometheus \xe0 http://localhost:9090/."),(0,a.kt)("h2",{id:"node-exporter"},"Node Exporter"),(0,a.kt)("p",null,"Nous allons installer Node Exporter pour organiser les m\xe9triques du serveur qui vont \xeatre remont\xe9es dans le tableau de bord.\nVeuillez v\xe9rifier le num\xe9ro de la derni\xe8re version ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter/releases/"},"ici")," et mettez la commande \xe0 jour.\nAu moment de l'\xe9criture de l'article la derni\xe8re version est ",(0,a.kt)("inlineCode",{parentName:"p"},"1.1.2"),"."),(0,a.kt)("h3",{id:"install-node-exporter"},"Installer Node Exporter"),(0,a.kt)("p",null,"T\xe9l\xe9charger la derni\xe8re version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz\n")),(0,a.kt)("p",null,"Extraire l'archive que vous venez de t\xe9l\xe9charger. Cela cr\xe9era un dossier appel\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_exporter-1.1.2.linux-amd64"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz\n")),(0,a.kt)("p",null,"Ensuite nous copions le binaire dans notre r\xe9pertoire local d'application and l'assignons \xe0 notre utilisateur superviseur."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# copy binary\n$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin\n\n# set ownership\n$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter\n")),(0,a.kt)("p",null,"Nous pouvons maintenant faire un peu de m\xe9nage et supprimer les paquets t\xe9l\xe9charg\xe9s et extraits."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ rm -rf node_exporter*\n")),(0,a.kt)("h3",{id:"create-a-systemd-service"},"Cr\xe9er un Service Systemd"),(0,a.kt)("p",null,"De la m\xeame fa\xe7on que Prometheus nous voulons que Node Exporter fonctionne comme un service aussi.\nCr\xe9ez un service systemd avec l'\xe9diteur de votre choix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/node_exporter.service\n")),(0,a.kt)("p",null,"Et copiez y la configuration suivante."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Node Exporter\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("p",null,"Nous allons maintenant activer et d\xe9marrer le service avec cette simple ligne de commande."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter\n")),(0,a.kt)("h3",{id:"add-scrape-job-for-node-exporter"},"Ajouter Scrape Job pour Node Exporter"),(0,a.kt)("p",null,"Le Node Exporter est maintenant actif et op\xe9rationnel mais nous devons dire \xe0 Prometheus d'organiser (scrape) ses donn\xe9es.\nNous allons ouvre le fichier de configuration, ",(0,a.kt)("em",{parentName:"p"},"prometheus.yml"),", encore une fois avec l'\xe9diteur de votre choix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),(0,a.kt)("p",null,"Et \xe0 la toute fin du fichier nous allons ajouter un scrape config de plus.\nColler le contenu suivant et sauvegarder le ficher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n")),(0,a.kt)("p",null,"L'application des changements de configuration au red\xe9marrage du service Prometheus est requise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl restart prometheus.service \n")),(0,a.kt)("p",null,"Les m\xe9triques de votre serveur sont maintenant organis\xe9es (scraped) et peuvent \xeatre trouv\xe9es dans l'interface web Prometheus.\nNous allons en avoir besoin plus tard pour notre tableau de bord."),(0,a.kt)("h2",{id:"grafana-setup"},"Configuration de Grafana"),(0,a.kt)("p",null,"Nous pouvons voir nos m\xe9triques dans l'interface web, mais ce n'est pas la fa\xe7on dont on veut les superviser.\nOn les veut belles et propres. C'est l\xe0 que Grafana entre en jeu."),(0,a.kt)("h3",{id:"install-grafana"},"Installer Grafana"),(0,a.kt)("p",null,"Veuillez v\xe9rifier quelle est la derni\xe8re version de Grafana ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=linux"},"avec ce lien"),".\nVous pouvez soit changer le num\xe9ro de version dans les commandes suivantes ou copier les commandes d'installation directement depuis le lien.\nAu moment de l'\xe9criture de l'article la derni\xe8re version est ",(0,a.kt)("inlineCode",{parentName:"p"},"7.5.1"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo apt-get install -y adduser libfontconfig1\n$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb\n$ sudo dpkg -i grafana_7.5.1_amd64.deb\n")),(0,a.kt)("p",null,"Le paquet est fourni avec un service ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," int\xe9gr\xe9 que nous allons configurer et d\xe9marrer exactement comme le service Prometheus."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server\n")),(0,a.kt)("h3",{id:"accessing-the-web-interface"},"Acc\xe9der \xe0 l'interface web"),(0,a.kt)("p",null,"Nous allons \xeatre capable d'ouvrir l'interface web Grafana \xe0 http://localhost:3000/.\nLes identifiants de session de Grafana par d\xe9faut sont:\nUser: ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),(0,a.kt)("br",{parentName:"p"}),"\n","Password: ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"  "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-home.png")})),(0,a.kt)("h3",{id:"configuring-the-datasource"},"Configurer les Datasource"),(0,a.kt)("p",null,'Veuillez cliquer sur la roue des param\xe8tres dans le menu et choisissez source de donn\xe9es (datasource).\nDans la fen\xeatre suivante cliquez "ajouter Datasource" et s\xe9lectionnez "Prometheus".'),(0,a.kt)("p",null,"Dans le formulaire suivant vous n'avez pas besoin de changer quoi que ce soit except\xe9 l'URL.\nEntrez ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/")," et cliquez ",(0,a.kt)("inlineCode",{parentName:"p"},"Save and Test"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-datasource.png")})),(0,a.kt)("h3",{id:"importing-the-dashboard"},"Importer le tableau de bord"),(0,a.kt)("p",null,"Veuillez cliquer sur le bouton ",(0,a.kt)("inlineCode",{parentName:"p"},"Plus")," dans le menu principal de navigation et s\xe9lectionnez ",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-import.png")})),(0,a.kt)("p",null,"Nous allons utiliser le ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/14158"},"Tableau de bord HydraDX")," pour le charger vous entrez l'id ",(0,a.kt)("inlineCode",{parentName:"p"},"14158")," et cliquez sur le bouton ",(0,a.kt)("inlineCode",{parentName:"p"},"Load"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-import-options.png")})),(0,a.kt)("p",null,"Il n'y a pas besoin de beaucoup de configuration ici, assurez vous juste que Prometheus est utilis\xe9 comme source de donn\xe9e.\nVous pouvez maintenant terminer l'importation."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-dashboard.png")})),(0,a.kt)("p",null,"Vous devriez maintenant voir votre tableau de bord directement.\nSi certains panneaux sont vides, assurez vous que la s\xe9lection au dessus des panneaux est comme suit:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Chain Metrics"),": Substrate  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Chain Instance"),": localhost:9615  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Server Job"),": node_exporter  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Server Host"),": localhost:9100")))}d.isMDXComponent=!0}}]);