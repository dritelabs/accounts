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
import { GetClientRequest } from "@driten/accounts-protobuf/dist/protobuf/core/GetClientRequest";
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

  if (client.jwks) {
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
    client_id: payload.id,
    client_secret: payload.secret,
    client_id_issued_at: payload.createdAt,
    client_secret_expires_at: 0,
    client_name: payload.name,
    client_description: payload.description,
    client_uri: payload.clientUri,
    user_id: payload.userId,
    application_type: payload.applicationType,
    redirect_uris: payload.redirectUris,
    token_endpoint_auth_method: payload.tokenEndpointAuthMethod,
    grant_types: payload.grantTypes,
    response_types: payload.responseTypes,
    logo_uri: payload.logoUri,
    scope: payload.scope,
    contacts: payload.contacts,
    tos_uri: payload.tosUri,
    policy_uri: payload.policyUri,
    jwks_uri: payload.jwksUri,
    jwks: payload.jwks,
    software_id: payload.softwareId,
    software_version: payload.softwareVersion,
    is_first_party: payload.isFirstParty,
  };
}

const getClient = promisify<GetClientRequest, grpc.Metadata | void, CoreClient>(
  client.getClient.bind(client)
);
