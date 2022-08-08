import type { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import type { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: never;
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
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Client?: (data: WithTypename<Client>) => null | string,
  JWKPair?: (data: WithTypename<JwkPair>) => null | string,
  Viewer?: (data: WithTypename<Viewer>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    client?: GraphCacheResolver<WithTypename<Query>, QueryClientArgs, WithTypename<Client> | string>,
    clients?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Client> | string>>,
    viewer?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<Viewer> | string>
  },
  Client?: {
    contacts?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Array<Scalars['String'] | string>>,
    createdAt?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    description?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    grantTypes?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Array<Scalars['String'] | string>>,
    id?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    isFirstParty?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['Boolean'] | string>,
    jwks?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['JSONObject'] | string>,
    jwksUri?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    logoUri?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    name?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    policyUri?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    publicKeysConfiguration?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    redirectUris?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Array<Scalars['String'] | string>>,
    refreshTokenRotationType?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    responseTypes?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Array<Scalars['String'] | string>>,
    scope?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    secret?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    softwareId?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    softwareVersion?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    tokenEndpointAuthMethod?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    tosUri?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    type?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    updatedAt?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    uri?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>,
    userId?: GraphCacheResolver<WithTypename<Client>, Record<string, never>, Scalars['String'] | string>
  },
  JWKPair?: {
    privateKey?: GraphCacheResolver<WithTypename<JwkPair>, Record<string, never>, Scalars['JSONObject'] | string>,
    publicKey?: GraphCacheResolver<WithTypename<JwkPair>, Record<string, never>, Scalars['JSONObject'] | string>
  },
  Viewer?: {
    email?: GraphCacheResolver<WithTypename<Viewer>, Record<string, never>, Scalars['String'] | string>,
    firstName?: GraphCacheResolver<WithTypename<Viewer>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Viewer>, Record<string, never>, Scalars['String'] | string>,
    lastName?: GraphCacheResolver<WithTypename<Viewer>, Record<string, never>, Scalars['String'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  addJWKToClient?: GraphCacheOptimisticMutationResolver<MutationAddJwkToClientArgs, Maybe<WithTypename<Client>>>,
  createClient?: GraphCacheOptimisticMutationResolver<MutationCreateClientArgs, Maybe<WithTypename<Client>>>,
  createJWKPair?: GraphCacheOptimisticMutationResolver<Record<string, never>, Maybe<WithTypename<JwkPair>>>,
  deleteClient?: GraphCacheOptimisticMutationResolver<MutationDeleteClientArgs, Maybe<WithTypename<Client>>>,
  updateClient?: GraphCacheOptimisticMutationResolver<MutationUpdateClientArgs, Maybe<WithTypename<Client>>>,
  updateClientSecret?: GraphCacheOptimisticMutationResolver<MutationUpdateClientSecretArgs, Maybe<WithTypename<Client>>>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    addJWKToClient?: GraphCacheUpdateResolver<{ addJWKToClient: Maybe<WithTypename<Client>> }, MutationAddJwkToClientArgs>,
    createClient?: GraphCacheUpdateResolver<{ createClient: Maybe<WithTypename<Client>> }, MutationCreateClientArgs>,
    createJWKPair?: GraphCacheUpdateResolver<{ createJWKPair: Maybe<WithTypename<JwkPair>> }, Record<string, never>>,
    deleteClient?: GraphCacheUpdateResolver<{ deleteClient: Maybe<WithTypename<Client>> }, MutationDeleteClientArgs>,
    updateClient?: GraphCacheUpdateResolver<{ updateClient: Maybe<WithTypename<Client>> }, MutationUpdateClientArgs>,
    updateClientSecret?: GraphCacheUpdateResolver<{ updateClientSecret: Maybe<WithTypename<Client>> }, MutationUpdateClientSecretArgs>
  },
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};