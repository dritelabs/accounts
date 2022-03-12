import { prisma } from "@driten/accounts-db";

import { User } from "@driten/accounts-protobuf/protobuf/core_pb";

export function toUserMessage(payload: prisma.User) {
  const response = new User();

  response
    .setId(payload.id)
    .setEmail(payload.email)
    .setCreatedAt(payload.created_at.toISOString())
    .setUpdatedAt(payload.updated_at.toISOString());

  return response;
}
