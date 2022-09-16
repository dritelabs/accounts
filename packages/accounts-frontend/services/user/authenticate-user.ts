import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AuthenticateUserRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/user/AuthenticateUserRequest';
import { AuthenticateUserResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/user/AuthenticateUserResponse';
import { client } from '~/lib/client';

export const authenticateUser = promisify<
  AuthenticateUserRequest,
  grpc.Metadata | void,
  AuthenticateUserResponse
>(client.authenticateUser.bind(client));
