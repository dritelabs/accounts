import type * as Types from './schema';

import gql from 'graphql-tag';
import { ClientFragmentDoc } from './client';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type AddJwkToClientMutationVariables = Types.Exact<{
  input: Types.AddJwkToClientInput;
}>;

export type AddJwkToClientMutation = { __typename?: 'Mutation' } & {
  addJWKToClient?: Types.Maybe<
    { __typename?: 'Client' } & Pick<
      Types.Client,
      | 'id'
      | 'userId'
      | 'contacts'
      | 'description'
      | 'grantTypes'
      | 'isFirstParty'
      | 'jwks'
      | 'jwksUri'
      | 'logoUri'
      | 'name'
      | 'policyUri'
      | 'publicKeysConfiguration'
      | 'redirectUris'
      | 'responseTypes'
      | 'refreshTokenRotationType'
      | 'scope'
      | 'secret'
      | 'softwareId'
      | 'softwareVersion'
      | 'tokenEndpointAuthMethod'
      | 'tosUri'
      | 'type'
      | 'uri'
      | 'createdAt'
      | 'updatedAt'
    >
  >;
};

export const AddJwkToClientDocument = gql`
  mutation AddJWKToClient($input: AddJWKToClientInput!) {
    addJWKToClient(input: $input) {
      ...Client
    }
  }
  ${ClientFragmentDoc}
`;

export function useAddJwkToClientMutation() {
  return Urql.useMutation<AddJwkToClientMutation, AddJwkToClientMutationVariables>(AddJwkToClientDocument);
}
