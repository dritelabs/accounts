import type * as Types from './schema';

import gql from 'graphql-tag';
import { ClientFragmentDoc } from './client';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CreateClientMutationVariables = Types.Exact<{
  input: Types.CreateClientInput;
}>;


export type CreateClientMutation = (
  { __typename?: 'Mutation' }
  & { createClient?: Types.Maybe<(
    { __typename?: 'Client' }
    & Pick<Types.Client, 'id' | 'userId' | 'contacts' | 'description' | 'grantTypes' | 'isFirstParty' | 'jwks' | 'jwksUri' | 'logoUri' | 'name' | 'policyUri' | 'publicKeysConfiguration' | 'redirectUris' | 'responseTypes' | 'refreshTokenRotationType' | 'scope' | 'secret' | 'softwareId' | 'softwareVersion' | 'tokenEndpointAuthMethod' | 'tosUri' | 'type' | 'uri' | 'createdAt' | 'updatedAt'>
  )> }
);


export const CreateClientDocument = gql`
    mutation CreateClient($input: CreateClientInput!) {
  createClient(input: $input) {
    ...Client
  }
}
    ${ClientFragmentDoc}`;

export function useCreateClientMutation() {
  return Urql.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument);
};