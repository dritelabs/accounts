import * as yup from 'yup';
import { InvalidRequestError } from '@dritelabs/accounts-errors';

export async function validateTokenRequest(request: TokenRequest) {
  const hasClientCredentials = !!request.clientCredentials || !!request.clientAssertion;

  return tokenRequestSchema
    .validate(request, {
      context: { hasClientCredentials }
    })
    .catch((err) => {
      throw new InvalidRequestError(err.message);
    });
}

export const tokenRequestSchema = yup.object({
  clientId: yup.string().required(),
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
