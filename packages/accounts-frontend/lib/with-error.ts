import { CompatibilityEvent } from "h3";
import {
  InvalidClientError,
  InvalidGrantError,
  InvalidRequestError,
  ServerError,
  UnauthorizedClientError,
} from "@driten/accounts-errors";
import { ValidationError } from "yup";

export function withError<T>(
  handler: (event: CompatibilityEvent) => Promise<T>
) {
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
          error_description: e.error_description,
        };
      }

      if (
        error instanceof InvalidRequestError ||
        error instanceof InvalidClientError ||
        error instanceof InvalidGrantError ||
        error instanceof UnauthorizedClientError
      ) {
        event.res.statusCode = 400;

        return {
          error: error.error,
          error_description: error.error_description,
        };
      }

      const e = new ServerError(error?.message);

      event.res.statusCode = error.code;

      return {
        error: e.error,
        error_description: e.error_description,
      };
    }
  };
}
