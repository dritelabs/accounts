import * as core from "../generated/core_pb";

export function toAuthRequestMessage(
  payload: core.AuthenticateUserRequest.AsObject
) {
  const request = new core.AuthenticateUserRequest();

  request.setEmail(payload.email);
  request.setPassword(payload.password);

  return request;
}
