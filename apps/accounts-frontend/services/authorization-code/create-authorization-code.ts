import { promisify } from 'util';
import { grpc } from '@drite/accounts-protobuf';
import { CreateAuthorizationCodeRequest } from '@drite/accounts-protobuf/dist/protobuf/authorization_code/CreateAuthorizationCodeRequest';
import { CreateAuthorizationCodeResponse } from '@drite/accounts-protobuf/dist/protobuf/authorization_code/CreateAuthorizationCodeResponse';
import { client } from '~/lib/client';

export const createAuthorizationCode = promisify<
  CreateAuthorizationCodeRequest,
  grpc.Metadata | void,
  CreateAuthorizationCodeResponse
>(client.createAuthorizationCode.bind(client));
