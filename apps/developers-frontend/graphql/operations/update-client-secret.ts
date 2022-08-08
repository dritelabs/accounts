import type * as Types from './schema';

import gql from 'graphql-tag';
import { ClientFragmentDoc } from './client';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UpdateClientSecretMutationVariables = Types.Exact<{
  input: Types.UpdateClientSecretInput;
}>;


export type UpdateClientSecretMutation = (
  { __typename?: 'Mutation' }
  & { updateClientSecret?: Types.Maybe<(
    { __typename?: 'Client' }
    & Pick<Types.Client, 'id' | 'userId' | 'contacts' | 'description' | 'grantTypes' | 'isFirstParty' | 'jwks' | 'jwksUri' | 'logoUri' | 'name' | 'policyUri' | 'publicKeysConfiguration' | 'redirectUris' | 'responseTypes' | 'refreshTokenRotationType' | 'scope' | 'secret' | 'softwareId' | 'softwareVersion' | 'tokenEndpointAuthMethod' | 'tosUri' | 'type' | 'uri' | 'createdAt' | 'updatedAt'>
  )> }
);


export const UpdateClientSecretDocument = gql`
    mutation UpdateClientSecret($input: UpdateClientSecretInput!) {
  updateClientSecret(input: $input) {
    ...Client
  }
}
    ${ClientFragmentDoc}`;

export function useUpdateClientSecretMutation() {
  return Urql.useMutation<UpdateClientSecretMutation, UpdateClientSecretMutationVariables>(UpdateClientSecretDocument);
};