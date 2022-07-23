import { model as clientModel } from "./client";
import { model as metadata } from "./metadata";
import { client as _client } from "./prisma";
import { model as user } from "./user";

export { prisma } from "./prisma";

export const client = Object.assign({}, _client, {
  client: clientModel,
  user,
  metadata,
});
