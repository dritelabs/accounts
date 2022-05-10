import { object, string, array, lazy } from "yup";
import * as yup from "yup";
export { ValidationError } from "yup";

export const tokenRequestSchema = yup.object({
  client_id: yup.string(),
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
  code: string().required(),
  redirect_uri: string().required(),
  code_verifier: string().required(),
});

export const clientCredentialsGrantTokenRequestSchema = object({
  scope: string().default(""),
  resource: lazy((val) =>
    Array.isArray(val) ? array().of(string()) : string()
  ),
  grant_type: string()
    .oneOf(["authorization_code", "refresh_token", "client_credentials"])
    .required(),
});

export const refreshTokenGrantTokenRequestSchema = object({
  refresh_token: string().required(),
});

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
