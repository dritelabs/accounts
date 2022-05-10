import { promisify } from "util";
import { InvalidGrantError } from "@driten/accounts-errors";
import { verify as verifyToken, decode } from "@driten/accounts-jwt-verifier";
import { grpc } from "@driten/accounts-protobuf";
import { CreateTokenRequest } from "@driten/accounts-protobuf/dist/protobuf/core/CreateTokenRequest";
import { CreateTokenResponse } from "@driten/accounts-protobuf/dist/protobuf/core/CreateTokenResponse";
import { useRuntimeConfig } from "#imports";
import { client } from "~/lib/client";
import { metadata as metadataService } from "~/services";
import { client as cache } from "~/lib/cache";

export async function create(payload: CreateTokenRequest) {
  const response = await createToken(payload);

  return response.token;
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
  CreateTokenRequest,
  grpc.Metadata | void,
  CreateTokenResponse
>(client.createToken.bind(client));
