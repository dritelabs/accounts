import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { CreateTokenWithAuthorizationCodeRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenWithAuthorizationCodeRequest';
import { TokenResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/token/TokenResponse';
import { client } from '~/lib/client';

export const createTokenWithAuthorizationCode = promisify<
  CreateTokenWithAuthorizationCodeRequest,
  grpc.Metadata | void,
  TokenResponse
>(client.createTokenWithAuthorizationCode.bind(client));
