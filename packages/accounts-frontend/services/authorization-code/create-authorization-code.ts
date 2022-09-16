import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { CreateAuthorizationCodeRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/authorization_code/CreateAuthorizationCodeRequest';
import { CreateAuthorizationCodeResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/authorization_code/CreateAuthorizationCodeResponse';
import { client } from '~/lib/client';

export const createAuthorizationCode = promisify<
  CreateAuthorizationCodeRequest,
  grpc.Metadata | void,
  CreateAuthorizationCodeResponse
>(client.createAuthorizationCode.bind(client));
