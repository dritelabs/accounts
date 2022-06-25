import { promisify } from "util";
import * as yup from "yup";
import { InvalidClientError, InvalidGrantError } from "@driten/accounts-errors";
import { verify as verifyCode, decode } from "@driten/accounts-jwt-verifier";
import { grpc } from "@driten/accounts-protobuf";
import { CreateAuthorizationCodeRequest } from "@driten/accounts-protobuf/dist/protobuf/authorization_code/CreateAuthorizationCodeRequest";
import { CreateAuthorizationCodeResponse } from "@driten/accounts-protobuf/dist/protobuf/authorization_code/CreateAuthorizationCodeResponse";
import { codeChallenge } from "@driten/accounts-utils";
import { useRuntimeConfig } from "#imports";
import { client } from "~/lib/client";
import { client as cache } from "~/lib/cache";
import { metadata as metadataService } from "~/services";

const config = useRuntimeConfig();

export async function create(payload: CreateAuthorizationCodeRequest) {
  const response = await createAuthorizationCode(payload);

  return response.code;
}

export async function validate(request: AuthorizationCodeGrantRequest) {
  const { code } = await authorizationCodeGrantRequestSchema.validate(request);
  const metadata = await metadataService.get();
  const decoded = await decode(code);
  const { value: cached } = await cache.get(decoded.jti);

  if (cached) {
    throw new InvalidGrantError("The authorization code was already used");
  }

  await cache.set(decoded.jti, code, {
    expires: config.authorizationCodeExpirationTime as number,
  });

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

  return verifyCode(code, metadata.jwks_uri, {
    typ: "ac+jwt",
    issuer: metadata.issuer,
    audience: metadata.issuer,
  }).catch((err) => {
    throw new InvalidGrantError(err?.message);
  });
}

const createAuthorizationCode = promisify<
  CreateAuthorizationCodeRequest,
  grpc.Metadata | void,
  CreateAuthorizationCodeResponse
>(client.createAuthorizationCode.bind(client));

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
