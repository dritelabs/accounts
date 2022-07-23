import { CompatibilityEvent } from "h3";
import { IronSessionOptions } from "iron-session";
import { withIronSessionApiRoute } from "@driten/h3-iron-session";
import { AuthenticateUserResponse } from "@driten/accounts-protobuf/dist/protobuf/user/AuthenticateUserResponse";
import { useRuntimeConfig } from "#imports";

const config = useRuntimeConfig();
declare module "iron-session" {
  interface IronSessionData {
    user?: Partial<AuthenticateUserResponse> & {
      // accessToken: string;
      // expiresIn: number;
      isAuthenticated: boolean;
      // refreshToken: string;
      // tokenType: string;
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
