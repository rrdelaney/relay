/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<f04674abb2be1f10fd3370ea358c960d>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RelayModernStoreSubscriptionsTest1Fragment$ref = any;
export type RelayModernStoreSubscriptionsTest1QueryVariables = {|
  size?: ?$ReadOnlyArray<?number>,
|};
export type RelayModernStoreSubscriptionsTest1QueryResponse = {|
  +me: ?{|
    +$fragmentRefs: RelayModernStoreSubscriptionsTest1Fragment$ref,
  |},
|};
export type RelayModernStoreSubscriptionsTest1Query = {|
  variables: RelayModernStoreSubscriptionsTest1QueryVariables,
  response: RelayModernStoreSubscriptionsTest1QueryResponse,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "size"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayModernStoreSubscriptionsTest1Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RelayModernStoreSubscriptionsTest1Fragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayModernStoreSubscriptionsTest1Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "size",
                "variableName": "size"
              }
            ],
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profilePicture",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "uri",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "emailAddresses",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "96ca4ad611d24d4535282552650ac47b",
    "id": null,
    "metadata": {},
    "name": "RelayModernStoreSubscriptionsTest1Query",
    "operationKind": "query",
    "text": "query RelayModernStoreSubscriptionsTest1Query(\n  $size: [Int]\n) {\n  me {\n    ...RelayModernStoreSubscriptionsTest1Fragment\n    id\n  }\n}\n\nfragment RelayModernStoreSubscriptionsTest1Fragment on User {\n  name\n  profilePicture(size: $size) {\n    uri\n  }\n  emailAddresses\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "6a870e1efbbf7359cfbdb0f5f6d8848e";
}

module.exports = node;
