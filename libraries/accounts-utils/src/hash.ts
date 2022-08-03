import { genSalt, hash as _hash } from 'bcrypt';

export async function hash(string: string) {
  const salt = await genSalt();

  return _hash(string, salt);
}
