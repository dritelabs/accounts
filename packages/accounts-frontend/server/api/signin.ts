import { useBody, useMethod, useQuery, sendRedirect } from "h3";
import { grpc } from "@driten/accounts-protobuf";
import { InvalidRequestError } from "@driten/accounts-errors";
import { withIronSession } from "~/lib/session";
import { user as userService } from "~/services";

export default withIronSession(async (req, res) => {
  const method = useMethod(req);

  if (method === "POST") {
    try {
      const query = useQuery(req);
      const body = await useBody(req);
      const params = new URLSearchParams(body);

      const response = await userService.authenticate({
        email: params.get("email"),
        password: params.get("password"),
      });

      req.session.user = {
        ...response,
        isAuthenticated: true,
      };

      await req.session.save();

      if (query?.continue) {
        const { continue: redirectUri, ...rest } = query;
        const params = new URLSearchParams(rest as any);
        return sendRedirect(res, `${redirectUri}?${params.toString()}`);
      }

      return sendRedirect(res, "/profile");
    } catch (error) {
      if (error.code === grpc.status.INVALID_ARGUMENT) {
        const err = new InvalidRequestError(error?.details);
        const params = new URLSearchParams({
          error: err.error,
          error_description: err.error_description,
        });

        return sendRedirect(res, `/signin?${params}`);
      }

      const params = new URLSearchParams({
        error_description: error?.message,
      });

      return sendRedirect(res, `/signin?${params}`);
    }
  }
});
