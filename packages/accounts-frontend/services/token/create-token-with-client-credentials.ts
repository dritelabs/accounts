import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { CreateTokenWithClientCredentialsRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenWithClientCredentialsRequest';
import { TokenResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/token/TokenResponse';
import { client } from '~/lib/client';

export const createTokenWithClientCredentials = promisify<
  CreateTokenWithClientCredentialsRequest,
  grpc.Metadata | void,
  TokenResponse
>(client.createTokenWithClientCredentials.bind(client));
