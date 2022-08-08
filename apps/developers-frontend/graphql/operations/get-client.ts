import type * as Types from './schema';

import gql from 'graphql-tag';
import { ClientFragmentDoc } from './client';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetClientQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type GetClientQuery = (
  { __typename?: 'Query' }
  & { client?: Types.Maybe<(
    { __typename?: 'Client' }
    & Pick<Types.Client, 'id' | 'userId' | 'contacts' | 'description' | 'grantTypes' | 'isFirstParty' | 'jwks' | 'jwksUri' | 'logoUri' | 'name' | 'policyUri' | 'publicKeysConfiguration' | 'redirectUris' | 'responseTypes' | 'refreshTokenRotationType' | 'scope' | 'secret' | 'softwareId' | 'softwareVersion' | 'tokenEndpointAuthMethod' | 'tosUri' | 'type' | 'uri' | 'createdAt' | 'updatedAt'>
  )> }
);


export const GetClientDocument = gql`
    query GetClient($id: String!) {
  client(id: $id) {
    ...Client
  }
}
    ${ClientFragmentDoc}`;

export function useGetClientQuery(options: Omit<Urql.UseQueryArgs<never, GetClientQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetClientQuery>({ query: GetClientDocument, ...options });
};