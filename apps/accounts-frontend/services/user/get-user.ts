import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { GetRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/core/GetRequest';
import { User } from '@dritelabs/accounts-protobuf/dist/protobuf/core/User';
import { client } from '~/lib/client';

export const getUser = promisify<GetRequest, grpc.Metadata | void, User>(client.getUser.bind(client));
