import * as yup from 'yup';

export async function validateAuthorizationRequest(request: AuthorizationRequest) {
  return authorizationRequestSchema.validate(request);
}

export const authorizationRequestSchema = yup.object({
  response_type: yup.string().oneOf(['code']).required(),
  client_id: yup.string().required(),
  code_challenge: yup.string().required(),
  code_challenge_method: yup.string().default('plain'),
  redirect_uri: yup.string().required(),
  scope: yup.string().required(),
  state: yup.string().nullable(),
  resource: yup.lazy((val) => (Array.isArray(val) ? yup.array().of(yup.string()) : yup.string()))
});

export type AuthorizationRequest = yup.InferType<typeof authorizationRequestSchema>;
