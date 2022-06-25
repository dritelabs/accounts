import { promisify } from "util";
import {
  verify,
  verifyWithLocalJKWS,
  decode,
} from "@driten/accounts-jwt-verifier";
import { InvalidClientError, InvalidGrantError } from "@driten/accounts-errors";
import { decodeBasic } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import { Client as CoreClient } from "@driten/accounts-protobuf/dist/protobuf/core/Client";
import { GetRequest } from "@driten/accounts-protobuf/dist/protobuf/core/GetRequest";
import { client } from "~/lib/client";
import { client as cache } from "~/lib/cache";
import { metadata as metadataService } from "~/services";

export type Client = ReturnType<typeof reducer>;

export async function get(id: string) {
  const response = await getClient({ id });

  return reducer(response);
}

export async function authenticateWithBasic(authorization: string) {
  const decoded = decodeBasic(authorization);

  if (!decoded) {
    throw new InvalidClientError("Invalid client_id or client_secret");
  }

  const client = await get(decoded.clientId).catch(() => {
    throw new InvalidClientError("Invalid client_id or client_secret");
  });

  if (client.client_secret !== decoded.clientSecret) {
    throw new InvalidClientError("Invalid client_id or client_secret");
  }

  return client;
}

export async function authenticateWithPrivateKey(clientAssertion: string) {
  const decoded = await decode(clientAssertion);

  const client = await get(decoded.sub).catch(() => {
    throw new InvalidClientError("Invalid client_id");
  });

  const metadata = await metadataService.get();

  const { value: cached } = await cache.get(decoded.jti);

  if (cached) {
    throw new InvalidGrantError("The client assertion was already used");
  }

  await cache.set(decoded.jti, clientAssertion, {
    expires: decoded.exp - decoded.iat,
  });

  if (client.public_keys_configuration === "local") {
    await verifyWithLocalJKWS(clientAssertion, client.jwks, {
      issuer: client.client_uri,
      audience: [metadata.issuer],
    }).catch((err) => {
      throw new InvalidClientError(err.message);
    });

    return client;
  }

  await verify(clientAssertion, client.jwks_uri, {
    issuer: client.client_uri,
    audience: metadata.issuer,
  }).catch((err) => {
    throw new InvalidClientError(err.message);
  });

  return client;
}

export function reducer(payload: CoreClient) {
  return {
    application_type: payload.type,
    client_id: payload.id,
    client_secret: payload.secret,
    client_id_issued_at: payload.createdAt,
    client_secret_expires_at: 0,
    client_name: payload.name,
    client_description: payload.description,
    client_uri: payload.uri,
    grant_types: payload.grantTypes,
    contacts: payload.contacts,
    is_first_party: payload.isFirstParty,
    jwks_uri: payload.jwksUri,
    jwks: payload.jwks,
    logo_uri: payload.logoUri,
    policy_uri: payload.policyUri,
    public_keys_configuration: payload.publicKeysConfiguration,
    redirect_uris: payload.redirectUris,
    response_types: payload.responseTypes,
    refresh_token_rotation_type: payload.refreshTokenRotationType,
    scope: payload.scope,
    software_id: payload.softwareId,
    software_version: payload.softwareVersion,
    token_endpoint_auth_method: payload.tokenEndpointAuthMethod,
    tos_uri: payload.tosUri,
    user_id: payload.userId,
  };
}

const getClient = promisify<GetRequest, grpc.Metadata | void, CoreClient>(
  client.getClient.bind(client)
);
