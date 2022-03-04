import { promisify } from "util";
import { InvalidGrantError } from "@driten/accounts-errors";
import { verify as verifyToken } from "@driten/accounts-jwt-verifier";
import { grpc } from "@driten/accounts-protobuf";
import core from "@driten/accounts-protobuf/generated/core_pb";
import { client } from "~/lib/client";
import { metadata as metadataService } from "~/services";

export async function create(payload: core.CreateTokenRequest.AsObject) {
  const request = new core.CreateTokenRequest();

  request
    .setClientId(payload.clientId)
    .setScope(payload.scope)
    .setSub(payload.sub)
    .setAudList(payload.audList)
    .setExp(payload.exp);

  const response = await createToken(request);

  return response.getToken();
}

export async function verifyRefreshToken(token: string) {
  const metadata = await metadataService.get();

  return verifyToken(token, metadata.jwks_uri as string, {
    issuer: metadata.issuer,
    audience: metadata.issuer,
  }).catch((err) => {
    throw new InvalidGrantError(err.message);
  });
}

const createToken = promisify<
  core.CreateTokenRequest,
  grpc.Metadata | void,
  core.CreateTokenResponse
>(client.createToken.bind(client));
