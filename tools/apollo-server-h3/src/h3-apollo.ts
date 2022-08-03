import { GraphQLOptions, runHttpQuery, convertNodeHttpToRequest, isHttpQueryError } from 'apollo-server-core';
import { EventHandler, useBody } from 'h3';
import url from 'url';
import type { IncomingMessage, ServerResponse } from 'http';

import type { ValueOrPromise } from 'apollo-server-types';
import { CompatibilityEvent } from 'h3';

// Allowed Micro Apollo Server options.
export interface MicroGraphQLOptionsFunction {
  (req?: IncomingMessage): ValueOrPromise<GraphQLOptions>;
}

// Utility function used to set multiple headers on a response object.
function setHeaders(res: ServerResponse, headers: Record<string, string>): void {
  Object.entries(headers).forEach(([header, value]) => {
    res.setHeader(header, value);
  });
}

// Build and return an async function that passes incoming GraphQL requests
// over to Apollo Server for processing, then fires the results/response back
// using Micro's `send` functionality.
export function graphqlH3(
  options: GraphQLOptions | MicroGraphQLOptionsFunction,
  csrfPreventionRequestHeaders?: string[] | null
): EventHandler {
  if (!options) {
    throw new Error('Apollo Server requires options.');
  }

  const graphqlHandler = async (event: CompatibilityEvent) => {
    // const contentType = event.req.headers["content-type"];
    const body = await useBody(event);

    const query = event.req.method === 'POST' ? body : url.parse(event.req.url!, true).query;

    try {
      const { graphqlResponse, responseInit } = await runHttpQuery(
        [event.req, event.res],
        {
          method: event.req.method!,
          options,
          query: query as any,
          request: convertNodeHttpToRequest(event.req)
        },
        csrfPreventionRequestHeaders
      );
      setHeaders(event.res, responseInit.headers!);
      // const statusCode = responseInit.status || 200;

      return graphqlResponse;
    } catch (error: any) {
      if (isHttpQueryError(error) && error.headers) {
        setHeaders(event.res, error.headers);
      }

      event.res.statusCode = (error as any).statusCode || 500;
      event.res.end(error.message);

      // return sendError(
      //   event,
      //   createError({
      //     statusCode: (error as any).statusCode || 500,
      //     statusMessage: (error as Error).message,
      //     ...error,
      //   })
      // );
    }
  };

  return graphqlHandler;
}
