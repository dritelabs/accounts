import { CompatibilityEvent, IncomingMessage, ServerResponse } from 'h3';
import { getIronSession, IronSessionOptions } from 'iron-session';
import getPropertyDescriptorForReqSession from './get-property-descriptor-for-req-session';

export function withIronSessionApiRoute<T>(
  handler: (event: CompatibilityEvent) => Promise<T>,
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

    if (!event.req?.session) {
      Object.defineProperty(event.req, 'session', getPropertyDescriptorForReqSession(session));
    }

    return handler(event);
  };
}
