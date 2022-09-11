import * as yup from 'yup';
import { client, prisma } from '@dritelabs/accounts-db';
import { InvalidClientError, InvalidRequestError, UnauthorizedClientError } from '@dritelabs/accounts-errors';

export async function validateTokenRequest(request: TokenRequest) {
  const hasClientCredentials = !!request.clientCredentials || !!request.clientAssertion;

  const validation = await tokenRequestSchema
    .validate(request, {
      context: { hasClientCredentials }
    })
    .catch((err) => {
      throw new InvalidRequestError(err.message);
    });

  if (request?.clientCredentials && request?.clientAssertion) {
    throw new InvalidRequestError('The authentication method is invalid');
  }

  if (request.grantType === 'client_credentials' && !hasClientCredentials) {
    throw new InvalidClientError('Client authentication failed');
  }

  let found: prisma.Client | undefined;

  if (request?.clientCredentials) {
    found = await client.client.authenticate(request?.clientCredentials, 'client_secret_basic');
  }

  if (request?.clientAssertion) {
    found = await client.client.authenticate(request?.clientAssertion, 'private_key_jwt');
  }

  if (!hasClientCredentials) {
    found = await client.client.authenticate(request.clientId!, 'none');
  }

  if (!found) {
    throw new InvalidClientError('Client does not exist');
  }

  if (found.type === 'web' && !hasClientCredentials) {
    throw new InvalidClientError('Client authentication failed');
  }

  if (!found.grantTypes.includes(request.grantType as prisma.GrantType)) {
    throw new UnauthorizedClientError(
      'The authenticated client is not authorized to use this authorization grant type'
    );
  }

  return {
    client: found,
    validation
  };
}

export const tokenRequestSchema = yup.object({
  clientId: yup.string().required(),
  // .when('$hasCredentials', ([hasCredentials], schema) => (!!!hasCredentials ? schema.required() : schema)),
  clientAssertion: yup.string(),
  clientAssertionType: yup
    .string()
    .oneOf(['urn:ietf:params:oauth:client-assertion-type:jwt-bearer'])
    .when('clientAssertion', ([clientAssertion], schema) => (!!clientAssertion ? schema.required() : schema)),

  clientCredentials: yup
    .string()
    .when('clientAssertion', ([clientAssertion], schema) =>
      !!!clientAssertion ? schema.required() : schema
    ),
  grantType: yup.string().oneOf(['authorization_code', 'refresh_token', 'client_credentials']).required()
});

export type TokenRequest = yup.InferType<typeof tokenRequestSchema>;
