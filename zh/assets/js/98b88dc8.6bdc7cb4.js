(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{149:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(199)),l={title:"KubeVela Rollout RoadMap"},i={unversionedId:"rollout/roadmap",id:"rollout/roadmap",isDocsHomePage:!1,title:"KubeVela Rollout RoadMap",description:"Here are some workitems on the roadmap",source:"@site/docs/rollout/roadmap.md",slug:"/rollout/roadmap",permalink:"/zh/docs/rollout/roadmap",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/rollout/roadmap.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021"},c=[{value:"Embed rollout in an application",id:"embed-rollout-in-an-application",children:[]},{value:"Add support to trait upgrade",id:"add-support-to-trait-upgrade",children:[]},{value:"Add metrics based rolling checking",id:"add-metrics-based-rolling-checking",children:[]},{value:"Add traffic shifting support",id:"add-traffic-shifting-support",children:[]},{value:"Support upgrading more than one component",id:"support-upgrading-more-than-one-component",children:[]},{value:"Support Helm Rollout strategy",id:"support-helm-rollout-strategy",children:[]},{value:"Add more restrictions on what part of the rollout plan can be changed during rolling",id:"add-more-restrictions-on-what-part-of-the-rollout-plan-can-be-changed-during-rolling",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here are some workitems on the roadmap"),Object(a.b)("h2",{id:"embed-rollout-in-an-application"},"Embed rollout in an application"),Object(a.b)("p",null,"We will support embedded rollout settings in an application. In this way, any changes to the\napplication will naturally roll out in a controlled manner instead of a sudden replace."),Object(a.b)("h2",{id:"add-support-to-trait-upgrade"},"Add support to trait upgrade"),Object(a.b)("p",null,"There are three trait related workitems that complement each other"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"we need to make sure that traits that work on the previous application still work on the new\napplication"),Object(a.b)("li",{parentName:"ul"},"traits themselves also need a controlled way to upgrade instead of replacing the old in one shot"),Object(a.b)("li",{parentName:"ul"},"rollout controller should suppress conflicting traits (like HPA/Scalar) during the rollout process")),Object(a.b)("h2",{id:"add-metrics-based-rolling-checking"},"Add metrics based rolling checking"),Object(a.b)("p",null,"We will integrate with prometheus and use the metrics generated by the application to control the\nflow of the rollout. This part will be very similar to flagger."),Object(a.b)("h2",{id:"add-traffic-shifting-support"},"Add traffic shifting support"),Object(a.b)("p",null,"We will add traffic shifting based upgrading strategy like canary, A/B testing. We plan to support\nIstio in our first version. This part will be very similar to flagger."),Object(a.b)("h2",{id:"support-upgrading-more-than-one-component"},"Support upgrading more than one component"),Object(a.b)("p",null,"Currently, we can only upgrade one component at a time. We will support upgrading more components in\none application at once."),Object(a.b)("h2",{id:"support-helm-rollout-strategy"},"Support Helm Rollout strategy"),Object(a.b)("p",null,"Currently, we only support upgrading k8s resources. We will support helm based workload in the\nfuture."),Object(a.b)("h2",{id:"add-more-restrictions-on-what-part-of-the-rollout-plan-can-be-changed-during-rolling"},"Add more restrictions on what part of the rollout plan can be changed during rolling"),Object(a.b)("p",null,"Here are some examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the BatchPartition field cannot decrease beyond the current batch"),Object(a.b)("li",{parentName:"ul"},"the RolloutBatches field can only change the part after the current batch"),Object(a.b)("li",{parentName:"ul"},"the ComponentList field cannot be changed after rolling starts"),Object(a.b)("li",{parentName:"ul"},"the RolloutStrategy/TargetSize/NumBatches cannot be changed")))}u.isMDXComponent=!0},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(l,".").concat(b)]||d[b]||s[b]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);