import type { IntrospectionQuery } from 'graphql';
export default {
  __schema: {
    queryType: {
      name: 'Query'
    },
    mutationType: {
      name: 'Mutation'
    },
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'Client',
        fields: [
          {
            name: 'contacts',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'grantTypes',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'isFirstParty',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'jwks',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'jwksUri',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'logoUri',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'policyUri',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'publicKeysConfiguration',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'redirectUris',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'refreshTokenRotationType',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'responseTypes',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'scope',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'secret',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'softwareId',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'softwareVersion',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'tokenEndpointAuthMethod',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'tosUri',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'type',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'uri',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'JWKPair',
        fields: [
          {
            name: 'privateKey',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'publicKey',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Mutation',
        fields: [
          {
            name: 'addJWKToClient',
            type: {
              kind: 'OBJECT',
              name: 'Client',
              ofType: null
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'SCALAR',
                  name: 'Any'
                }
              }
            ]
          },
          {
            name: 'createClient',
            type: {
              kind: 'OBJECT',
              name: 'Client',
              ofType: null
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'SCALAR',
                  name: 'Any'
                }
              }
            ]
          },
          {
            name: 'createJWKPair',
            type: {
              kind: 'OBJECT',
              name: 'JWKPair',
              ofType: null
            },
            args: []
          },
          {
            name: 'deleteClient',
            type: {
              kind: 'OBJECT',
              name: 'Client',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'SCALAR',
                  name: 'Any'
                }
              }
            ]
          },
          {
            name: 'updateClient',
            type: {
              kind: 'OBJECT',
              name: 'Client',
              ofType: null
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'SCALAR',
                  name: 'Any'
                }
              }
            ]
          },
          {
            name: 'updateClientSecret',
            type: {
              kind: 'OBJECT',
              name: 'Client',
              ofType: null
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'SCALAR',
                  name: 'Any'
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'client',
            type: {
              kind: 'OBJECT',
              name: 'Client',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'SCALAR',
                  name: 'Any'
                }
              }
            ]
          },
          {
            name: 'clients',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'OBJECT',
                  name: 'Client',
                  ofType: null
                }
              }
            },
            args: []
          },
          {
            name: 'viewer',
            type: {
              kind: 'OBJECT',
              name: 'Viewer',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Viewer',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'SCALAR',
        name: 'Any'
      }
    ],
    directives: []
  }
} as unknown as IntrospectionQuery;
