import * as yup from 'yup';

export async function validateClientCredentialsGrantRequest(request: ClientCredentialsGrantRequest) {
  return clientCredentialsGrantRequestSchema.validate(request);
}

export const clientCredentialsGrantRequestSchema = yup.object({
  scope: yup.string().required(),
  resource: yup.lazy((val) => (Array.isArray(val) ? yup.array().of(yup.string()) : yup.string())),
  grant_type: yup.string().oneOf(['client_credentials']).required()
});

export type ClientCredentialsGrantRequest = yup.InferType<typeof clientCredentialsGrantRequestSchema> & {
  client_id?: string;
  scope?: string;
  resource?: string;
};
