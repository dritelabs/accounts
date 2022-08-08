import type * as Types from './schema';

import gql from 'graphql-tag';
import { ClientFragmentDoc } from './client';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UpdateClientMutationVariables = Types.Exact<{
  input: Types.UpdateClientInput;
}>;


export type UpdateClientMutation = (
  { __typename?: 'Mutation' }
  & { updateClient?: Types.Maybe<(
    { __typename?: 'Client' }
    & Pick<Types.Client, 'id' | 'userId' | 'contacts' | 'description' | 'grantTypes' | 'isFirstParty' | 'jwks' | 'jwksUri' | 'logoUri' | 'name' | 'policyUri' | 'publicKeysConfiguration' | 'redirectUris' | 'responseTypes' | 'refreshTokenRotationType' | 'scope' | 'secret' | 'softwareId' | 'softwareVersion' | 'tokenEndpointAuthMethod' | 'tosUri' | 'type' | 'uri' | 'createdAt' | 'updatedAt'>
  )> }
);


export const UpdateClientDocument = gql`
    mutation UpdateClient($input: UpdateClientInput!) {
  updateClient(input: $input) {
    ...Client
  }
}
    ${ClientFragmentDoc}`;

export function useUpdateClientMutation() {
  return Urql.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument);
};