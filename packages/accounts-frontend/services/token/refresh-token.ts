import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { RefreshTokenRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/RefreshTokenRequest';
import { TokenResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/token/TokenResponse';
import { client } from '~/lib/client';

export const refreshToken = promisify<RefreshTokenRequest, grpc.Metadata | void, TokenResponse>(
  client.refreshToken.bind(client)
);
