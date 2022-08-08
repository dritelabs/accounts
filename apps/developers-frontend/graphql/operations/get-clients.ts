import type * as Types from './schema';

import gql from 'graphql-tag';
import { ClientFragmentDoc } from './client';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetClientsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetClientsQuery = (
  { __typename?: 'Query' }
  & { clients: Array<Types.Maybe<(
    { __typename?: 'Client' }
    & Pick<Types.Client, 'id' | 'userId' | 'contacts' | 'description' | 'grantTypes' | 'isFirstParty' | 'jwks' | 'jwksUri' | 'logoUri' | 'name' | 'policyUri' | 'publicKeysConfiguration' | 'redirectUris' | 'responseTypes' | 'refreshTokenRotationType' | 'scope' | 'secret' | 'softwareId' | 'softwareVersion' | 'tokenEndpointAuthMethod' | 'tosUri' | 'type' | 'uri' | 'createdAt' | 'updatedAt'>
  )>> }
);


export const GetClientsDocument = gql`
    query GetClients {
  clients {
    ...Client
  }
}
    ${ClientFragmentDoc}`;

export function useGetClientsQuery(options: Omit<Urql.UseQueryArgs<never, GetClientsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetClientsQuery>({ query: GetClientsDocument, ...options });
};