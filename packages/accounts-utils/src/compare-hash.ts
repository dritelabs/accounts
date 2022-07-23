import { compare } from "bcrypt";

export async function compareHash(string: string, encrypted: string) {
  return await compare(string, encrypted);
}
