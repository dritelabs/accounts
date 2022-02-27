import { useMethod, useQuery, useBody, sendRedirect } from "h3";
import {
  AccessDeniedError,
  InvalidRequestError,
  InvalidScopeError,
  ServerError,
} from "@driten/accounts-errors";
import { grpc } from "@driten/accounts-protobuf";
import { withIronSession } from "~/lib/session";
import { authorizationRequestSchema, ValidationError } from "~/schemas";
import {
  authorizationCode as authorizationCodeService,
  client as clientService,
  scope as scopeService,
} from "~/services";

export default withIronSession(async (req, res) => {
  const method = useMethod(req);
  const query = useQuery(req);
  const scopeNames = query?.scope ? (query.scope as string).split(" ") : [];

  if (method === "GET") {
    try {
      const payload = await authorizationRequestSchema.validate(query);
      const client = await clientService.get(payload.client_id);
      const scopes = await scopeService.list({
        filter: {
          names: scopeNames,
        },
      });

      if (!client.redirect_uris.includes(payload.redirect_uri)) {
        throw new InvalidRequestError("The redirect_uri is invalid.");
      }

      if (!scopeNames.length || scopeNames.length !== scopes?.scopes?.length) {
        throw new InvalidScopeError(
          "The requested scope is invalid, unknown, or malformed."
        );
      }
    } catch (error) {
      if (error.code === grpc.status.NOT_FOUND) {
        const e = new InvalidRequestError(error?.details);

        return {
          error: e.error,
          error_description: e.error_description,
        };
      }

      if (error instanceof ValidationError) {
        const e = new InvalidRequestError(error?.errors?.[0]);

        return {
          error: e.error,
          error_description: e.error_description,
        };
      }

      if (
        error instanceof InvalidRequestError ||
        error instanceof InvalidScopeError
      ) {
        return {
          error: error.error,
          error_description: error.error_description,
        };
      }

      return new ServerError(error?.message);
    }
  }

  if (method === "POST") {
    const decision = req.url.split("/")[1];
    const body = await useBody(req);
    const request = new URLSearchParams(body);

    try {
      if (!decision || decision === "cancel") {
        throw new AccessDeniedError(
          "The resource owner or authorization server denied the request."
        );
      }

      const code = await authorizationCodeService.create({
        clientId: request.get("client_id"),
        codeChallenge: request.get("code_challenge"),
        codeChallengeMethod: request.get("code_challenge_method") || "plain",
        redirectUri: request.get("redirect_uri"),
        scope: request.get("scope") || "",
        sub: req?.session?.user?.id,
        audList: request.getAll("resource"),
      });

      const params = new URLSearchParams({
        code: code,
      });

      if (request.get("state")) {
        params.set("state", request.get("state"));
      }

      const redirectUri = `${request.get("redirect_uri")}?${params.toString()}`;

      return sendRedirect(res, redirectUri);
    } catch (error) {
      if (error instanceof AccessDeniedError) {
        const params = new URLSearchParams({
          error: error.error,
          error_description: error.error_description,
        });

        const redirectUri = `${request.get(
          "redirect_uri"
        )}?${params.toString()}`;

        return sendRedirect(res, redirectUri);
      }

      return new ServerError(error?.message);
    }
  }
});
