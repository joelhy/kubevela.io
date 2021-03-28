(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{158:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),a=(t(0),t(199)),c={title:"Port Forwarding"},p={unversionedId:"developers/port-forward",id:"developers/port-forward",isDocsHomePage:!1,title:"Port Forwarding",description:"Once your web services of the application deployed, you can access it locally via port-forward.",source:"@site/docs/developers/port-forward.md",slug:"/developers/port-forward",permalink:"/docs/developers/port-forward",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/port-forward.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Appfile",permalink:"/docs/developers/learn-appfile"},next:{title:"Check Logs of Container",permalink:"/docs/developers/check-logs"}},i=[],l={toc:i};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Once your web services of the application deployed, you can access it locally via ",Object(a.b)("inlineCode",{parentName:"p"},"port-forward"),". "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ vela ls\nNAME            APP     WORKLOAD      TRAITS    STATUS      CREATED-TIME\nexpress-server  testapp webservice              Deployed    2020-09-18 22:42:04 +0800 CST\n")),Object(a.b)("p",null,"It will directly open browser for you."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ vela port-forward testapp\nForwarding from 127.0.0.1:8080 -> 80\nForwarding from [::1]:8080 -> 80\n\nForward successfully! Opening browser ...\nHandling connection for 8080\nHandling connection for 8080\n")))}s.isMDXComponent=!0},199:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},d=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,b=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?o.a.createElement(b,p(p({ref:r},l),{},{components:t})):o.a.createElement(b,p({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);