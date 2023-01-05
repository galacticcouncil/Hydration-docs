"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[488],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3613:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var a=n(3117),o=(n(7294),n(3905));const r={},s="Design and Automation of our Tesnet Deployment at HydraDX",i={unversionedId:"testnet_howto",id:"testnet_howto",title:"Design and Automation of our Tesnet Deployment at HydraDX",description:"In this article, we are going to show you how we designed and automated our pipeline to be able to deploy a new testnet (Parachain + Relaychain) within minutes using Kubernetes (EKS Fargate), AWS ACM, Route53, Terraform and Github Actions.",source:"@site/docs/testnet_howto.md",sourceDirName:".",slug:"/testnet_howto",permalink:"/es/testnet_howto",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/testnet_howto.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"The choice of EKS with Fargate",id:"the-choice-of-eks-with-fargate",level:2},{value:"Why EKS with Fargate?",id:"why-eks-with-fargate",level:3},{value:"Deployment of our Relaychain",id:"deployment-of-our-relaychain",level:3},{value:"Deployment Example:",id:"deployment-example",level:4},{value:"Service Example",id:"service-example",level:4},{value:"Ingress Example:",id:"ingress-example",level:4},{value:"Deployment of our Parachain",id:"deployment-of-our-parachain",level:3},{value:"Deployment Example (collator):",id:"deployment-example-collator",level:4},{value:"Service Example:",id:"service-example-1",level:4},{value:"Public RPC Service:",id:"public-rpc-service",level:4},{value:"Ingress:",id:"ingress",level:4},{value:"What are the challenges we faced?",id:"what-are-the-challenges-we-faced",level:3},{value:"ACM and Route53",id:"acm-and-route53",level:2},{value:"Terraform for Automated Deployment",id:"terraform-for-automated-deployment",level:2},{value:"Github Actions to wrap it all",id:"github-actions-to-wrap-it-all",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-and-automation-of-our-tesnet-deployment-at-hydradx"},"Design and Automation of our Tesnet Deployment at HydraDX"),(0,o.kt)("p",null,"In this article, we are going to show you how we designed and automated our pipeline to be able to deploy a new testnet (Parachain + Relaychain) within minutes using Kubernetes (EKS Fargate), AWS ACM, Route53, Terraform and Github Actions."),(0,o.kt)("h2",{id:"the-choice-of-eks-with-fargate"},"The choice of EKS with Fargate"),(0,o.kt)("h3",{id:"why-eks-with-fargate"},"Why EKS with Fargate?"),(0,o.kt)("p",null,"Our Parachain and Relaychain images are based on two separate images, which need one or more containers to run for each. Kubernetes being the standard of container automation and scaling in the industry today, we naturally made this choice (Docker Swarm has some serious scaling issues that we might talk about in a separate article, if interest be.)"),(0,o.kt)("p",null,"Now, since our infrastructure is partially based on AWS, we had the choice between having either EKS with EC2 instances running under the hood, or using Fargate. The difference between the two is that, with EC2, you have less flexibility as far as controlling the resources is concerned; if you have no idea about the number of pods you need to be running in the future, you most likely will have to overestimate the capacity (CPU / RAM power as well as the number) of your instances, which may result in useless capacity lost and higher bills. Another reason is that these EC2 instances need to be administrated, which needs time and resources."),(0,o.kt)("p",null,"For these reasons, we came to the conclusion that the usage of Fargate might be a better solution for dealing with our deployments and to be able to scale (either up or down) them correctly. In Fargate, you don't need to worry about instances or servers, all you have to do (in a nutshell) is to write your Kubernetes Manifests, apply those, and AWS will take care of the rest; i.e. provisioning the servers, planning the pods, etc."),(0,o.kt)("p",null,"To create a Kubernetes Instance in AWS, you can either use EKSCTL or Terraform. Nothing fancy here. Here is an example for creating a Fargate Cluster (from the documentation):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\n\nmetadata:\n  name: fargate-cluster\n  region: ap-northeast-1\n\nnodeGroups:\n  - name: ng-1\n    instanceType: m5.large\n    desiredCapacity: 1\n\nfargateProfiles:\n  - name: fp-default\n    selectors:\n      # All workloads in the "default" Kubernetes namespace will be\n      # scheduled onto Fargate:\n      - namespace: default\n      # All workloads in the "kube-system" Kubernetes namespace will be\n      # scheduled onto Fargate:\n      - namespace: kube-system\n  - name: fp-dev\n    selectors:\n      # All workloads in the "dev" Kubernetes namespace matching the following\n      # label selectors will be scheduled onto Fargate:\n      - namespace: dev\n        labels:\n          env: dev\n          checks: passed\n')),(0,o.kt)("p",null,"Once done, all we had to do is to create and apply our Kubernetes Objects."),(0,o.kt)("h3",{id:"deployment-of-our-relaychain"},"Deployment of our Relaychain"),(0,o.kt)("h4",{id:"deployment-example"},"Deployment Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: YOUR_NAMESPACE\n  name: relaychain-alice-deployment\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: relaychain-alice\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: relaychain-alice\n    spec:\n      containers:\n      - image: YOUR-IMAGE-HERE\n        imagePullPolicy: Always\n        name: relaychain-alice\n        command: ["/polkadot/polkadot"]\n        args: ["--chain", "/polkadot/config.json", ..."]\n        ports:\n        - containerPort: 9944\n        - containerPort: 30333\n')),(0,o.kt)("p",null,"In this manifest, we choose the name of our node, the ports to expose, the command and its argument (please check HydraDX docs) as well as the number of replicas. This parameter is important as we only want one replica per node, to avoid sync issues. Note that you can have as many nodes as necessary."),(0,o.kt)("h4",{id:"service-example"},"Service Example"),(0,o.kt)("p",null,"We use the Service object in Kubernetes for at least two purposes here:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, so nodes can communicate with each other, please check ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/"},"this link for more info")),(0,o.kt)("li",{parentName:"ol"},"To be able to expose the service to the outside world, if necessary, using an ingress controller.")),(0,o.kt)("p",null,"Nothing fancy, just yet another basic service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  namespace: YOUR_NAMESPACE\n  name: SVC_NAME\nspec:\n  ports:\n    - port: 9944\n      name: websocket\n      targetPort: 9944\n      protocol: TCP\n    - port: 30333\n      name: custom-port\n      targetPort: 30333\n      protocol: TCP\n  type: NodePort\n  selector:\n    app.kubernetes.io/name: relaychain-alice\n")),(0,o.kt)("p",null,"Please note that, if you wish to expose the service to the outside world, the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," parameter becomes crucial."),(0,o.kt)("p",null,"And voil\xe0 ! That's it. Now one last step is when we want to expose a Service (related to a given Deployment) to the outside world. For this, we use what we call an Ingress Object:"),(0,o.kt)("h4",{id:"ingress-example"},"Ingress Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  namespace: YOUR_NAMESPACE\n  name: INGRESS_OBJECT_NAME\n  annotations:\n    kubernetes.io/ingress.class: alb\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/group.name: wstgroup2\n    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=4000\n    alb.ingress.kubernetes.io/auth-session-timeout: '86400'\n    alb.ingress.kubernetes.io/target-type: ip\n    alb.ingress.kubernetes.io/listen-ports: '[{\"HTTP\":443}, {\"HTTPS\":443}]'\n    alb.ingress.kubernetes.io/healthcheck-path: /\n    alb.ingress.kubernetes.io/healthcheck-port: '80'\n    alb.ingress.kubernetes.io/target-group-attributes: stickiness.enabled=true,stickiness.lb_cookie.duration_seconds=600\n    alb.ingress.kubernetes.io/certificate-arn: YOUR_ARN\n  labels:\n    app: relaychain\nspec:\n  rules:\n    - host: relaychain.hydration.cloud\n      http:\n        paths:\n          - path: /ws/\n            backend:\n              serviceName: relaychain-bob-svc\n              servicePort: 80\n\n")),(0,o.kt)("p",null,"This object, namely ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingress"),", is used so our service can be accessible from the outside world using the host address ",(0,o.kt)("inlineCode",{parentName:"p"},"relaychain.hydration.cloud"),". For this, we use the ALB Controller Service of AWS ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html"},"More information here")),(0,o.kt)("p",null,"Parameters of this Ingress are pretty much basic, and can be kept as is ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/guide/ingress/annotations/"},"for more info, please check this link"),". The most important value to change, is the one of ",(0,o.kt)("inlineCode",{parentName:"p"},"alb.ingress.kubernetes.io/certificate-arn"),", which is the identifier of the ACM Certificate you get when you create an entry in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html"},"ACM")," for your ",(0,o.kt)("inlineCode",{parentName:"p"},"host"),". More details later on in this article."),(0,o.kt)("h3",{id:"deployment-of-our-parachain"},"Deployment of our Parachain"),(0,o.kt)("p",null,"Since the steps are pretty much the same, here are simply samples for each object we used to deploy our Parachain:"),(0,o.kt)("h4",{id:"deployment-example-collator"},"Deployment Example (collator):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: YOUR_NAMESPACE\n  name: parachain-coll-01-deployment\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: parachain-coll-01\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: parachain-coll-01\n    spec:\n      containers:\n      - image: YOUR_IMAGE\n        imagePullPolicy: Always\n        name: parachain-coll-01\n        volumeMounts:\n          - mountPath: /tmp\n            name: persistent-storage\n        command: ["/basilisk/basilisk"]\n        args: ["--chain", "local", "--parachain-id", "", "--alice", "--base-path", "/basilisk/", "--node-key", "", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--", "--chain", "/tmp/rococo-local-raw.json", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--base-path", "/basilisk/", "--execution=wasm"]\n        ports:\n        - containerPort: 9944\n        - containerPort: 9933\n        - containerPort: 30333\n      volumes:\n        - name: persistent-storage\n          persistentVolumeClaim:\n            claimName: efs-pv  \n')),(0,o.kt)("h4",{id:"service-example-1"},"Service Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  namespace: NAMESPACE\n  name: coll-01-svc\nspec:\n  ports:\n    - port: 9944\n      name: websocket\n      targetPort: 9944\n      protocol: TCP\n    - port: 30333\n      name: custom-port\n      targetPort: 30333\n      protocol: TCP\n    - port: 9933\n      name: rpc-port\n      targetPort: 9933  \n  type: NodePort\n  selector:\n    app.kubernetes.io/name: parachain-coll-01\n")),(0,o.kt)("h4",{id:"public-rpc-service"},"Public RPC Service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  namespace: NAMESPACE\n  name: public-rpc-svc\nspec:\n  ports:\n    - port: 80\n      name: websocket\n      targetPort: 9944\n      protocol: TCP\n  type: NodePort    \n  selector:\n    app.kubernetes.io/name: public-rpc\n")),(0,o.kt)("h4",{id:"ingress"},"Ingress:"),(0,o.kt)("p",null,"Ingress Manifest remains exactly the same."),(0,o.kt)("h3",{id:"what-are-the-challenges-we-faced"},"What are the challenges we faced?"),(0,o.kt)("p",null,"Apart from the choice that we had to make between EC2 and Fargate instances, we had an issue that wasn't that easy to be dealt with: namely, the ",(0,o.kt)("strong",{parentName:"p"},"volumes"),". During our deployment, we found out that we had to pass a configuration to our Basilisk Command, which could not be stored in a ",(0,o.kt)("inlineCode",{parentName:"p"},"config-map"),", since the configuration was more than 4MB in size, whereas config-maps can only store up to 1MB. Now the problem is that, this is something pretty straight forward to do in Kubernetes (create a Volume, put a file or folder inside and use it from other pods) with EC2, the task isn't so simple with Fargate. In Fargate, Volumes were not supported until August 2020, and the feature is still not mature. So if you have to heavily use volumes in your Kubernetes Deployment, please take this into account. We could however solve this issue following this ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/aws/new-aws-fargate-for-amazon-eks-now-supports-amazon-efs/"},"documentation, with AWS EFS"),". This link will save your ass if you have to use volumes with Fargate, trust me."),(0,o.kt)("h2",{id:"acm-and-route53"},"ACM and Route53"),(0,o.kt)("p",null,"If you need to expose your node to the outside world, with a nice and secured URL, you can use AWS ACM. Basically, all you need to do is to create a certificate with the name of your URL, validate it (via DNS), and get the result ARN. Then add it as a value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"alb.ingress.kubernetes.io/certificate-arn")," parameter in your Ingress Manifest file, and voil\xe0 !"),(0,o.kt)("h2",{id:"terraform-for-automated-deployment"},"Terraform for Automated Deployment"),(0,o.kt)("p",null,"Of course, the creation of your certificate can be done through Terraform, if you want to automate it in your CI (we didn't make this choice, but we will probably deploy it later). However, this .tf file might be of a great help to you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'provider "aws" {\n  region = "eu-west-1"\n}\n\n# DNS Zone Name: hydraction.cloud\nvariable "dns_zone" {\n  description = "Specific to your setup, pick a domain you have in route53"\n  default = "hydration.cloud"\n}\n# subdomain name\nvariable "domain_dns_name" {\n  description = "domainname"\n  default     = "YOUR_SUBDOMAIN"\n}\n\n\n# On cr\xe9e une datasource \xe0 partir du nom de la zone DNS\ndata "aws_route53_zone" "public" {\n  name         = "${var.dns_zone}"\n  private_zone = false\n}\nresource "aws_acm_certificate" "myapp-cert" {\n  domain_name       = "${var.domain_dns_name}.${data.aws_route53_zone.public.name}"\n  #subject_alternative_names = ["${var.alternate_dns_name}.${data.aws_route53_zone.public.name}"]\n  validation_method = "DNS"\n  lifecycle {\n    create_before_destroy = true\n  }\n}\nresource "aws_route53_record" "cert_validation" {\n  for_each = {\n    for dvo in aws_acm_certificate.myapp-cert.domain_validation_options : dvo.domain_name => {\n      name   = dvo.resource_record_name\n      record = dvo.resource_record_value\n      type   = dvo.resource_record_type\n    }\n  }\n  allow_overwrite = true\n  name            = each.value.name\n  records         = [each.value.record]\n  ttl             = 60\n  type            = each.value.type\n  zone_id         = data.aws_route53_zone.public.id\n}\n# This tells terraform to cause the route53 validation to happen\nresource "aws_acm_certificate_validation" "cert" {\n  certificate_arn         = aws_acm_certificate.myapp-cert.arn\n  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]\n}\n\noutput "acm-arn" {\n  value = aws_acm_certificate.myapp-cert.arn\n}\n\n')),(0,o.kt)("p",null,"The output value of this TF is the ARN to be used in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingress")," Manifest file."),(0,o.kt)("h2",{id:"github-actions-to-wrap-it-all"},"Github Actions to wrap it all"),(0,o.kt)("p",null,"Of course, you can just write your manifest files, and deploy your Kubernetes Objects using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply"),", but you might as well want to do it through a CI-CD. We use Github Actions, and it's pretty straightforward:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: deploy app to k8s and expose\non:\n  push: \n    branches:\n      - main\n\njobs:\n  deploy-prod:\n    name: deploy\n    runs-on: ubuntu-latest\n    env:\n      ACTIONS_ALLOW_UNSECURE_COMMANDS: true\n      AWS_ACCESS_KEY_ID: ${{ secrets.K8S_AWS_ACCESS_KEY_ID }}\n      AWS_SECRET_ACCESS_KEY: ${{ secrets.K8S_AWS_SECRET_KEY_ID }}\n      AWS_REGION: ${{ secrets.AWS_REGION }}\n      NAMESPACE: validators_namespace\n      APPNAME1: validator1\n      APPNAME2: validator2\n      DOMAIN: hydration.cloud\n      SUBDOMAIN: validator1\n      IMAGENAME: YOUR_IMAGE\n      CERTIFICATE_ARN: _CERTIFICATEARN_\n    \n    steps:\n      - name: checkout code\n        uses: actions/checkout@v2.1.0\n      \n      - name: run-everything\n        run: |\n          curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl\n          chmod +x ./kubectl\n          sudo mv ./kubectl /usr/local/bin/kubectl\n          export AWS_ACCESS_KEY_ID=${{ env.AWS_ACCESS_KEY_ID }}\n          export AWS_SECRET_ACCESS_KEY=${{ env.AWS_SECRET_ACCESS_KEY }}\n          curl --silent --location \"https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz\" | tar xz -C /tmp\n          sudo mv /tmp/eksctl /usr/local/bin\n          eksctl version\n          aws eks --region eu-west-1 update-kubeconfig --name CLUSTER_NAME\n          kubectl delete all --all -n ${{ env.NAMESPACE }}\n          eksctl create fargateprofile --cluster CLUSTER_NAME --region ${{ env.AWS_REGION }} --name ${{ env.NAMESPACE }} --namespace ${{ env.NAMESPACE }}\n          sed -i 's/_NAMESPACE_/${{ env.NAMESPACE }}/g' components.yaml\n          kubectl apply -f components.yaml\n")),(0,o.kt)("p",null,"This workflow basically creates the fargate profile as well as depoys your manifest file containing all your Kubernetes Objects to your chosen Cluster. Of course, make sure you give the right access and secret keys :)."),(0,o.kt)("p",null,"Good luck!"))}p.isMDXComponent=!0}}]);