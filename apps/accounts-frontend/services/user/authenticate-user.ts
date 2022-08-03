import { promisify } from 'util';
import { grpc } from '@drite/accounts-protobuf';
import { AuthenticateUserRequest } from '@drite/accounts-protobuf/dist/protobuf/user/AuthenticateUserRequest';
import { AuthenticateUserResponse } from '@drite/accounts-protobuf/dist/protobuf/user/AuthenticateUserResponse';
import { client } from '~/lib/client';

export const authenticateUser = promisify<
  AuthenticateUserRequest,
  grpc.Metadata | void,
  AuthenticateUserResponse
>(client.authenticateUser.bind(client));
