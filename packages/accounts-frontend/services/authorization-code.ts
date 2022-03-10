import { promisify } from "util";
import { config } from "@driten/accounts-config";
import { InvalidGrantError } from "@driten/accounts-errors";
import { verify as verifyCode, decode } from "@driten/accounts-jwt-verifier";
import { grpc } from "@driten/accounts-protobuf";
import core from "@driten/accounts-protobuf/generated/core_pb";
import { client } from "~/lib/client";
import { client as cache } from "~/lib/cache";
import { metadata as metadataService } from "~/services";

export async function create(
  payload: core.CreateAuthorizationCodeRequest.AsObject
) {
  const request = new core.CreateAuthorizationCodeRequest();

  request
    .setClientId(payload.clientId)
    .setSub(payload.sub)
    .setCodeChallenge(payload.codeChallenge)
    .setCodeChallengeMethod(payload.codeChallengeMethod)
    .setRedirectUri(payload.redirectUri)
    .setScope(payload.scope)
    .setAudList(payload.audList);

  const response = await createAuthorizationCode(request);
  const code = response.getCode();
  const jwt = await decode(code);

  await cache.set(jwt.jti, code, {
    expires: config.common.authorizationCodeExpirationTime as number,
  });

  return response.getCode();
}

export async function verify(code: string) {
  const metadata = await metadataService.get();
  const jwt = await decode(code);
  const { value: cached } = await cache.get(jwt.jti);

  if (cached) {
    throw new InvalidGrantError("The authorization code was already used");
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
  core.CreateAuthorizationCodeRequest,
  grpc.Metadata | void,
  core.CreateAuthorizationCodeResponse
>(client.createAuthorizationCode.bind(client));
