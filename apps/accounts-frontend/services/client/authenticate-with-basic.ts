import { promisify } from 'util';
import { InvalidClientError } from '@drite/accounts-errors';
import { grpc } from '@drite/accounts-protobuf';
import { AuthenticateClientRequest } from '@drite/accounts-protobuf/dist/protobuf/client/AuthenticateClientRequest';
import { Client } from '@drite/accounts-protobuf/dist/protobuf/core/Client';
import { client } from '~/lib/client';

export async function authenticateWithBasic(authorization: string) {
  try {
    const found = await authenticateClientWithBasic({
      credential: authorization
    });

    return found;
  } catch (error) {
    throw new InvalidClientError(error.message);
  }
}

export const authenticateClientWithBasic = promisify<AuthenticateClientRequest, grpc.Metadata | void, Client>(
  client.authenticateClientWithBasic.bind(client)
);
