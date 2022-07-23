import { client } from "../prisma";
import { authenticate } from "./authenticate";

export const model = Object.assign({}, client.user, {
  authenticate,
});
