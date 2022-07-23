import * as yup from "yup";
import { AnyObject, ValidateOptions } from "yup/lib/types";

export async function validateTokenRequest(
  request: TokenRequest,
  options?: ValidateOptions<AnyObject>
) {
  return tokenRequestSchema.validate(request, options);
}

export const tokenRequestSchema = yup.object({
  client_id: yup.string(),
  scope: yup.string().default(""),
  grant_type: yup
    .string()
    .oneOf(["authorization_code", "refresh_token", "client_credentials"])
    .required(),
  client_assertion_type: yup
    .string()
    .oneOf(["urn:ietf:params:oauth:client-assertion-type:jwt-bearer"]),
  client_assertion: yup.string(),
});

export type TokenRequest = yup.InferType<typeof tokenRequestSchema>;

export interface TokenResponse {
  access_token: string;
  scope: string;
  expires_in: number;
  id_token?: string;
  refresh_token?: string;
  token_type: string;
}
