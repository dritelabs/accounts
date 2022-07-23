import { compareHash } from "@driten/accounts-utils";
import { client } from "../prisma";

interface AuthenticateUserOptions {
  email: string;
  password: string;
}

export async function authenticate(options: AuthenticateUserOptions) {
  const found = await client.user.findFirst({
    where: { email: options.email },
  });

  if (!found) {
    throw new Error("Invalid email or password");
  }

  const match = await compareHash(options.password, found.password);

  if (!match) {
    throw new Error("Invalid email or password");
  }

  return found;
}
