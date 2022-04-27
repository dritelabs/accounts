import { promisify } from "util";
import { InvalidGrantError } from "@driten/accounts-errors";
import { verify as verifyToken, decode } from "@driten/accounts-jwt-verifier";
import { grpc } from "@driten/accounts-protobuf";
import core from "@driten/accounts-protobuf/protobuf/core_pb";
import { useRuntimeConfig } from "#imports";
import { client } from "~/lib/client";
import { metadata as metadataService } from "~/services";
import { client as cache } from "~/lib/cache";

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
  const config = useRuntimeConfig();
  const metadata = await metadataService.get();
  const decoded = await decode(token);
  const { value: cached } = await cache.get(decoded.jti);

  if (cached) {
    throw new InvalidGrantError("The refresh token is invalid");
  }

  await cache.set(decoded.jti, token, {
    expires: config.refreshTokenExpirationTime as number,
  });

  return verifyToken(token, metadata.jwks_uri as string, {
    typ: "rt+jwt",
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
