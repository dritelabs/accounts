import { promisify } from "util";
import { InvalidGrantError } from "@driten/accounts-errors";
import { verify as verifyCode } from "@driten/accounts-jwt-verifier";
import { grpc } from "@driten/accounts-protobuf";
import core from "@driten/accounts-protobuf/generated/core_pb";
import { client } from "~/lib/client";
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

  return response.getCode();
}

export async function verify(code: string) {
  const metadata = await metadataService.get();

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
