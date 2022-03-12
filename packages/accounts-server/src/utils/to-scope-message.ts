import { prisma } from "@driten/accounts-db";

import { Scope } from "@driten/accounts-protobuf/protobuf/core_pb";

export function toScopeMessage(payload: prisma.Scope) {
  const response = new Scope();

  response
    .setId(payload.id)
    .setName(payload.name)
    .setDescription(payload.description)
    .setDisplayName(payload.display_name)
    .setCreatedAt(payload.created_at.toISOString())
    .setUpdatedAt(payload.updated_at.toISOString());

  return response;
}
