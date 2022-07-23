import { client } from "../prisma";
import { authenticateWithBasic } from "./authenticate-with-basic";
import { authenticateWithPrivateKey } from "./authenticate-with-private-key";

export const model = Object.assign({}, client.client, {
  authenticateWithBasic,
  authenticateWithPrivateKey,
});
