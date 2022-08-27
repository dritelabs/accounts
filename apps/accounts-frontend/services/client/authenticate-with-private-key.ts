import { promisify } from 'util';
import { InvalidClientError } from '@dritelabs/accounts-errors';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AuthenticateClientRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/client/AuthenticateClientRequest';
import { Client } from '@dritelabs/accounts-protobuf/dist/protobuf/core/Client';
import { client } from '~/lib/client';

export async function authenticateWithPrivateKey(authorization: string) {
  try {
    const found = await authenticateClientWithPrivateKey({
      credential: authorization
    });

    return found;
  } catch (error) {
    throw new InvalidClientError(error.message);
  }
}

const authenticateClientWithPrivateKey = promisify<AuthenticateClientRequest, grpc.Metadata | void, Client>(
  client.authenticateClientWithPrivateKey.bind(client)
);
