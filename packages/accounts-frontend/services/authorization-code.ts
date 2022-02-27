import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import core from "@driten/accounts-protobuf/generated/core_pb";
import { client } from "~/lib/client";

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

const createAuthorizationCode = promisify<
  core.CreateAuthorizationCodeRequest,
  grpc.Metadata | void,
  core.CreateAuthorizationCodeResponse
>(client.createAuthorizationCode.bind(client));
