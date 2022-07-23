import * as yup from "yup";
import { InvalidClientError, InvalidGrantError } from "@driten/accounts-errors";
import { decodeToken } from "@driten/accounts-utils";
import { codeChallenge } from "@driten/accounts-utils";

export async function validateAuthorizationCodeGrantRequest(
  request: AuthorizationCodeGrantRequest
) {
  const validation = await authorizationCodeGrantRequestSchema.validate(
    request
  );

  const decoded = await decodeToken(validation.code);

  if (decoded.client_id !== request.client_id) {
    throw new InvalidClientError(
      "The provided authorization grant was issued to another client."
    );
  }

  const _codeChallenge = codeChallenge(
    request.code_verifier,
    decoded.code_challenge_method as "plain" | "S256"
  );

  if (decoded.code_challenge !== _codeChallenge) {
    throw new InvalidGrantError(
      "The provided authorization grant does not match the code_challenge used in the authorization request"
    );
  }

  if (decoded.redirect_uri !== request.redirect_uri) {
    throw new InvalidGrantError(
      "The provided authorization grant does not match the redirect_uri used in the authorization request"
    );
  }

  return validation;
}

export const authorizationCodeGrantRequestSchema = yup.object({
  client_id: yup.string(),
  scope: yup.string().default(""),
  code: yup.string().required(),
  redirect_uri: yup.string().required(),
  code_verifier: yup.string().required(),
});

export type AuthorizationCodeGrantRequest = yup.InferType<
  typeof authorizationCodeGrantRequestSchema
>;
