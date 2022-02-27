import { IronSessionOptions } from "iron-session";
import * as core from "@driten/accounts-protobuf/generated/core_pb";
import { withIronSessionApiRoute } from "./iron-session";
import { IncomingMessage, ServerResponse } from "http";

declare module "iron-session" {
  interface IronSessionData {
    user?: Partial<core.User.AsObject>;
  }
}

export const options: IronSessionOptions = {
  cookieName: "driten/accounts",
  password: "complex_password_at_least_32_characters_long",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export const withIronSession = <T>(
  handler: (
    req: IncomingMessage,
    res: ServerResponse,
    next?: Function
  ) => Promise<T>
) => withIronSessionApiRoute(handler, options);
