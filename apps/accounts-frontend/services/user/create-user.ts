import { promisify } from 'util';
import { grpc } from '@drite/accounts-protobuf';
import { CreateUserRequest } from '@drite/accounts-protobuf/dist/protobuf/user/CreateUserRequest';
import { User } from '@drite/accounts-protobuf/dist/protobuf/core/User';
import { client } from '~/lib/client';

export const createUser = promisify<CreateUserRequest, grpc.Metadata | void, User>(
  client.createUser.bind(client)
);
