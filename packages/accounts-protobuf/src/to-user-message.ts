import * as core from "../generated/core_pb";

export function toUserMessage(payload: core.User.AsObject) {
  const response = new core.User();

  response.setId(payload.id);
  response.setEmail(payload.email);
  response.setCreatedAt(payload.createdAt);
  response.setUpdatedAt(payload.updatedAt);

  return response;
}
