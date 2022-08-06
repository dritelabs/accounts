import { verifyToken, verifyTokenScopes } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { config } from '../config';

type K = keyof AccountHandlers;

export function withAuth<T>(scopes: string[], callback: T): T | grpc.handleUnaryCall<any, any> {
  return async (call, _callback) => {
    const metadata = call.metadata.getMap();
    const jwks = {
      keys: [config.publicKey]
    };

    const token = await verifyToken(metadata?.authorization as string, {
      typ: 'at+jwt',
      issuer: config.authorizationServerIssuerBaseUrl,
      audience: config.baseUrl,
      jwks
    }).catch((err) => {
      _callback({
        code: grpc.status.PERMISSION_DENIED,
        name: err?.message,
        details: err?.message
      });
    });

    if (!token) {
      return;
    }

    if (!verifyTokenScopes((token?.payload.scope as string)?.split(' '), scopes)) {
      _callback({
        code: grpc.status.PERMISSION_DENIED,
        name: 'Invalid scope',
        details: 'Invalid scope'
      });

      return;
    }

    // @ts-ignore
    callback(call, _callback);
  };
}
