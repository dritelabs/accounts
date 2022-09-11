import { authenticateWithNone } from './authenticate-with-none';
import { authenticateWithBasic } from './authenticate-with-basic';
import { authenticateWithPrivateKey } from './authenticate-with-private-key';

const methods = {
  client_secret_basic: authenticateWithBasic,
  private_key_jwt: authenticateWithPrivateKey,
  none: authenticateWithNone
};

export async function authenticate(
  credential: string,
  method: 'client_secret_basic' | 'private_key_jwt' | 'none'
) {
  return methods[method](credential);
}
