import type * as Types from './schema';

import gql from 'graphql-tag';
export type ClientFragment = (
  { __typename?: 'Client' }
  & Pick<Types.Client, 'id' | 'userId' | 'contacts' | 'description' | 'grantTypes' | 'isFirstParty' | 'jwks' | 'jwksUri' | 'logoUri' | 'name' | 'policyUri' | 'publicKeysConfiguration' | 'redirectUris' | 'responseTypes' | 'refreshTokenRotationType' | 'scope' | 'secret' | 'softwareId' | 'softwareVersion' | 'tokenEndpointAuthMethod' | 'tosUri' | 'type' | 'uri' | 'createdAt' | 'updatedAt'>
);

export const ClientFragmentDoc = gql`
    fragment Client on Client {
  id
  userId
  contacts
  description
  grantTypes
  isFirstParty
  jwks
  jwksUri
  logoUri
  name
  policyUri
  publicKeysConfiguration
  redirectUris
  responseTypes
  refreshTokenRotationType
  scope
  secret
  softwareId
  softwareVersion
  tokenEndpointAuthMethod
  tosUri
  type
  uri
  createdAt
  updatedAt
}
    `;