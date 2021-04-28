(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,u=p["".concat(r,".").concat(b)]||p[b]||m[b]||o;return n?i.a.createElement(u,c(c({ref:t},s),{},{components:n})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},544:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),o=(n(0),n(1142)),r={id:"mutations",title:"Mutations",original_id:"mutations"},c={unversionedId:"mutations",id:"version-v3.0.0/mutations",isDocsHomePage:!1,title:"Mutations",description:"Table of Contents:",source:"@site/versioned_docs/version-v3.0.0/Modern-Mutations.md",slug:"/mutations",permalink:"/docs/v3.0.0/mutations",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v3.0.0/Modern-Mutations.md",version:"v3.0.0",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1619621419,sidebar:"version-v3.0.0/docs",previous:{title:"Pagination Container",permalink:"/docs/v3.0.0/pagination-container"},next:{title:"Subscriptions",permalink:"/docs/v3.0.0/subscriptions"}},l=[{value:"<code>commitMutation</code>",id:"commitmutation",children:[{value:"Arguments",id:"arguments",children:[]}]},{value:"Simple Example",id:"simple-example",children:[]},{value:"Optimistic Updates",id:"optimistic-updates",children:[]},{value:"Updater Configs",id:"updater-configs",children:[{value:"NODE_DELETE",id:"node_delete",children:[]},{value:"RANGE_ADD",id:"range_add",children:[]},{value:"RANGE_DELETE",id:"range_delete",children:[]}]},{value:"Using updater and optimisticUpdater",id:"using-updater-and-optimisticupdater",children:[]},{value:"Committing Local Updates",id:"committing-local-updates",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Table of Contents:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#commitmutation"}),Object(o.b)("inlineCode",{parentName:"a"},"commitMutation"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#simple-example"}),"Simple Example")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#optimistic-updates"}),"Optimistic Updates")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#updater-configs"}),"Updater Configs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#using-updater-and-optimisticupdater"}),"Using updater and optimisticUpdater")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#committing-local-updates"}),"Committing Local Updates"))),Object(o.b)("h2",{id:"commitmutation"},Object(o.b)("inlineCode",{parentName:"h2"},"commitMutation")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation")," to create and execute mutations. ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation")," has the following signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"commitMutation(\n  environment: Environment,\n  config: {\n    mutation: GraphQLTaggedNode,\n    variables: {[name: string]: any},\n    onCompleted?: ?(response: ?Object, errors: ?Array<Error>) => void,\n    onError?: ?(error: Error) => void,\n    optimisticResponse?: Object,\n    optimisticUpdater?: ?(store: RecordSourceSelectorProxy) => void,\n    updater?: ?(store: RecordSourceSelectorProxy, data: SelectorData) => void,\n    configs?: Array<DeclarativeMutationConfig>,\n  },\n);\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"environment"),": The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-environment"}),"Relay Environment"),". ",Object(o.b)("strong",{parentName:"li"},"Note:")," To ensure the mutation is performed on the correct ",Object(o.b)("inlineCode",{parentName:"li"},"environment"),", it's recommended to use the environment available within components (from ",Object(o.b)("inlineCode",{parentName:"li"},"this.props.relay.environment"),"), instead of referencing a global environment."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"config"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mutation"),": The ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," tagged mutation query."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"variables"),": Object containing the variables needed for the mutation. For example, if the mutation defines an ",Object(o.b)("inlineCode",{parentName:"li"},"$input")," variable, this object should contain an ",Object(o.b)("inlineCode",{parentName:"li"},"input")," key, whose shape must match the shape of the data expected by the mutation as defined by the GraphQL schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onCompleted"),": Callback function executed when the request is completed and the in-memory Relay store is updated with the ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," function. Takes a ",Object(o.b)("inlineCode",{parentName:"li"},"response"),' object, which is the "raw" server response, and ',Object(o.b)("inlineCode",{parentName:"li"},"errors"),", an array containing any errors from the server. ."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onError"),": Callback function executed if Relay encounters an error during the request."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse"),": Object containing the data to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. This object must have the same shape as the mutation's response type, as defined by the GraphQL schema. If provided, Relay will use the ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse")," data to update the fields on the relevant records in the local data store, ",Object(o.b)("em",{parentName:"li"},"before")," ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater")," is executed. If an error occurs during the mutation request, the optimistic update will be rolled back."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater"),": Function used to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. If an error occurs during the mutation request, the optimistic update will be rolled back.\nThis function takes a ",Object(o.b)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-store"}),"Relay Store"),". In this function, the client defines 'how to' update the local data via the ",Object(o.b)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",Object(o.b)("inlineCode",{parentName:"li"},"store"),", please refer to our ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-store"}),"Relay Store API Reference"),".\n",Object(o.b)("strong",{parentName:"li"},"Please note:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It is usually preferable to just pass an ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse")," option instead of an ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater"),", unless you need to perform updates on the local records that are more complicated than just updating fields (e.g. deleting records or adding items to collections)."),Object(o.b)("li",{parentName:"ul"},"If you do decide to use an ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater"),", often times it can be the same function as ",Object(o.b)("inlineCode",{parentName:"li"},"updater"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"updater"),": Function used to update the local in-memory store based on the ",Object(o.b)("strong",{parentName:"li"},"real")," server response from the mutation. If ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," is not provided, by default, Relay will know to automatically update the fields on the records referenced in the mutation response; however, you should pass an ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," if you need to make more complicated updates than just updating fields (e.g. deleting records or adding items to collections).\nWhen the server response comes back, Relay first reverts any changes introduced by ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater")," or ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse")," and will then execute ",Object(o.b)("inlineCode",{parentName:"li"},"updater"),".\nThis function takes a ",Object(o.b)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-store"}),"Relay Store"),". In this function, the client defines 'how to' update the local data based on the server response via the ",Object(o.b)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",Object(o.b)("inlineCode",{parentName:"li"},"store"),", please refer to our ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-store"}),"Relay Store API Reference"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"configs"),":  Array containing objects describing ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater"),"/",Object(o.b)("inlineCode",{parentName:"li"},"updater")," configurations. ",Object(o.b)("inlineCode",{parentName:"li"},"configs")," provides a convenient way to specify the ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," behavior without having to write an ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," function. See our section on ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#updater-configs"}),"Updater Configs")," for more details.")))),Object(o.b)("h2",{id:"simple-example"},"Simple Example"),Object(o.b)("p",null,"Example of a simple mutation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import {commitMutation, graphql} from 'react-relay';\n\nconst mutation = graphql`\n  mutation MarkReadNotificationMutation(\n    $input: MarkReadNotificationInput!\n  ) {\n    markReadNotification(data: $input) {\n      notification {\n        seenState\n      }\n    }\n  }\n`;\n\nfunction markNotificationAsRead(environment, source, storyID) {\n  const variables = {\n    input: {\n      source,\n      storyID,\n    },\n  };\n\n  commitMutation(\n    environment,\n    {\n      mutation,\n      variables,\n      onCompleted: (response, errors) => {\n        console.log('Response received from server.')\n      },\n      onError: err => console.error(err),\n    },\n  );\n}\n")),Object(o.b)("h2",{id:"optimistic-updates"},"Optimistic Updates"),Object(o.b)("p",null,'To improve perceived responsiveness, you may wish to perform an "optimistic update", in which the client immediately updates to reflect the anticipated new value even before the response from the server has come back. The simplest way to do this is by providing an ',Object(o.b)("inlineCode",{parentName:"p"},"optimisticResponse")," and adding it to the ",Object(o.b)("inlineCode",{parentName:"p"},"config")," that we pass into ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const mutation = graphql`\n  mutation MarkReadNotificationMutation(\n    $input: MarkReadNotificationInput!\n  ) {\n    markReadNotification(data: $input) {\n      notification {\n        seenState\n      }\n    }\n  }\n`;\n\nconst optimisticResponse = {\n  markReadNotification: {\n    notification: {\n      seenState: SEEN,\n    },\n  },\n};\n\ncommitMutation(\n  environment,\n  {\n    mutation,\n    optimisticResponse,\n    variables,\n  },\n);\n")),Object(o.b)("p",null,"Another way to enable optimistic updates is via the ",Object(o.b)("inlineCode",{parentName:"p"},"optimisticUpdater"),", which can be used for more complicated update scenarios. Using ",Object(o.b)("inlineCode",{parentName:"p"},"optimisticUpdater")," is covered in the section ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#using-updater-and-optimisticupdater"}),"below"),"."),Object(o.b)("h2",{id:"updater-configs"},"Updater Configs"),Object(o.b)("p",null,"We can give Relay instructions in the form of a ",Object(o.b)("inlineCode",{parentName:"p"},"configs")," array on how to use the response from each mutation to update the client-side store. We do this by configuring the mutation with one or more of the following config types:"),Object(o.b)("h3",{id:"node_delete"},"NODE_DELETE"),Object(o.b)("p",null,"Given a deletedIDFieldName, Relay will remove the node(s) from the store."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": this will not remove it from any connection it might be in. If you want to remove a node from a connection, take a look at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#RANGE_DELETE"}),"RANGE_DELETE"),"."),Object(o.b)("h4",{id:"arguments-1"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"deletedIDFieldName: string"),": The field name in the response that contains the DataID or DataIDs of the deleted node or nodes")),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const mutation = graphql`\n  mutation DestroyShipMutation($input: DestroyShipInput!) {\n    destroyShip(input: $input) {\n      destroyedShipId\n      faction {\n        ships {\n          id\n        }\n      }\n    }\n  }\n`;\n\nconst configs = [{\n  type: 'NODE_DELETE',\n  deletedIDFieldName: 'destroyedShipId',\n}];\n")),Object(o.b)("h3",{id:"range_add"},"RANGE_ADD"),Object(o.b)("p",null,"Given a parent, information about the connection, and the name of the newly created edge in the response payload Relay will add the node to the store and attach it to the connection according to the range behavior(s) specified in the connectionInfo."),Object(o.b)("h4",{id:"arguments-2"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"parentID: string"),": The DataID of the parent node that contains the\nconnection."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"connectionInfo: Array<{key: string, filters?: Variables, rangeBehavior:\nstring}>"),": An array of objects containing a connection key, an object\ncontaining optional filters, and a range behavior depending on what behavior we expect (append, prepend, or ignore).",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filters"),": An object containing GraphQL calls e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"const filters = {'orderby': 'chronological'};"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"edgeName: string"),": The field name in the response that represents the newly created edge")),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const mutation = graphql`\n  mutation AddShipMutation($input: AddShipInput!) {\n    addShip(input: $input) {\n      shipEdge {\n        node {\n          name\n        }\n      }\n    }\n  }\n`;\n\nfunction commit(environment, factionId, name) {\n  return commitMutation(environment, {\n    mutation,\n    variables: {\n      input: { factionId, name },\n    },\n    configs: [{\n      type: 'RANGE_ADD',\n      parentID: factionId,\n      connectionInfo: [{\n        key: 'AddShip_ships',\n        rangeBehavior: 'append',\n      }],\n      edgeName: 'shipEdge',\n    }],\n  });\n}\n")),Object(o.b)("h3",{id:"range_delete"},"RANGE_DELETE"),Object(o.b)("p",null,"Given a parent, connectionKeys, one or more DataIDs in the response payload, and\na path between the parent and the connection, Relay will remove the node(s)\nfrom the connection but leave the associated record(s) in the store."),Object(o.b)("h4",{id:"arguments-3"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"parentID: string"),": The DataID of the parent node that contains the\nconnection."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"connectionKeys: Array<{key: string, filters?: Variables}>"),": An array of\nobjects containing a connection key and optionally filters.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filters"),": An object containing GraphQL calls e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"const filters = {'orderby': 'chronological'};"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pathToConnection: Array<string>"),": An array containing the field names between the parent and the connection, including the parent and the connection."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"deletedIDFieldName: string | Array<string>"),": The field name in the response that contains the DataID or DataIDs of the removed node or nodes, or the path to the node or nodes removed from the connection")),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const mutation = graphql`\n  mutation RemoveTagMutation($input: RemoveTagInput!) {\n    removeTag(input: $input) {\n      removedTagId\n    }\n  }\n`;\n\nfunction commit(environment, todoId, tagId) {\n  return commitMutation(environment, {\n    mutation,\n    variables: {\n      input: { todoId, tagId },\n    },\n    configs: [{\n      type: 'RANGE_DELETE',\n      parentID: todoId,\n      connectionKeys: [{\n        key: 'RemoveTags_tags',\n      }],\n      pathToConnection: ['todo', 'tags'],\n      deletedIDFieldName: 'removedTagId',\n    }],\n  });\n}\n")),Object(o.b)("h2",{id:"using-updater-and-optimisticupdater"},"Using updater and optimisticUpdater"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"updater")," and ",Object(o.b)("inlineCode",{parentName:"p"},"optimisticUpdater")," are functions that you can pass to a ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation")," call when you need full control over how to update the local data store, either optimistically, or based on a server response. Often times, both of these can be the same function."),Object(o.b)("p",null,"When you provide these functions, this is roughly what happens during the mutation request:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse")," is provided, Relay will use it to update the fields under the records as specified by the ids in the ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse"),"."),Object(o.b)("li",{parentName:"ul"},"If ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater")," is provided, Relay will execute it and update the store accordingly."),Object(o.b)("li",{parentName:"ul"},"After the network comes back, if any optimistic update was applied, it will be rolled back."),Object(o.b)("li",{parentName:"ul"},"Relay will then automatically update the fields under the record corresponding to the ids in the response payload."),Object(o.b)("li",{parentName:"ul"},"If an ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," was provided, Relay will execute it and update the store accordingly. The server payload will be available to the ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," as a root field in the store.")),Object(o.b)("p",null,"Here are a quick example of adding a todo item to a Todo list using this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/blob/master/todo/data/schema.graphql#L36"}),"example schema"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// AddTodoMutation.js\nimport {commitMutation, graphql} from 'react-relay';\nimport {ConnectionHandler} from 'relay-runtime';\n\nconst mutation = graphql`\n  mutation AddTodoMutation($input: AddTodoInput!) {\n    addTodo(input: $input) {\n      todoEdge {\n        cursor\n        node {\n          complete\n          id\n          text\n        }\n      }\n      viewer {\n        id\n        totalCount\n      }\n    }\n  }\n`;\n\nfunction sharedUpdater(store, user, newEdge) {\n  // Get the current user record from the store\n  const userProxy = store.get(user.id);\n\n  // Get the user's Todo List using ConnectionHandler helper\n  const conn = ConnectionHandler.getConnection(\n    userProxy,\n    'TodoList_todos', // This is the connection identifier, defined here\n    // https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L68\n  );\n\n  // Insert the new todo into the Todo List connection\n  ConnectionHandler.insertEdgeAfter(conn, newEdge);\n}\n\nlet tempID = 0;\n\nfunction commit(environment, text, user) {\n  return commitMutation(environment, {\n    mutation,\n    variables: {\n      input: {\n        text,\n        clientMutationId: tempID++,\n      },\n    },\n    updater: (store) => {\n      // Get the payload returned from the server\n      const payload = store.getRootField('addTodo');\n\n      // Get the edge of the newly created Todo record\n      const newEdge = payload.getLinkedRecord('todoEdge');\n\n      // Add it to the user's todo list\n      sharedUpdater(store, user, newEdge);\n    },\n    optimisticUpdater: (store) => {\n      // Create a Todo record in our store with a temporary ID\n      const id = 'client:newTodo:' + tempID++;\n      const node = store.create(id, 'Todo');\n      node.setValue(text, 'text');\n      node.setValue(id, 'id');\n\n      // Create a new edge that contains the newly created Todo record\n      const newEdge = store.create(\n        'client:newEdge:' + tempID++,\n        'TodoEdge',\n      );\n      newEdge.setLinkedRecord(node, 'node');\n\n      // Add it to the user's todo list\n      sharedUpdater(store, user, newEdge);\n\n      // Given that we don't have a server response here,\n      // we also need to update the todo item count on the user\n      const userRecord = store.get(user.id);\n      userRecord.setValue(\n        userRecord.getValue('totalCount') + 1,\n        'totalCount',\n      );\n    },\n  });\n}\n")),Object(o.b)("p",null,"For details on how to interact with the Relay Store, please refer to our Relay Store ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./relay-store"}),"docs"),"."),Object(o.b)("h2",{id:"committing-local-updates"},"Committing Local Updates"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"commitLocalUpdate")," when you need to update the local store without necessarily executing a mutation (such as in the case of debounced operations). The function takes in a Relay ",Object(o.b)("inlineCode",{parentName:"p"},"environment")," and an ",Object(o.b)("inlineCode",{parentName:"p"},"updater")," function."))}d.isMDXComponent=!0}}]);