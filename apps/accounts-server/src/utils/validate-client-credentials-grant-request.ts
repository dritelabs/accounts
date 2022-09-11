import * as yup from 'yup';
import { CreateTokenWithClientCredentialsRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenWithClientCredentialsRequest';
import { client } from '@dritelabs/accounts-db';
import { InvalidRequestError, InvalidScopeError } from '@dritelabs/accounts-errors';

export async function validateClientCredentialsGrantRequest(
  request: CreateTokenWithClientCredentialsRequest
) {
  const validation = await clientCredentialsGrantRequestSchema.validate(request).catch((err) => {
    throw new InvalidRequestError(err.message);
  });

  const scopes = await client.scope.findMany({
    where: {
      name: {
        in: validation.scope.split(' ')
      }
    }
  });

  if (scopes.length !== validation.scope.split(' ').length) {
    throw new InvalidScopeError(
      'The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner.'
    );
  }

  return validation;
}

export const clientCredentialsGrantRequestSchema = yup.object({
  scope: yup.string().required(),
  resource: yup.array().of(yup.string()).required()
});
