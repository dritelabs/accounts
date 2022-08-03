import { promisify } from 'util';
import { grpc } from '@drite/accounts-protobuf';
import { Client } from '@drite/accounts-protobuf/dist/protobuf/core/Client';
import { GetRequest } from '@drite/accounts-protobuf/dist/protobuf/core/GetRequest';
import { client } from '~/lib/client';

export const getClient = promisify<GetRequest, grpc.Metadata | void, Client>(client.getClient.bind(client));
