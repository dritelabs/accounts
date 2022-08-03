import { promisify } from 'util';
import { grpc } from '@drite/accounts-protobuf';
import { AuthorizationServerMetadata } from '@drite/accounts-protobuf/dist/protobuf/core/AuthorizationServerMetadata';
import { Empty } from '@drite/accounts-protobuf/dist/protobuf/core/Empty';
import { client } from '~/lib/client';

export function getAuthorizationServerMetadata() {
  return _getAuthorizationServerMetadata(null);
}

const _getAuthorizationServerMetadata = promisify<Empty, grpc.Metadata | void, AuthorizationServerMetadata>(
  client.getAuthorizationServerMetadata.bind(client)
);
