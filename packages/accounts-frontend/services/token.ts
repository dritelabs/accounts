import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import core from "@driten/accounts-protobuf/generated/core_pb";
import { client } from "~/lib/client";

export async function create(payload: core.CreateTokenRequest.AsObject) {
  const request = new core.CreateTokenRequest();

  request
    .setClientId(payload.clientId)
    .setScope(payload.scope)
    .setSub(payload.sub)
    .setAudList(payload.audList);

  const response = await createToken(request);

  return response.getToken();
}

export function reducer(payload: core.CreateTokenResponse.AsObject) {
  return;
}

const createToken = promisify<
  core.CreateTokenRequest,
  grpc.Metadata | void,
  core.CreateTokenResponse
>(client.createToken.bind(client));
