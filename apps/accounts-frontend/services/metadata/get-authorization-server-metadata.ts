import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AuthorizationServerMetadata } from '@dritelabs/accounts-protobuf/dist/protobuf/core/AuthorizationServerMetadata';
import { Empty } from '@dritelabs/accounts-protobuf/dist/protobuf/core/Empty';
import { client } from '~/lib/client';

export function getAuthorizationServerMetadata() {
  return _getAuthorizationServerMetadata(null);
}

const _getAuthorizationServerMetadata = promisify<Empty, grpc.Metadata | void, AuthorizationServerMetadata>(
  client.getAuthorizationServerMetadata.bind(client)
);
