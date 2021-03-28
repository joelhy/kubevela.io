(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return O})),a.d(t,"metadata",(function(){return f})),a.d(t,"toc",(function(){return v})),a.d(t,"default",(function(){return j}));var n=a(3),r=a(7),l=a(0),i=a.n(l),c=a(199),o=a(220),s=a(200),b=a(75),p=a.n(b);var u=37,m=39;var d=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,r=e.values,c=e.groupId,b=e.className,d=Object(o.a)(),h=d.tabGroupChoices,O=d.setTabGroupChoices,f=Object(l.useState)(n),v=f[0],g=f[1],j=l.Children.toArray(e.children),N=[];if(null!=c){var k=h[c];null!=k&&k!==v&&r.some((function(e){return e.value===k}))&&g(k)}var y=function(e){var t=e.target,a=N.indexOf(t),n=j[a].props.value;g(n),null!=c&&(O(c,n),setTimeout((function(){var e,a,n,r,l,i,c,o;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,c=i.innerHeight,o=i.innerWidth,a>=0&&l<=o&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout((function(){return t.classList.remove(p.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case m:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case u:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},b)},r.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(s.a)("tabs__item",p.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:y,onClick:y},a)}))),t?Object(l.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(l.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var h=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},O={title:"Install KubeVela"},f={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Install KubeVela",description:"1. Setup Kubernetes cluster",source:"@site/docs/install.mdx",slug:"/install",permalink:"/docs/install",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/install.mdx",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Core Concepts of KubeVela",permalink:"/docs/concepts"},next:{title:"Quick Start",permalink:"/docs/quick-start"}},v=[{value:"1. Setup Kubernetes cluster",id:"1-setup-kubernetes-cluster",children:[]},{value:"2. Install KubeVela Controller",id:"2-install-kubevela-controller",children:[]},{value:"3. (Optional) Install flux2",id:"3-optional-install-flux2",children:[]},{value:"4. (Optional) Get KubeVela CLI",id:"4-optional-get-kubevela-cli",children:[]},{value:"5. (Optional) Sync Capability from Cluster",id:"5-optional-sync-capability-from-cluster",children:[]},{value:"6. (Optional) Clean Up",id:"6-optional-clean-up",children:[]}],g={toc:v};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-setup-kubernetes-cluster"},"1. Setup Kubernetes cluster"),Object(c.b)("p",null,"Requirements:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Kubernetes cluster >= v1.15.0"),Object(c.b)("li",{parentName:"ul"},"kubectl installed and configured")),Object(c.b)("p",null,"If you don't have K8s cluster from Cloud Provider, you may pick either Minikube or KinD as local cluster testing option."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"NOTE: If you are not using minikube or kind, please make sure to ",Object(c.b)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"install or enable ingress-nginx")," by yourself.")),Object(c.b)(d,{className:"unique-tabs",defaultValue:"minikube",values:[{label:"Minikube",value:"minikube"},{label:"KinD",value:"kind"}],mdxType:"Tabs"},Object(c.b)(h,{value:"minikube",mdxType:"TabItem"},"Follow the minikube [installation guide](https://minikube.sigs.k8s.io/docs/start/).",Object(c.b)("p",null,"Once minikube is installed, create a cluster:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),Object(c.b)("p",null,"Install ingress:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n"))),Object(c.b)(h,{value:"kind",mdxType:"TabItem"},Object(c.b)("p",null,"Follow ",Object(c.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"this guide")," to install kind."),Object(c.b)("p",null,"Then spins up a kind cluster:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),Object(c.b)("p",null,"Then install ",Object(c.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx"},"ingress for kind"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),Object(c.b)("h2",{id:"2-install-kubevela-controller"},"2. Install KubeVela Controller"),Object(c.b)("p",null,"These steps will install KubeVela controller and its dependency."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Add helm chart repo for KubeVela"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://kubevelacharts.oss-cn-hangzhou.aliyuncs.com/core\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Update the chart repo"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install KubeVela"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core\n")),Object(c.b)("p",{parentName:"li"}," By default, it will enable the webhook with a self-signed certificate provided by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"kube-webhook-certgen")),Object(c.b)("p",{parentName:"li"}," If you want to try the latest master branch, add flag ",Object(c.b)("inlineCode",{parentName:"p"},"--devel")," in command ",Object(c.b)("inlineCode",{parentName:"p"},"helm search")," to choose a pre-release\nversion in format ",Object(c.b)("inlineCode",{parentName:"p"},"<next_version>-rc-master")," which means the next release candidate version build on ",Object(c.b)("inlineCode",{parentName:"p"},"master")," branch,\nlike ",Object(c.b)("inlineCode",{parentName:"p"},"0.4.0-rc-master"),"."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm search repo kubevela/vela-core -l --devel\n")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-console"},"    NAME                        CHART VERSION           APP VERSION             DESCRIPTION\n    kubevela/vela-core          0.4.0-rc-master         0.4.0-rc-master         A Helm chart for KubeVela core\n    kubevela/vela-core          0.3.2                   0.3.2                   A Helm chart for KubeVela core\n    kubevela/vela-core          0.3.1                   0.3.1                   A Helm chart for KubeVela core\n")),Object(c.b)("p",{parentName:"li"}," And try the following command to install it."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version <next_version>-rc-master\n")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-console"},'NAME: kubevela\nLAST DEPLOYED: Sat Mar  6 21:03:11 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\n1. Get the application URL by running these commands:\n export POD_NAME=$(kubectl get pods --namespace vela-system -l "app.kubernetes.io/name=vela-core,app.kubernetes.io/instance=kubevela" -o jsonpath="{.items[0].metadata.name}")\n echo "Visit http://127.0.0.1:8080 to use your application"\n kubectl --namespace vela-system port-forward $POD_NAME 8080:80\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install Kubevela with cert-manager (optional)"),Object(c.b)("p",{parentName:"li"},"If cert-manager has been installed, it can be used to take care about generating certs. "),Object(c.b)("p",{parentName:"li"},"You need to install cert-manager before the kubevela chart."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),Object(c.b)("p",{parentName:"li"}," Install kubevela with enabled certmanager:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system --set admissionWebhooks.certManager.enabled=true kubevela kubevela/vela-core\n")))),Object(c.b)("h2",{id:"3-optional-install-flux2"},"3. (Optional) Install flux2"),Object(c.b)("p",null,"This installation step is optional, it's required if you want to register ",Object(c.b)("a",{parentName:"p",href:"https://helm.sh/"},"Helm Chart")," as KubeVela capabilities."),Object(c.b)("p",null,"KubeVela relies on several CRDs and controllers from ",Object(c.b)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2"},"fluxcd/flux2"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"CRD"),Object(c.b)("th",{parentName:"tr",align:null},"Controller Image"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"helmrepositories.source.toolkit.fluxcd.io"),Object(c.b)("td",{parentName:"tr",align:null},"fluxcd/source-controller:v0.9.0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"helmcharts.source.toolkit.fluxcd.io"),Object(c.b)("td",{parentName:"tr",align:null},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"buckets.source.toolkit.fluxcd.io"),Object(c.b)("td",{parentName:"tr",align:null},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"gitrepositories.source.toolkit.fluxcd.io"),Object(c.b)("td",{parentName:"tr",align:null},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"helmreleases.helm.toolkit.fluxcd.io"),Object(c.b)("td",{parentName:"tr",align:null},"fluxcd/helm-controller:v0.8.0")))),Object(c.b)("p",null,"You can install the whole flux2 from their ",Object(c.b)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2"},"official website"),"\nor install the chart with minimal parts provided by KubeVela:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ helm install --create-namespace -n flux-system helm-flux http://oam.dev/catalog/helm-flux2-0.1.0.tgz\n")),Object(c.b)("h2",{id:"4-optional-get-kubevela-cli"},"4. (Optional) Get KubeVela CLI"),Object(c.b)("p",null,"Here are three ways to get KubeVela Cli:"),Object(c.b)(d,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},Object(c.b)(h,{value:"script",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," macOS/Linux ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/install.sh | bash\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Windows")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/install.ps1 | iex"\n'))),Object(c.b)(h,{value:"homebrew",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"macOS/Linux")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),Object(c.b)(h,{value:"download",mdxType:"TabItem"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Download the latest ",Object(c.b)("inlineCode",{parentName:"li"},"vela")," binary from the ",Object(c.b)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"releases page"),"."),Object(c.b)("li",{parentName:"ul"},"Unpack the ",Object(c.b)("inlineCode",{parentName:"li"},"vela")," binary and add it to ",Object(c.b)("inlineCode",{parentName:"li"},"$PATH")," to get started.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Known Issue(",Object(c.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"https://github.com/oam-dev/kubevela/issues/625"),"):\nIf you're using mac, it will report that \u201cvela\u201d cannot be opened because the developer cannot be verified."),Object(c.b)("p",{parentName:"blockquote"},"The new version of MacOS is stricter about running software you've downloaded that isn't signed with an Apple developer key. And we haven't supported that for KubeVela yet.",Object(c.b)("br",{parentName:"p"}),"\n","You can open your 'System Preference' -> 'Security & Privacy' -> General, click the 'Allow Anyway' to temporarily fix it.")))),Object(c.b)("h2",{id:"5-optional-sync-capability-from-cluster"},"5. (Optional) Sync Capability from Cluster"),Object(c.b)("p",null,"If you want to run application from ",Object(c.b)("inlineCode",{parentName:"p"},"vela")," cli, then you should sync capabilities first like below:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela components\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-console"},"Automatically discover capabilities successfully \u2705 Add(5) Update(0) Delete(0)\n\nTYPE        CATEGORY    DESCRIPTION                                                                     \n+task       workload    Describes jobs that run code or a script to completion.                         \n+webservice workload    Describes long-running, scalable, containerized services that have a stable     \n                    network endpoint to receive external network traffic from customers. If workload\n                    type is skipped for any service defined in Appfile, it will be defaulted to     \n                    `webservice` type.                                                              \n+worker     workload    Describes long-running, scalable, containerized services that running at        \n                    backend. They do NOT have network endpoint to receive external network          \n                    traffic.                                                                        \n+ingress    trait       Configures K8s ingress and service to enable web traffic for your service.      \n                    Please use route trait in cap center for advanced usage.                        \n+scaler     trait       Configures replicas for your service.                                           \n\nNAME        DESCRIPTION                                                                                                             \ntask        Describes jobs that run code or a script to completion.                                                                 \nwebservice  Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network\n            traffic from customers. If workload type is skipped for any service defined in Appfile, it will be defaulted to         \n            `webservice` type.                                                                                                      \nworker      Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to  \n            receive external network traffic.   \n")),Object(c.b)("h2",{id:"6-optional-clean-up"},"6. (Optional) Clean Up"),Object(c.b)("details",null,"Run:",Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall -n vela-system kubevela\nrm -r ~/.vela\n")),Object(c.b)("p",null,"This will uninstall KubeVela server component and its dependency components.\nThis also cleans up local CLI cache."),Object(c.b)("p",null,"Then clean up CRDs (CRDs are not removed via helm by default):"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," kubectl delete crd \\\n  applicationconfigurations.core.oam.dev \\\n  applicationdeployments.core.oam.dev \\\n  components.core.oam.dev \\\n  containerizedworkloads.core.oam.dev \\\n  healthscopes.core.oam.dev \\\n  manualscalertraits.core.oam.dev \\\n  podspecworkloads.standard.oam.dev \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n"))))}j.isMDXComponent=!0},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},200:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},220:function(e,t,a){"use strict";var n=a(0),r=a(221);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},221:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r}}]);