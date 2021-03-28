(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),o=(t(0),t(199)),i={title:"Introduction of Application CRD"},c={unversionedId:"application",id:"application",isDocsHomePage:!1,title:"Introduction of Application CRD",description:"This documentation will walk through how to use Application object to define your apps with corresponding operational behaviors in declarative approach.",source:"@site/docs/application.md",slug:"/application",permalink:"/docs/application",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/application.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"The `Application` Abstraction",permalink:"/docs/platform-engineers/overview"},next:{title:"Introduction of Definition CRD",permalink:"/docs/platform-engineers/definition-and-templates"}},p=[{value:"Example",id:"example",children:[]},{value:"Conventions and &quot;Standard Contract&quot;",id:"conventions-and-standard-contract",children:[]}],l={toc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This documentation will walk through how to use ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," object to define your apps with corresponding operational behaviors in declarative approach."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The sample application below claimed a ",Object(o.b)("inlineCode",{parentName:"p"},"backend")," component with ",Object(o.b)("em",{parentName:"p"},"Worker")," workload type, and a ",Object(o.b)("inlineCode",{parentName:"p"},"frontend")," component with ",Object(o.b)("em",{parentName:"p"},"Web Service")," workload type."),Object(o.b)("p",null,"Moreover, the ",Object(o.b)("inlineCode",{parentName:"p"},"frontend")," component claimed ",Object(o.b)("inlineCode",{parentName:"p"},"sidecar")," and ",Object(o.b)("inlineCode",{parentName:"p"},"autoscaler")," traits which means the workload will be automatically injected with a ",Object(o.b)("inlineCode",{parentName:"p"},"fluentd")," sidecar and scale from 1-100 replicas triggered by CPU usage."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: autoscaler\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"type: worker")," means the specification of this component (claimed in following ",Object(o.b)("inlineCode",{parentName:"p"},"properties")," section) will be enforced by a ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," object named ",Object(o.b)("inlineCode",{parentName:"p"},"worker")," as below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": context.name\n                }\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": context.name\n                    }\n                    spec: {\n                        containers: [{\n                            name:  context.name\n                            image: parameter.image\n\n                            if parameter["cmd"] != _|_ {\n                                command: parameter.cmd\n                            }\n                        }]\n                    }\n                }\n            }\n        }\n        parameter: {\n            image: string\n            cmd?: [...string]\n        }\n')),Object(o.b)("p",null,"Hence, the ",Object(o.b)("inlineCode",{parentName:"p"},"properties")," section of ",Object(o.b)("inlineCode",{parentName:"p"},"backend")," only supports two parameters: ",Object(o.b)("inlineCode",{parentName:"p"},"image")," and ",Object(o.b)("inlineCode",{parentName:"p"},"cmd"),", this is enforced by the ",Object(o.b)("inlineCode",{parentName:"p"},"parameter")," list of the ",Object(o.b)("inlineCode",{parentName:"p"},".spec.template")," field of the definition."),Object(o.b)("p",null,"The similar extensible abstraction mechanism also applies to traits. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"name: autoscaler")," in ",Object(o.b)("inlineCode",{parentName:"p"},"frontend")," means its trait specification (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"properties")," section) will be enforced by a ",Object(o.b)("inlineCode",{parentName:"p"},"TraitDefinition")," object named ",Object(o.b)("inlineCode",{parentName:"p"},"autoscaler")," as below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "configure k8s HPA for Deployment"\n  name: hpa\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  schematic:\n    cue:\n      template: |\n        outputs: hpa: {\n            apiVersion: "autoscaling/v2beta2"\n            kind:       "HorizontalPodAutoscaler"\n            metadata: name: context.name\n            spec: {\n                scaleTargetRef: {\n                    apiVersion: "apps/v1"\n                    kind:       "Deployment"\n                    name:       context.name\n                }\n                minReplicas: parameter.min\n                maxReplicas: parameter.max\n                metrics: [{\n                    type: "Resource"\n                    resource: {\n                        name: "cpu"\n                        target: {\n                            type:               "Utilization"\n                            averageUtilization: parameter.cpuUtil\n                        }\n                    }\n                }]\n            }\n        }\n        parameter: {\n            min:     *1 | int\n            max:     *10 | int\n            cpuUtil: *50 | int\n        }\n')),Object(o.b)("p",null,"All the definition objects are expected to be defined and installed by platform team. The end users will only focus on ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," resource."),Object(o.b)("h2",{id:"conventions-and-standard-contract"},'Conventions and "Standard Contract"'),Object(o.b)("p",null,"After the ",Object(o.b)("inlineCode",{parentName:"p"},"Application"),' resource is applied to Kubernetes cluster, the KubeVela runtime will generate and manage the underlying resources instances following below "standard contract" and conventions.'),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"Label"),Object(o.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"workload.oam.dev/type=<component definition name>")),Object(o.b)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",Object(o.b)("inlineCode",{parentName:"td"},"ComponentDefinition"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"trait.oam.dev/type=<trait definition name>")),Object(o.b)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",Object(o.b)("inlineCode",{parentName:"td"},"TraitDefinition"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"app.oam.dev/name=<app name>")),Object(o.b)("td",{parentName:"tr",align:"center"},"The name of the application it belongs to")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"app.oam.dev/component=<component name>")),Object(o.b)("td",{parentName:"tr",align:"center"},"The name of the component it belongs to")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"trait.oam.dev/resource=<name of trait resource instance>")),Object(o.b)("td",{parentName:"tr",align:"center"},"The name of trait resource instance")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TBD: the revision names and labels for resource instances are currently work in progress.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TBD: a demo for kubectl apply above Application CR and show full detailed underlying resources.")))}b.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=b(t),s=a,u=m["".concat(i,".").concat(s)]||m[s]||d[s]||o;return t?r.a.createElement(u,c(c({ref:n},l),{},{components:t})):r.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);