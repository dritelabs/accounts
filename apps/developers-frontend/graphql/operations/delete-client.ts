import type * as Types from './schema';

import gql from 'graphql-tag';
import { ClientFragmentDoc } from './client';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type DeleteClientMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type DeleteClientMutation = (
  { __typename?: 'Mutation' }
  & { deleteClient?: Types.Maybe<(
    { __typename?: 'Client' }
    & Pick<Types.Client, 'id' | 'userId' | 'contacts' | 'description' | 'grantTypes' | 'isFirstParty' | 'jwks' | 'jwksUri' | 'logoUri' | 'name' | 'policyUri' | 'publicKeysConfiguration' | 'redirectUris' | 'responseTypes' | 'refreshTokenRotationType' | 'scope' | 'secret' | 'softwareId' | 'softwareVersion' | 'tokenEndpointAuthMethod' | 'tosUri' | 'type' | 'uri' | 'createdAt' | 'updatedAt'>
  )> }
);


export const DeleteClientDocument = gql`
    mutation DeleteClient($id: String!) {
  deleteClient(id: $id) {
    ...Client
  }
}
    ${ClientFragmentDoc}`;

export function useDeleteClientMutation() {
  return Urql.useMutation<DeleteClientMutation, DeleteClientMutationVariables>(DeleteClientDocument);
};