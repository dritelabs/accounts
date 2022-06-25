import { CompatibilityEvent, EventHandler } from "h3";

const DEFAULT_ALLOW_METHODS = [
  "POST",
  "GET",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
];

const DEFAULT_ALLOW_HEADERS = [
  "X-Requested-With",
  "Access-Control-Allow-Origin",
  "X-HTTP-Method-Override",
  "Content-Type",
  "Authorization",
  "Accept",
];

const DEFAULT_MAX_AGE_SECONDS = 60 * 60 * 24; // 24 hours

export const cors =
  (options: any = {}) =>
  (handler: EventHandler) =>
  (event: CompatibilityEvent) => {
    const {
      origin = "*",
      maxAge = DEFAULT_MAX_AGE_SECONDS,
      allowMethods = DEFAULT_ALLOW_METHODS,
      allowHeaders = DEFAULT_ALLOW_HEADERS,
      allowCredentials = true,
      exposeHeaders = [],
    } = options;

    if (event.res && event.res.writableEnded) {
      return;
    }

    event.res.setHeader("Access-Control-Allow-Origin", origin);
    if (allowCredentials) {
      event.res.setHeader("Access-Control-Allow-Credentials", "true");
    }
    if (exposeHeaders.length) {
      event.res.setHeader(
        "Access-Control-Expose-Headers",
        exposeHeaders.join(",")
      );
    }

    const preFlight = event.req.method === "OPTIONS";
    if (preFlight) {
      event.res.setHeader(
        "Access-Control-Allow-Methods",
        allowMethods.join(",")
      );
      event.res.setHeader(
        "Access-Control-Allow-Headers",
        allowHeaders.join(",")
      );
      event.res.setHeader("Access-Control-Max-Age", String(maxAge));
    }

    return handler(event);
  };
