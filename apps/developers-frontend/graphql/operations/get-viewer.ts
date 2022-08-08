import type * as Types from './schema';

import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetViewerQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetViewerQuery = (
  { __typename?: 'Query' }
  & { viewer?: Types.Maybe<(
    { __typename?: 'Viewer' }
    & Pick<Types.Viewer, 'id' | 'email' | 'firstName' | 'lastName'>
  )> }
);


export const GetViewerDocument = gql`
    query GetViewer {
  viewer {
    id
    email
    firstName
    lastName
  }
}
    `;

export function useGetViewerQuery(options: Omit<Urql.UseQueryArgs<never, GetViewerQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetViewerQuery>({ query: GetViewerDocument, ...options });
};