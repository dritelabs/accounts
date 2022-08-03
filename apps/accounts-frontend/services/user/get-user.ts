import { promisify } from 'util';
import { grpc } from '@drite/accounts-protobuf';
import { GetRequest } from '@drite/accounts-protobuf/dist/protobuf/core/GetRequest';
import { User } from '@drite/accounts-protobuf/dist/protobuf/core/User';
import { client } from '~/lib/client';

export const getUser = promisify<GetRequest, grpc.Metadata | void, User>(client.getUser.bind(client));
