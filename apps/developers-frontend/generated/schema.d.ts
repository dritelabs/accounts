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
