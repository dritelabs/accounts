import { ApolloServerBase, GraphQLOptions } from "apollo-server-core";
import { CompatibilityEvent, createError, send, sendError } from "h3";
import { parseAll } from "@hapi/accept";

import { graphqlH3 } from "./h3-apollo";
import type { H3Request } from "./types";
import type { LandingPage } from "apollo-server-plugin-base";

export interface ServerRegistration {
  path?: string;
  disableHealthCheck?: boolean;
  onHealthCheck?: (req: H3Request) => Promise<any>;
  __testing__h3SuppressErrorLog?: boolean;
}

export class ApolloServer extends ApolloServerBase {
  // Extract Apollo Server options from the request.
  async createGraphQLServerOptions(
    event: CompatibilityEvent
  ): Promise<GraphQLOptions> {
    return super.graphQLServerOptions(event);
  }

  // Prepares and returns an async function that can be used by Micro to handle
  // GraphQL requests.
  public createHandler({
    path,
    disableHealthCheck,
    onHealthCheck,
    __testing__h3SuppressErrorLog,
  }: ServerRegistration = {}) {
    this.assertStarted("createHandler");

    this.graphqlPath = path || "/graphql";

    const landingPage = this.getLandingPage();

    return async (event: CompatibilityEvent) => {
      const url = event.req.url!.split("?")[0];

      try {
        if (
          await this.handleHealthCheck({
            event,
            disableHealthCheck,
            onHealthCheck,
          })
        ) {
          return this.handleHealthCheck({
            event,
            disableHealthCheck,
            onHealthCheck,
          });
        }
        if (
          landingPage &&
          event.req.method === "GET" &&
          url == this.graphqlPath
        ) {
          return this.handleGraphqlRequestsWithLandingPage({
            event,
            landingPage,
          });
        }
        if (event.req.method === "POST" && url == this.graphqlPath) {
          return this.handleGraphqlRequestsWithServer({
            event,
          });
        }

        return sendError(
          event,
          createError({
            statusCode: 404,
          })
        );
      } catch (error: any) {
        if (!__testing__h3SuppressErrorLog) {
          throw error;
        }
        // Like Micro's sendError but without the logging.
        const statusCode = error.statusCode || error.status;

        return sendError(
          event,
          createError({
            statusCode,
            statusMessage: (error as Error).message,
            ...error,
          })
        );
      }
    };
  }

  // If health checking is enabled, trigger the `onHealthCheck`
  // function when the health check URL is requested.
  private async handleHealthCheck({
    event,
    disableHealthCheck,
    onHealthCheck,
  }: {
    event: CompatibilityEvent;
    disableHealthCheck?: boolean;
    onHealthCheck?: (req: H3Request) => Promise<any>;
  }): Promise<boolean> {
    let handled = false;

    if (
      !disableHealthCheck &&
      event.req.url === "/.well-known/apollo/server-health"
    ) {
      // Response follows
      // https://tools.ietf.org/html/draft-inadarei-api-health-check-01
      event.res.setHeader("Content-Type", "application/health+json");

      if (onHealthCheck) {
        try {
          await onHealthCheck(event.req);
        } catch (error: any) {
          sendError(
            event,
            createError({
              statusCode: 503,
              statusMessage: (error as Error).message,
              ...error,
            })
          );

          handled = true;
        }
      }

      if (!handled) {
        send(event, { status: "pass" });
        handled = true;
      }
    }

    return handled;
  }

  private async handleGraphqlRequestsWithLandingPage({
    event,
    landingPage,
  }: {
    event: CompatibilityEvent;
    landingPage: LandingPage;
  }) {
    const accept = parseAll(event.req.headers);
    const types = accept.mediaTypes as string[];
    const prefersHtml =
      types.find(
        (x: string) =>
          x === "text/html" || x === "application/json" || x === "*/*"
      ) === "text/html";

    if (prefersHtml) {
      event.res.setHeader("Content-Type", "text/html; charset=utf-8");

      return landingPage.html;
    }
  }

  // Handle incoming GraphQL requests using Apollo Server.
  private async handleGraphqlRequestsWithServer({
    event,
  }: {
    event: CompatibilityEvent;
  }) {
    const graphqlHandler = graphqlH3(() => {
      return this.createGraphQLServerOptions(event);
    }, this.csrfPreventionRequestHeaders);

    const responseData = await graphqlHandler(event);

    return responseData;
  }
}
