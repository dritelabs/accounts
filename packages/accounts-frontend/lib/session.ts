import { CompatibilityEvent } from "h3";
import { IronSessionOptions } from "iron-session";
import { User } from "@driten/accounts-protobuf/dist/protobuf/core/User";
import { useRuntimeConfig } from "#imports";
import { withIronSessionApiRoute } from "./iron-session";

const config = useRuntimeConfig();
declare module "iron-session" {
  interface IronSessionData {
    user?: Partial<User> & {
      initialAccessToken: string;
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
  handler: (event: CompatibilityEvent) => Promise<T>
) => withIronSessionApiRoute(handler, options);
