import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { Client } from '@dritelabs/accounts-protobuf/dist/protobuf/core/Client';
import { GetRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/core/GetRequest';
import { client } from '~/lib/client';

export const getClient = promisify<GetRequest, grpc.Metadata | void, Client>(client.getClient.bind(client));
