import { CompatibilityEvent } from 'h3';
import { ValidationError } from 'yup';
import {
  InvalidClientError,
  InvalidGrantError,
  InvalidRequestError,
  ServerError,
  UnauthorizedClientError
} from '@dritelabs/accounts-errors';
import { grpc } from '@dritelabs/accounts-protobuf';

export function withError<T>(handler: (event: CompatibilityEvent) => Promise<T>) {
  return async function withErrorHOC(event: CompatibilityEvent) {
    try {
      const res = await handler(event);

      return res;
    } catch (error) {
      if (error instanceof ValidationError) {
        const e = new InvalidRequestError(error?.errors?.[0]);

        event.res.statusCode = 400;

        return {
          error: e.error,
          error_description: e.error_description
        };
      }

      if (error.code === grpc.status.PERMISSION_DENIED) {
        event.res.statusCode = 401;
        // event.res.setHeader(' WWW-Authenticate', 'Bearer');
        event.res.end(error.message);
      }

      event.res.statusCode = error.code;

      return {
        error: error?.error || 'server_error',
        error_description: error?.error_description || error?.message
      };
    }
  };
}
