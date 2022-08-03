import { promisify } from 'util';
import { grpc } from '@drite/accounts-protobuf';
import { CreateTokenRequest } from '@drite/accounts-protobuf/dist/protobuf/token/CreateTokenRequest';
import { CreateTokenResponse } from '@drite/accounts-protobuf/dist/protobuf/token/CreateTokenResponse';
import { client } from '~/lib/client';

export const createAccessToken = promisify<CreateTokenRequest, grpc.Metadata | void, CreateTokenResponse>(
  client.createAccessToken.bind(client)
);
