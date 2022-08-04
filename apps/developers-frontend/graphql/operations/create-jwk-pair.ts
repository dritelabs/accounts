import type * as Types from './schema';

import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CreateJwkPairMutationVariables = Types.Exact<{ [key: string]: never }>;

export type CreateJwkPairMutation = { __typename?: 'Mutation' } & {
  createJWKPair?: Types.Maybe<{ __typename?: 'JWKPair' } & Pick<Types.JwkPair, 'privateKey' | 'publicKey'>>;
};

export const CreateJwkPairDocument = gql`
  mutation CreateJWKPair {
    createJWKPair {
      privateKey
      publicKey
    }
  }
`;

export function useCreateJwkPairMutation() {
  return Urql.useMutation<CreateJwkPairMutation, CreateJwkPairMutationVariables>(CreateJwkPairDocument);
}
