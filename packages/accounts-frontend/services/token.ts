import { promisify } from "util";
import * as yup from "yup";
import { InvalidGrantError } from "@driten/accounts-errors";
import { verify as verifyToken, decode } from "@driten/accounts-jwt-verifier";
import { grpc } from "@driten/accounts-protobuf";
import { CreateTokenRequest } from "@driten/accounts-protobuf/dist/protobuf/token/CreateTokenRequest";
import { CreateTokenResponse } from "@driten/accounts-protobuf/dist/protobuf/token/CreateTokenResponse";
import { useRuntimeConfig } from "#imports";
import { client } from "~/lib/client";
import { metadata as metadataService } from "~/services";
import { client as cache } from "~/lib/cache";
import { AnyObject, ValidateOptions } from "yup/lib/types";

const config = useRuntimeConfig();

export async function create(payload: CreateTokenRequest) {
  const response = await createToken(payload);

  return response.token;
}

export async function createTokenResponse(credential: string) {
  const metadata = await metadataService.get();
  const decoded = await decode(credential);

  const token = await create({
    typ: "at+jwt",
    clientId: decoded.clientId as string,
    scope: decoded.scope as string,
    sub: decoded.sub,
    aud: [...(decoded.aud as string[])].filter(
      (resource) => resource !== metadata.issuer
    ),
    exp: `${config.accessTokenExpirationTime}s`,
  });

  const refreshToken = await create({
    typ: "rt+jwt",
    clientId: decoded.clientId as string,
    scope: decoded.scope as string,
    sub: decoded.sub,
    aud: [...decoded.aud],
    exp: `${config.refreshTokenExpirationTime}s`,
  });

  return {
    access_token: token,
    token_type: "Bearer",
    expires_in: config.accessTokenExpirationTime,
    scope: decoded.scope,
    refresh_token: refreshToken,
  };
}

export async function createClientCredentialsGrantResponse(
  request: ClientCredentialsGrantRequest
) {
  const token = await create({
    typ: "at+jwt",
    clientId: request.client_id,
    scope: request.scope,
    sub: request.user_id,
    aud: Array.isArray(request.resource)
      ? request.resource
      : [request.resource],
    exp: `${config.accessTokenExpirationTime}s`,
  });

  return {
    access_token: token,
    token_type: "Bearer",
    expires_in: config.accessTokenExpirationTime,
    scope: request.scope,
  };
}

export async function validateTokenRequest(
  request: TokenRequest,
  options?: ValidateOptions<AnyObject>
) {
  return tokenRequestSchema.validate(request, options);
}

export async function validateClientCredentialsGrantRequest(
  request: ClientCredentialsGrantRequest
) {
  return clientCredentialsRequestSchema.validate(request);
}

export async function validateRefreshToken(request: RefreshTokenRequest) {
  const { refresh_token: token } = await refreshTokenRequestSchema.validate(
    request
  );

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

export const refreshTokenRequestSchema = yup.object({
  refresh_token: yup.string().required(),
});

export const clientCredentialsRequestSchema = yup.object({
  scope: yup.string().default(""),
  resource: yup.lazy((val) =>
    Array.isArray(val) ? yup.array().of(yup.string()) : yup.string()
  ),
  grant_type: yup
    .string()
    .oneOf(["authorization_code", "refresh_token", "client_credentials"])
    .required(),
});

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

export type RefreshTokenRequest = yup.InferType<
  typeof refreshTokenRequestSchema
>;

export type ClientCredentialsGrantRequest = yup.InferType<
  typeof clientCredentialsRequestSchema
> & {
  client_id?: string;
  user_id?: string;
  scope?: string;
  resource?: string;
};

export type TokenRequest = yup.InferType<typeof tokenRequestSchema>;
