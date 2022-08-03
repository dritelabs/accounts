import { DocumentNode } from 'graphql';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type AddJwkToClientInput = {
  clientId: Scalars['String'];
  jwk: Scalars['JSONObject'];
};

export type Client = {
  __typename?: 'Client';
  contacts?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  grantTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  isFirstParty?: Maybe<Scalars['Boolean']>;
  jwks?: Maybe<Scalars['JSONObject']>;
  jwksUri?: Maybe<Scalars['String']>;
  logoUri?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  policyUri?: Maybe<Scalars['String']>;
  publicKeysConfiguration?: Maybe<Scalars['String']>;
  redirectUris?: Maybe<Array<Maybe<Scalars['String']>>>;
  refreshTokenRotationType?: Maybe<Scalars['String']>;
  responseTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  scope?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  softwareId?: Maybe<Scalars['String']>;
  softwareVersion?: Maybe<Scalars['String']>;
  tokenEndpointAuthMethod?: Maybe<Scalars['String']>;
  tosUri?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type CreateClientInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type JwkPair = {
  __typename?: 'JWKPair';
  privateKey?: Maybe<Scalars['JSONObject']>;
  publicKey?: Maybe<Scalars['JSONObject']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addJWKToClient?: Maybe<Client>;
  createClient?: Maybe<Client>;
  createJWKPair?: Maybe<JwkPair>;
  deleteClient?: Maybe<Client>;
  updateClient?: Maybe<Client>;
  updateClientSecret?: Maybe<Client>;
};

export type MutationAddJwkToClientArgs = {
  input?: InputMaybe<AddJwkToClientInput>;
};

export type MutationCreateClientArgs = {
  input?: InputMaybe<CreateClientInput>;
};

export type MutationDeleteClientArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type MutationUpdateClientArgs = {
  input?: InputMaybe<UpdateClientInput>;
};

export type MutationUpdateClientSecretArgs = {
  input?: InputMaybe<UpdateClientSecretInput>;
};

export type Query = {
  __typename?: 'Query';
  client?: Maybe<Client>;
  clients: Array<Maybe<Client>>;
  viewer?: Maybe<Viewer>;
};

export type QueryClientArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type UpdateClientInput = {
  contacts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  grantTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
  jwksUri?: InputMaybe<Scalars['String']>;
  logoUri?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  policyUri?: InputMaybe<Scalars['String']>;
  publicKeysConfiguration?: InputMaybe<Scalars['String']>;
  redirectUris?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  refreshTokenRotationType?: InputMaybe<Scalars['String']>;
  responseTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  softwareId?: InputMaybe<Scalars['String']>;
  softwareVersion?: InputMaybe<Scalars['String']>;
  tokenEndpointAuthMethod?: InputMaybe<Scalars['String']>;
  tosUri?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type UpdateClientSecretInput = {
  id: Scalars['String'];
};

export type Viewer = {
  __typename?: 'Viewer';
  id?: Maybe<Scalars['String']>;
};

export type AddJwkToClientMutationVariables = Exact<{
  input: AddJwkToClientInput;
}>;

export type AddJwkToClientMutation = {
  __typename?: 'Mutation';
  addJWKToClient?: {
    __typename?: 'Client';
    id?: string | null;
    userId?: string | null;
    contacts?: Array<string | null> | null;
    description?: string | null;
    grantTypes?: Array<string | null> | null;
    isFirstParty?: boolean | null;
    jwks?: any | null;
    jwksUri?: string | null;
    logoUri?: string | null;
    name?: string | null;
    policyUri?: string | null;
    publicKeysConfiguration?: string | null;
    redirectUris?: Array<string | null> | null;
    responseTypes?: Array<string | null> | null;
    refreshTokenRotationType?: string | null;
    scope?: string | null;
    secret?: string | null;
    softwareId?: string | null;
    softwareVersion?: string | null;
    tokenEndpointAuthMethod?: string | null;
    tosUri?: string | null;
    type?: string | null;
    uri?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type ClientFragment = {
  __typename?: 'Client';
  id?: string | null;
  userId?: string | null;
  contacts?: Array<string | null> | null;
  description?: string | null;
  grantTypes?: Array<string | null> | null;
  isFirstParty?: boolean | null;
  jwks?: any | null;
  jwksUri?: string | null;
  logoUri?: string | null;
  name?: string | null;
  policyUri?: string | null;
  publicKeysConfiguration?: string | null;
  redirectUris?: Array<string | null> | null;
  responseTypes?: Array<string | null> | null;
  refreshTokenRotationType?: string | null;
  scope?: string | null;
  secret?: string | null;
  softwareId?: string | null;
  softwareVersion?: string | null;
  tokenEndpointAuthMethod?: string | null;
  tosUri?: string | null;
  type?: string | null;
  uri?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateClientMutationVariables = Exact<{
  input: CreateClientInput;
}>;

export type CreateClientMutation = {
  __typename?: 'Mutation';
  createClient?: {
    __typename?: 'Client';
    id?: string | null;
    userId?: string | null;
    contacts?: Array<string | null> | null;
    description?: string | null;
    grantTypes?: Array<string | null> | null;
    isFirstParty?: boolean | null;
    jwks?: any | null;
    jwksUri?: string | null;
    logoUri?: string | null;
    name?: string | null;
    policyUri?: string | null;
    publicKeysConfiguration?: string | null;
    redirectUris?: Array<string | null> | null;
    responseTypes?: Array<string | null> | null;
    refreshTokenRotationType?: string | null;
    scope?: string | null;
    secret?: string | null;
    softwareId?: string | null;
    softwareVersion?: string | null;
    tokenEndpointAuthMethod?: string | null;
    tosUri?: string | null;
    type?: string | null;
    uri?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type CreateJwkPairMutationVariables = Exact<{ [key: string]: never }>;

export type CreateJwkPairMutation = {
  __typename?: 'Mutation';
  createJWKPair?: { __typename?: 'JWKPair'; privateKey?: any | null; publicKey?: any | null } | null;
};

export type DeleteClientMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteClientMutation = {
  __typename?: 'Mutation';
  deleteClient?: {
    __typename?: 'Client';
    id?: string | null;
    userId?: string | null;
    contacts?: Array<string | null> | null;
    description?: string | null;
    grantTypes?: Array<string | null> | null;
    isFirstParty?: boolean | null;
    jwks?: any | null;
    jwksUri?: string | null;
    logoUri?: string | null;
    name?: string | null;
    policyUri?: string | null;
    publicKeysConfiguration?: string | null;
    redirectUris?: Array<string | null> | null;
    responseTypes?: Array<string | null> | null;
    refreshTokenRotationType?: string | null;
    scope?: string | null;
    secret?: string | null;
    softwareId?: string | null;
    softwareVersion?: string | null;
    tokenEndpointAuthMethod?: string | null;
    tosUri?: string | null;
    type?: string | null;
    uri?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type GetClientQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetClientQuery = {
  __typename?: 'Query';
  client?: {
    __typename?: 'Client';
    id?: string | null;
    userId?: string | null;
    contacts?: Array<string | null> | null;
    description?: string | null;
    grantTypes?: Array<string | null> | null;
    isFirstParty?: boolean | null;
    jwks?: any | null;
    jwksUri?: string | null;
    logoUri?: string | null;
    name?: string | null;
    policyUri?: string | null;
    publicKeysConfiguration?: string | null;
    redirectUris?: Array<string | null> | null;
    responseTypes?: Array<string | null> | null;
    refreshTokenRotationType?: string | null;
    scope?: string | null;
    secret?: string | null;
    softwareId?: string | null;
    softwareVersion?: string | null;
    tokenEndpointAuthMethod?: string | null;
    tosUri?: string | null;
    type?: string | null;
    uri?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type GetClientsQueryVariables = Exact<{ [key: string]: never }>;

export type GetClientsQuery = {
  __typename?: 'Query';
  clients: Array<{
    __typename?: 'Client';
    id?: string | null;
    userId?: string | null;
    contacts?: Array<string | null> | null;
    description?: string | null;
    grantTypes?: Array<string | null> | null;
    isFirstParty?: boolean | null;
    jwks?: any | null;
    jwksUri?: string | null;
    logoUri?: string | null;
    name?: string | null;
    policyUri?: string | null;
    publicKeysConfiguration?: string | null;
    redirectUris?: Array<string | null> | null;
    responseTypes?: Array<string | null> | null;
    refreshTokenRotationType?: string | null;
    scope?: string | null;
    secret?: string | null;
    softwareId?: string | null;
    softwareVersion?: string | null;
    tokenEndpointAuthMethod?: string | null;
    tosUri?: string | null;
    type?: string | null;
    uri?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
};

export type UpdateClientSecretMutationVariables = Exact<{
  input: UpdateClientSecretInput;
}>;

export type UpdateClientSecretMutation = {
  __typename?: 'Mutation';
  updateClientSecret?: {
    __typename?: 'Client';
    id?: string | null;
    userId?: string | null;
    contacts?: Array<string | null> | null;
    description?: string | null;
    grantTypes?: Array<string | null> | null;
    isFirstParty?: boolean | null;
    jwks?: any | null;
    jwksUri?: string | null;
    logoUri?: string | null;
    name?: string | null;
    policyUri?: string | null;
    publicKeysConfiguration?: string | null;
    redirectUris?: Array<string | null> | null;
    responseTypes?: Array<string | null> | null;
    refreshTokenRotationType?: string | null;
    scope?: string | null;
    secret?: string | null;
    softwareId?: string | null;
    softwareVersion?: string | null;
    tokenEndpointAuthMethod?: string | null;
    tosUri?: string | null;
    type?: string | null;
    uri?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type UpdateClientMutationVariables = Exact<{
  input: UpdateClientInput;
}>;

export type UpdateClientMutation = {
  __typename?: 'Mutation';
  updateClient?: {
    __typename?: 'Client';
    id?: string | null;
    userId?: string | null;
    contacts?: Array<string | null> | null;
    description?: string | null;
    grantTypes?: Array<string | null> | null;
    isFirstParty?: boolean | null;
    jwks?: any | null;
    jwksUri?: string | null;
    logoUri?: string | null;
    name?: string | null;
    policyUri?: string | null;
    publicKeysConfiguration?: string | null;
    redirectUris?: Array<string | null> | null;
    responseTypes?: Array<string | null> | null;
    refreshTokenRotationType?: string | null;
    scope?: string | null;
    secret?: string | null;
    softwareId?: string | null;
    softwareVersion?: string | null;
    tokenEndpointAuthMethod?: string | null;
    tosUri?: string | null;
    type?: string | null;
    uri?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export const ClientFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Client' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Client' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contacts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'grantTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFirstParty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwksUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'policyUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publicKeysConfiguration' } },
          { kind: 'Field', name: { kind: 'Name', value: 'redirectUris' } },
          { kind: 'Field', name: { kind: 'Name', value: 'responseTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenRotationType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'scope' } },
          { kind: 'Field', name: { kind: 'Name', value: 'secret' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareVersion' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenEndpointAuthMethod' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tosUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode;
export const AddJwkToClientDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddJWKToClient' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddJWKToClientInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addJWKToClient' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Client' } }]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Client' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Client' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contacts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'grantTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFirstParty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwksUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'policyUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publicKeysConfiguration' } },
          { kind: 'Field', name: { kind: 'Name', value: 'redirectUris' } },
          { kind: 'Field', name: { kind: 'Name', value: 'responseTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenRotationType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'scope' } },
          { kind: 'Field', name: { kind: 'Name', value: 'secret' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareVersion' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenEndpointAuthMethod' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tosUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode;

/**
 * __useAddJwkToClientMutation__
 *
 * To run a mutation, you first call `useAddJwkToClientMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddJwkToClientMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddJwkToClientMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useAddJwkToClientMutation(
  options:
    | VueApolloComposable.UseMutationOptions<AddJwkToClientMutation, AddJwkToClientMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<AddJwkToClientMutation, AddJwkToClientMutationVariables>
      >
) {
  return VueApolloComposable.useMutation<AddJwkToClientMutation, AddJwkToClientMutationVariables>(
    AddJwkToClientDocument,
    options
  );
}
export type AddJwkToClientMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  AddJwkToClientMutation,
  AddJwkToClientMutationVariables
>;
export const CreateClientDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateClient' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateClientInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createClient' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Client' } }]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Client' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Client' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contacts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'grantTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFirstParty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwksUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'policyUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publicKeysConfiguration' } },
          { kind: 'Field', name: { kind: 'Name', value: 'redirectUris' } },
          { kind: 'Field', name: { kind: 'Name', value: 'responseTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenRotationType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'scope' } },
          { kind: 'Field', name: { kind: 'Name', value: 'secret' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareVersion' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenEndpointAuthMethod' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tosUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateClientMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateClientMutation(
  options:
    | VueApolloComposable.UseMutationOptions<CreateClientMutation, CreateClientMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<CreateClientMutation, CreateClientMutationVariables>
      >
) {
  return VueApolloComposable.useMutation<CreateClientMutation, CreateClientMutationVariables>(
    CreateClientDocument,
    options
  );
}
export type CreateClientMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CreateClientMutation,
  CreateClientMutationVariables
>;
export const CreateJwkPairDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateJWKPair' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createJWKPair' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'privateKey' } },
                { kind: 'Field', name: { kind: 'Name', value: 'publicKey' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode;

/**
 * __useCreateJwkPairMutation__
 *
 * To run a mutation, you first call `useCreateJwkPairMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateJwkPairMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateJwkPairMutation();
 */
export function useCreateJwkPairMutation(
  options:
    | VueApolloComposable.UseMutationOptions<CreateJwkPairMutation, CreateJwkPairMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<CreateJwkPairMutation, CreateJwkPairMutationVariables>
      > = {}
) {
  return VueApolloComposable.useMutation<CreateJwkPairMutation, CreateJwkPairMutationVariables>(
    CreateJwkPairDocument,
    options
  );
}
export type CreateJwkPairMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CreateJwkPairMutation,
  CreateJwkPairMutationVariables
>;
export const DeleteClientDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteClient' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteClient' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Client' } }]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Client' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Client' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contacts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'grantTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFirstParty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwksUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'policyUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publicKeysConfiguration' } },
          { kind: 'Field', name: { kind: 'Name', value: 'redirectUris' } },
          { kind: 'Field', name: { kind: 'Name', value: 'responseTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenRotationType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'scope' } },
          { kind: 'Field', name: { kind: 'Name', value: 'secret' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareVersion' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenEndpointAuthMethod' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tosUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode;

/**
 * __useDeleteClientMutation__
 *
 * To run a mutation, you first call `useDeleteClientMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClientMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteClientMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClientMutation(
  options:
    | VueApolloComposable.UseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>
      >
) {
  return VueApolloComposable.useMutation<DeleteClientMutation, DeleteClientMutationVariables>(
    DeleteClientDocument,
    options
  );
}
export type DeleteClientMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteClientMutation,
  DeleteClientMutationVariables
>;
export const GetClientDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetClient' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'client' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Client' } }]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Client' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Client' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contacts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'grantTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFirstParty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwksUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'policyUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publicKeysConfiguration' } },
          { kind: 'Field', name: { kind: 'Name', value: 'redirectUris' } },
          { kind: 'Field', name: { kind: 'Name', value: 'responseTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenRotationType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'scope' } },
          { kind: 'Field', name: { kind: 'Name', value: 'secret' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareVersion' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenEndpointAuthMethod' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tosUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode;

/**
 * __useGetClientQuery__
 *
 * To run a query within a Vue component, call `useGetClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetClientQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetClientQuery(
  variables:
    | GetClientQueryVariables
    | VueCompositionApi.Ref<GetClientQueryVariables>
    | ReactiveFunction<GetClientQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<GetClientQuery, GetClientQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetClientQuery, GetClientQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetClientQuery, GetClientQueryVariables>> = {}
) {
  return VueApolloComposable.useQuery<GetClientQuery, GetClientQueryVariables>(
    GetClientDocument,
    variables,
    options
  );
}
export function useGetClientLazyQuery(
  variables:
    | GetClientQueryVariables
    | VueCompositionApi.Ref<GetClientQueryVariables>
    | ReactiveFunction<GetClientQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<GetClientQuery, GetClientQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetClientQuery, GetClientQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetClientQuery, GetClientQueryVariables>> = {}
) {
  return VueApolloComposable.useLazyQuery<GetClientQuery, GetClientQueryVariables>(
    GetClientDocument,
    variables,
    options
  );
}
export type GetClientQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GetClientQuery,
  GetClientQueryVariables
>;
export const GetClientsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetClients' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'clients' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Client' } }]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Client' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Client' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contacts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'grantTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFirstParty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwksUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'policyUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publicKeysConfiguration' } },
          { kind: 'Field', name: { kind: 'Name', value: 'redirectUris' } },
          { kind: 'Field', name: { kind: 'Name', value: 'responseTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenRotationType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'scope' } },
          { kind: 'Field', name: { kind: 'Name', value: 'secret' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareVersion' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenEndpointAuthMethod' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tosUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode;

/**
 * __useGetClientsQuery__
 *
 * To run a query within a Vue component, call `useGetClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetClientsQuery();
 */
export function useGetClientsQuery(
  options:
    | VueApolloComposable.UseQueryOptions<GetClientsQuery, GetClientsQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetClientsQuery, GetClientsQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetClientsQuery, GetClientsQueryVariables>> = {}
) {
  return VueApolloComposable.useQuery<GetClientsQuery, GetClientsQueryVariables>(
    GetClientsDocument,
    {},
    options
  );
}
export function useGetClientsLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<GetClientsQuery, GetClientsQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetClientsQuery, GetClientsQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetClientsQuery, GetClientsQueryVariables>> = {}
) {
  return VueApolloComposable.useLazyQuery<GetClientsQuery, GetClientsQueryVariables>(
    GetClientsDocument,
    {},
    options
  );
}
export type GetClientsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GetClientsQuery,
  GetClientsQueryVariables
>;
export const UpdateClientSecretDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateClientSecret' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateClientSecretInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateClientSecret' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Client' } }]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Client' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Client' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contacts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'grantTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFirstParty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwksUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'policyUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publicKeysConfiguration' } },
          { kind: 'Field', name: { kind: 'Name', value: 'redirectUris' } },
          { kind: 'Field', name: { kind: 'Name', value: 'responseTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenRotationType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'scope' } },
          { kind: 'Field', name: { kind: 'Name', value: 'secret' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareVersion' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenEndpointAuthMethod' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tosUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode;

/**
 * __useUpdateClientSecretMutation__
 *
 * To run a mutation, you first call `useUpdateClientSecretMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientSecretMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateClientSecretMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClientSecretMutation(
  options:
    | VueApolloComposable.UseMutationOptions<UpdateClientSecretMutation, UpdateClientSecretMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateClientSecretMutation,
          UpdateClientSecretMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<UpdateClientSecretMutation, UpdateClientSecretMutationVariables>(
    UpdateClientSecretDocument,
    options
  );
}
export type UpdateClientSecretMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  UpdateClientSecretMutation,
  UpdateClientSecretMutationVariables
>;
export const UpdateClientDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateClient' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateClientInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateClient' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Client' } }]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Client' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Client' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contacts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'grantTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFirstParty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jwksUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'policyUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publicKeysConfiguration' } },
          { kind: 'Field', name: { kind: 'Name', value: 'redirectUris' } },
          { kind: 'Field', name: { kind: 'Name', value: 'responseTypes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenRotationType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'scope' } },
          { kind: 'Field', name: { kind: 'Name', value: 'secret' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'softwareVersion' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenEndpointAuthMethod' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tosUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateClientMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClientMutation(
  options:
    | VueApolloComposable.UseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>
      >
) {
  return VueApolloComposable.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(
    UpdateClientDocument,
    options
  );
}
export type UpdateClientMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  UpdateClientMutation,
  UpdateClientMutationVariables
>;
