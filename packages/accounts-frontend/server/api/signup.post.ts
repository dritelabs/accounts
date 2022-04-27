import { useBody, useMethod, createError, sendError } from "h3";
import { grpc } from "@driten/accounts-protobuf";
import { withIronSession } from "~/lib/session";
import { user as userService } from "~/services";

export default withIronSession(async (event) => {
  try {
    const body = await useBody(event);
    const params = new URLSearchParams(body);

    const response = await userService.create({
      email: params.get("email"),
      password: params.get("password"),
    });

    return response;
  } catch (error) {
    if (error.code === grpc.status.INVALID_ARGUMENT) {
      sendError(
        event,
        createError({
          ...error,
          statusCode: 400,
          statusMessage: error.details,
        })
      );
    }

    if (error.code === grpc.status.ALREADY_EXISTS) {
      sendError(
        event,
        createError({
          ...error,
          statusCode: 409,
          statusMessage: error.details,
        })
      );
    }

    sendError(
      event,
      createError({
        ...error,
        statusCode: 500,
        statusMessage: error.details,
      })
    );
  }
});
