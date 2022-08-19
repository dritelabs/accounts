import { InvalidClientError, UnauthorizedClientError } from '@dritelabs/accounts-errors';
import { decodeToken } from '@dritelabs/accounts-utils';
import { Client } from '@dritelabs/accounts-protobuf/dist/protobuf/core/Client';
import { withIronSession } from '~/lib/session';
import { client as clientService, token as tokenService } from '~/services';

export default withIronSession(async (event) => {
  try {
    const body = await readRawBody(event);
    const params = new URLSearchParams(body as string);
    const request = Object.fromEntries(params) as tokenService.TokenRequest & tokenService.RevocationRequest;
    const validation = await tokenService.validateRevocationRequest(request);

    const isAuthenticated = !!event.req.headers.authorization || !!request?.client_assertion;

    let client: Client;

    if (event.req.headers.authorization && request?.client_assertion) {
      throw new UnauthorizedClientError('The authentication method is invalid');
    }

    if (!isAuthenticated && !request?.client_id) {
      throw new InvalidClientError('The client_id is required field');
    }

    if (!isAuthenticated) {
      client = await clientService.getClient({ id: request.client_id });
    }

    if (isAuthenticated && event.req.headers.authorization) {
      client = await clientService.authenticateWithBasic(event.req.headers.authorization);
    }

    if (isAuthenticated && request?.client_assertion) {
      client = await clientService.authenticateWithPrivateKey(request?.client_assertion);
    }

    const decoded = await decodeToken(validation.token);

    if ((decoded.clientId as string) !== client.id) {
      return;
    }

    await tokenService.invalidateToken({
      token: validation.token,
      tokenTypeHint: validation.token_hint
    });

    return;
  } catch (error) {
    return;
  }
});
