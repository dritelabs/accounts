import { InvalidGrantError } from '@drite/accounts-errors';
import { decodeToken } from '@drite/accounts-utils';
import { grpc } from '@drite/accounts-protobuf';
import { ValidateTokenRequest } from '@drite/accounts-protobuf/dist/protobuf/token/ValidateTokenRequest';
import { ValidateTokenResponse } from '@drite/accounts-protobuf/dist/protobuf/token/ValidateTokenResponse';
import { client } from '~/lib/client';
import { promisify } from 'util';

export async function validateRefreshToken(token: string) {
  try {
    await _validateToken({
      token,
      tokenTypeHint: 'refresh_token'
    });

    return decodeToken(token);
  } catch (error) {
    throw new InvalidGrantError(error?.message);
  }
}

const _validateToken = promisify<ValidateTokenRequest, grpc.Metadata | void, ValidateTokenResponse>(
  client.validateToken.bind(client)
);
