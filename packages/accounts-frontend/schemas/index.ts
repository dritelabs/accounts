import { object, string, InferType, array, lazy } from "yup";
export { ValidationError } from "yup";

export const tokenRequestSchema = object({
  client_id: string(),
  scope: string().default(""),
  grant_type: string()
    .oneOf(["authorization_code", "refresh_token", "client_credentials"])
    .required(),
  client_assertion_type: string().oneOf([
    "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  ]),
  client_assertion: string(),
});

export const authorizationCodeGrantTokenRequestSchema = object({
  client_id: string(),
  scope: string().default(""),
  grant_type: string()
    .oneOf(["authorization_code", "refresh_token", "client_credentials"])
    .required(),
  code: string().required(),
  redirect_uri: string().required(),
  code_verifier: string().required(),
  client_assertion_type: string().oneOf([
    "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  ]),
  client_assertion: string(),
});

export const clientCredentialsGrantTokenRequestSchema = object({
  scope: string().default(""),
  grant_type: string()
    .oneOf(["authorization_code", "refresh_token", "client_credentials"])
    .required(),
});

export interface AuthorizationCodeGrantTokenRequest
  extends InferType<typeof authorizationCodeGrantTokenRequestSchema> {}

export const authorizationRequestSchema = object({
  response_type: string().oneOf(["code"]).required(),
  client_id: string().required(),
  code_challenge: string().required(),
  code_challenge_method: string().default("plain"),
  redirect_uri: string().required(),
  scope: string().default(""),
  state: string().nullable(),
  resource: lazy((val) =>
    Array.isArray(val) ? array().of(string()) : string()
  ),
});

export interface AuthorizationRequest
  extends InferType<typeof authorizationRequestSchema> {}

// export const tokeEndpointSchema = object({
//   client_id: string().required(),
//   code_challenge: string().required(),
//   code_challenge_method: string().optional(),
//   redirect_uri: string().optional(),
//   scope: string().optional(),
//   grant_type: string().required(),
//   state: string().optional(),
// });
