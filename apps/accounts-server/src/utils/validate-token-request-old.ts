import * as yup from 'yup';
import { client, prisma } from '@dritelabs/accounts-db';
import {
  InvalidClientError,
  InvalidRequestError,
  InvalidScopeError,
  NotFound,
  UnauthorizedClientError
} from '@dritelabs/accounts-errors';
import { validateAuthorizationCodeGrantRequest } from './validate-authorization-code-grant-request-old';
import { validateRefreshTokenGrantRequest } from './validate-refresh-token-grant-request';
import { CreateTokenRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenRequest';

export async function validateTokenRequest(request: CreateTokenRequest) {
  const hasClientCredentials = !!request.clientCredentials || !!request.clientAssertion;

  await tokenRequestSchema
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

  if (found.grantTypes.includes(request.grantType as prisma.GrantType)) {
    throw new UnauthorizedClientError(
      'The authenticated client is not authorized to use this authorization grant type'
    );
  }

  const scopes = await client.scope.findMany({
    where: {
      name: {
        in: request.scope?.split(' ')
      }
    }
  });

  if (scopes.length !== request.scope?.split(' ').length) {
    throw new InvalidScopeError(
      'The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner.'
    );
  }

  if (request.grantType === 'authorization_code') {
    const verifyResult = await validateAuthorizationCodeGrantRequest(request);

    return {
      aud: verifyResult.payload.aud,
      client: found,
      sub: verifyResult.payload.sub,
      scope: request.scope
    };
  }

  if (request.grantType === 'refresh_token') {
    const verifyResult = await validateRefreshTokenGrantRequest(request);

    return {
      aud: verifyResult.payload.aud,
      client: found,
      sub: verifyResult.payload.sub,
      scope: request.scope
    };
  }

  return {
    aud: request.resource,
    client: found,
    sub: found.userId,
    scope: request.scope
  };
}

export const tokenRequestSchema = yup.object({
  clientId: yup.string().when('$hasCredentials', {
    is: false,
    then: (schema) => schema.required()
  }),
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

  code: yup.string().when('grantType', {
    is: 'authorization_code',
    then: (schema) => schema.required()
  }),
  codeVerifier: yup.string().when('grantType', {
    is: 'authorization_code',
    then: (schema) => schema.required()
  }),
  grantType: yup.string().oneOf(['authorization_code', 'refresh_token', 'client_credentials']).required(),
  refreshToken: yup.string().when('grantType', {
    is: 'refresh_token',
    then: (schema) => schema.required()
  }),
  redirectUri: yup.string().when('grantType', {
    is: 'authorization_code',
    then: (schema) => schema.required()
  }),
  resource: yup
    .array()
    .of(yup.string())
    .when('grantType', {
      is: 'client_credentials',
      then: (schema) => schema.required()
    }),
  scope: yup.string().required()
});

export type TokenRequest = yup.InferType<typeof tokenRequestSchema>;
