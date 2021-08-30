(self.webpackChunk=self.webpackChunk||[]).push([[73351],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48805:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>m});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"relay-compat",title:"Compatibility Mode",original_id:"relay-compat"},c=void 0,p={unversionedId:"relay-compat",id:"version-v2.0.0/relay-compat",isDocsHomePage:!1,title:"Compatibility Mode",description:"Migrating a Relay Classic app to Relay Modern doesn't require rewriting from",source:"@site/versioned_docs/version-v2.0.0/Modern-RelayCompat.md",sourceDirName:".",slug:"/relay-compat",permalink:"/docs/v2.0.0/relay-compat",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v2.0.0/Modern-RelayCompat.md",version:"v2.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1630357703,formattedLastUpdatedAt:"8/30/2021",frontMatter:{id:"relay-compat",title:"Compatibility Mode",original_id:"relay-compat"},sidebar:"version-v2.0.0/docs",previous:{title:"New in Relay Modern",permalink:"/docs/v2.0.0/new-in-relay-modern"},next:{title:"Migration Setup",permalink:"/docs/v2.0.0/migration-setup"}},s=[{value:"API and Runtime",id:"api-and-runtime",children:[]},{value:"Getting started",id:"getting-started",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Migrating a Relay Classic app to Relay Modern doesn't require rewriting from\nscratch. Instead, convert one component at a time to the Relay Modern API while\ncontinuing to have a working app. Once all components have been converted, the\nsmaller and faster Relay Modern runtime can be used."),(0,o.kt)("p",null,"During this migration, use the ",(0,o.kt)("a",{parentName:"p",href:"./relay-compat"},"Relay Compat")," tools and APIs to work with both Relay Classic and Relay Modern."),(0,o.kt)("h2",{id:"api-and-runtime"},"API and Runtime"),(0,o.kt)("p",null,"Relay can be thought of as two parts which work together: an API for building\ndata-driven components and a runtime which fetches and stores data from GraphQL\nto populate your app. Relay Modern brings both a new API and a new runtime."),(0,o.kt)("p",null,"In order to incrementally convert an existing codebase, we will need to use the\nRelay Modern API while continuing to use the Relay Classic runtime until all\ncomponents are converted."),(0,o.kt)("p",null,"Relay Compat is part of ",(0,o.kt)("inlineCode",{parentName:"p"},"'react-relay'")," which allows you to do exactly this,\nproviding an identical API to Relay Modern, while allowing interoperability with\nboth runtimes."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"Require the Relay Compat API from ",(0,o.kt)("inlineCode",{parentName:"p"},"'react-relay/compat'")," and use it as you would\nRelay Modern. The components using Relay Compat can be referred to by both other\nRelay Modern and Relay Classic components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const {createFragmentContainer, graphql} = require('react-relay/compat');\n\nclass TodoItem extends React.Component {\n  render() {\n    const item = this.props.item;\n    // ...\n  }\n}\n\nmodule.exports = createFragmentContainer(TodoItem, graphql`\n  fragment TodoItem_item on Todo {\n    text\n    isComplete\n  }\n`);\n")))}m.isMDXComponent=!0}}]);