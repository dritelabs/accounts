import * as core from "../protobuf/core_pb";

export function toAuthResponseMessage(
  payload: core.AuthenticateUserResponse.AsObject
) {
  const response = new core.AuthenticateUserResponse();

  response.setId(payload.id);

  return response;
}
