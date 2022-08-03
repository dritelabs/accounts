import { promisify } from 'util';
import { grpc } from '@drite/accounts-protobuf';
import { CreateTokenRequest } from '@drite/accounts-protobuf/dist/protobuf/token/CreateTokenRequest';
import { CreateTokenResponse } from '@drite/accounts-protobuf/dist/protobuf/token/CreateTokenResponse';
import { client } from '~/lib/client';

export const createRefreshToken = promisify<CreateTokenRequest, grpc.Metadata | void, CreateTokenResponse>(
  client.createRefreshToken.bind(client)
);
