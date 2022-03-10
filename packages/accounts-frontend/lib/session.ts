import { IncomingMessage, ServerResponse } from "http";
import { IronSessionOptions } from "iron-session";
import { config } from "@driten/accounts-config";
import * as core from "@driten/accounts-protobuf/generated/core_pb";
import { withIronSessionApiRoute } from "./iron-session";

declare module "iron-session" {
  interface IronSessionData {
    user?: Partial<core.User.AsObject> & {
      isAuthenticated: boolean;
    };
  }
}

export const options: IronSessionOptions = {
  cookieName: "driten/accounts",
  password: config.frontend.secretCookiePassword,
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
