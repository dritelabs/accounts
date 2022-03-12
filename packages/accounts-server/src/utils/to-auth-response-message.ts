import { prisma } from "@driten/accounts-db";

import { AuthenticateUserResponse } from "@driten/accounts-protobuf/protobuf/core_pb";

export function toAuthResponseMessage(payload: prisma.User) {
  const response = new AuthenticateUserResponse();

  response.setId(payload.id).setEmail(payload.email);

  return response;
}
