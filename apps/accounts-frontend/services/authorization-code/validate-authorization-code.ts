import { InvalidGrantError } from '@dritelabs/accounts-errors';
import { decodeToken } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { ValidateTokenRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/ValidateTokenRequest';
import { ValidateTokenResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/token/ValidateTokenResponse';
import { client } from '~/lib/client';
import { promisify } from 'util';

export async function validateAuthorizationCode(code: string) {
  try {
    await _validateToken({
      token: code,
      tokenTypeHint: 'authorization_code'
    });

    return decodeToken(code);
  } catch (error) {
    throw new InvalidGrantError(error?.message);
  }
}

const _validateToken = promisify<ValidateTokenRequest, grpc.Metadata | void, ValidateTokenResponse>(
  client.validateToken.bind(client)
);
