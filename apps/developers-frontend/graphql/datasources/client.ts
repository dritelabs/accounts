import { promisify } from 'util';
import { DataSource } from 'apollo-datasource';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AddJWKToClientRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/jwk/AddJWKToClientRequest';
import { Client } from '@dritelabs/accounts-protobuf/dist/protobuf/core/Client';
import { CreateClientRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/client/CreateClientRequest';
import { CreateJWKPairResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/jwk/CreateJWKPairResponse';
import { DeleteRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/core/DeleteRequest';
import { Empty } from '@dritelabs/accounts-protobuf/dist/protobuf/core/Empty';
import { GetRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/core/GetRequest';
import { ListRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/core/ListRequest';
import { ListClientsResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/client/ListClientsResponse';
import { UpdateClientSecretRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/client/UpdateClientSecretRequest';
import { UpdateClientRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/client/UpdateClientRequest';
import { client } from '~/lib/client';
import { Context } from '~/graphql/context';
import { NexusGenInputs } from '~/typegen';

export class ClientAPI extends DataSource {
  context?: Context;

  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  addJWKToClient(request: NexusGenInputs['AddJWKToClientInput']) {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', this.context.session.user.access_token);

    return addJwkToClient(request, metadata);
  }

  createJWKPair() {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', this.context.session.user.access_token);

    return createJwkPair({}, metadata);
  }

  createClient(request: NexusGenInputs['CreateClientInput']) {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', this.context.session.user.access_token);

    return createClient(request, metadata);
  }

  deleteClient(id: string) {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', this.context.session.user.access_token);

    return deleteClient({ id }, metadata);
  }

  getClient(id: string) {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', this.context.session.user.access_token);

    return getClient({ id }, metadata);
  }

  async listClients() {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', this.context.session.user.access_token);

    const res = await listClients({}, metadata);

    return res.clients;
  }

  updateClientSecret(request: NexusGenInputs['UpdateClientSecretInput']) {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', this.context.session.user.access_token);

    return updateClientSecret(request, metadata);
  }

  updateClient(request: NexusGenInputs['UpdateClientInput']) {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', this.context.session.user.access_token);

    return updateClient(request, metadata);
  }
}

const addJwkToClient = promisify<AddJWKToClientRequest, grpc.Metadata | void, Client>(
  client.addJwkToClient.bind(client)
);

const createJwkPair = promisify<Empty, grpc.Metadata | void, CreateJWKPairResponse>(
  client.createJwkPair.bind(client)
);

const createClient = promisify<CreateClientRequest, grpc.Metadata | void, Client>(
  client.createClient.bind(client)
);

const deleteClient = promisify<DeleteRequest, grpc.Metadata | void, Client>(client.deleteClient.bind(client));

const getClient = promisify<GetRequest, grpc.Metadata | void, Client>(client.getClient.bind(client));

const listClients = promisify<ListRequest, grpc.Metadata | void, ListClientsResponse>(
  client.listClients.bind(client)
);

const updateClientSecret = promisify<UpdateClientSecretRequest, grpc.Metadata | void, Client>(
  client.updateClientSecret.bind(client)
);

const updateClient = promisify<UpdateClientRequest, grpc.Metadata | void, Client>(
  client.updateClient.bind(client)
);
