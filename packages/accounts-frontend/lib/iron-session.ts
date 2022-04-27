import { CompatibilityEvent } from "h3";
import { IncomingMessage, ServerResponse } from "http";
import type { IronSessionOptions, IronSession } from "iron-session";
import { getIronSession } from "iron-session";

export function withIronSessionApiRoute<T>(
  handler: (
    event: CompatibilityEvent
    // req: IncomingMessage,
    // res: ServerResponse,
    // next?: Function
  ) => Promise<T>,
  options: IronSessionOptions
): (event: CompatibilityEvent) => Promise<T> {
  return async function apiHandlerWrappedWithIronSession(event) {
    const session = await getIronSession(
      event.req as unknown as IncomingMessage,
      event.res as unknown as ServerResponse,
      options
    );
    // we define req.session as being enumerable (so console.log(req) shows it)
    // and we also want to allow people to do:
    // req.session = { admin: true }; or req.session = {...req.session, admin: true};
    // req.session.save();

    // @ts-ignore
    if (!event.req?.session) {
      Object.defineProperty(
        event.req,
        "session",
        getPropertyDescriptorForReqSession(session)
      );
    }

    return handler(event);
  };
}

export default function getPropertyDescriptorForReqSession(
  session: IronSession
): PropertyDescriptor {
  return {
    enumerable: true,
    get() {
      return session;
    },
    set(value) {
      const keys = Object.keys(value);
      const currentKeys = Object.keys(session);

      currentKeys.forEach((key) => {
        if (!keys.includes(key)) {
          // @ts-ignore See comment in IronSessionData interface
          delete session[key];
        }
      });

      keys.forEach((key) => {
        // @ts-ignore See comment in IronSessionData interface
        session[key] = value[key];
      });
    },
  };
}

// export function withIronSessionSsr<
//   P extends { [key: string]: unknown } = { [key: string]: unknown }
// >(
//   handler: (
//     context: GetServerSidePropsContext
//   ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
//   options: IronSessionOptions
// ) {
//   return async function nextGetServerSidePropsHandlerWrappedWithIronSession(
//     context: GetServerSidePropsContext
//   ) {
//     const session = await getIronSession(context.req, context.res, options);
//     Object.defineProperty(
//       context.req,
//       "session",
//       getPropertyDescriptorForReqSession(session)
//     );
//     return handler(context);
//   };
// }
