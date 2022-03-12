import { promisify } from "util";
import {
  verify,
  verifyWithLocalJKWS,
  decode,
} from "@driten/accounts-jwt-verifier";
import { InvalidClientError } from "@driten/accounts-errors";
import { decodeBasic } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import core from "@driten/accounts-protobuf/protobuf/core_pb";
import { client } from "~/lib/client";
import { metadata as metadataService } from "~/services";

export async function get(id: string) {
  const request = new core.GetClientRequest();

  request.setId(id);

  const response = await getClient(request);

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
  const payload = await decode(clientAssertion);

  const client = await get(payload.sub).catch(() => {
    throw new InvalidClientError("Invalid client_id");
  });

  const metadata = await metadataService.get();

  if (client.jwks) {
    await verifyWithLocalJKWS(clientAssertion, client.jwks, {
      issuer: client.client_uri,
      audience: metadata.issuer,
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

export function reducer(payload: core.Client) {
  const obj = payload.toObject();

  return {
    client_id: obj.id,
    client_secret: obj.secret,
    client_id_issued_at: obj.createdAt,
    client_secret_expires_at: 0,
    client_name: obj.name,
    client_description: obj.description,
    client_uri: obj.clientUri,
    user_id: obj.userId,
    application_type: obj.applicationType,
    redirect_uris: obj.redirectUriList,
    token_endpoint_auth_method: obj.tokenEndpointAuthMethod,
    grant_types: obj.grantTypeList,
    response_types: obj.responseTypeList,
    logo_uri: obj.logoUri,
    scope: obj.scope,
    contacts: obj.contactList,
    tos_uri: obj.tosUri,
    policy_uri: obj.policyUri,
    jwks_uri: obj.jwksUri,
    jwks: payload.getJwks().toJavaScript(),
    software_id: obj.softwareId,
    software_version: obj.softwareVersion,
  };
}

const getClient = promisify<
  core.GetClientRequest,
  grpc.Metadata | void,
  core.Client
>(client.getClient.bind(client));
