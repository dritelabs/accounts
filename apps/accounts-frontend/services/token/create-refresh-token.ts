import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { CreateTokenRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenRequest';
import { CreateTokenResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenResponse';
import { client } from '~/lib/client';

export const createRefreshToken = promisify<CreateTokenRequest, grpc.Metadata | void, CreateTokenResponse>(
  client.createRefreshToken.bind(client)
);
