import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { CreateTokenRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenRequest';
import { CreateTokenResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenResponse';
import { client } from '~/lib/client';

export const createAccessToken = promisify<CreateTokenRequest, grpc.Metadata | void, CreateTokenResponse>(
  client.createAccessToken.bind(client)
);
