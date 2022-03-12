import { IncomingMessage, ServerResponse } from "http";
import { IronSessionOptions } from "iron-session";
import * as core from "@driten/accounts-protobuf/protobuf/core_pb";
import config from "#config";
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
  password: config.secretCookiePassword,
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
