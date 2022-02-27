import {
  useBody,
  useMethod,
  useQuery,
  sendRedirect,
  createError,
  sendError,
} from "h3";
import { grpc } from "@driten/accounts-protobuf";
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

      req.session.user = response;

      await req.session.save();

      if (query?.continue) {
        const { continue: redirectUri, ...rest } = query;
        const params = new URLSearchParams(rest as any);
        return sendRedirect(res, `${redirectUri}?${params.toString()}`);
      }

      return sendRedirect(res, "/");
    } catch (error) {
      if (error.code === grpc.status.INVALID_ARGUMENT) {
        return sendError(
          res,
          createError({
            ...error,
            statusCode: 400,
            statusMessage: error.details,
          })
        );
      }

      sendError(
        res,
        createError({
          ...error,
          statusCode: 500,
          statusMessage: error.details,
        })
      );
    }
  }
});
