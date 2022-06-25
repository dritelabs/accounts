import { CompatibilityEvent } from "h3";
import { IronSession } from "iron-session";
import { dataSources } from "./datasources";

export interface Context {
  dataSources: ReturnType<typeof dataSources>;
  session: IronSession;
}

export async function context(ctx: CompatibilityEvent) {
  return {
    session: ctx.req.session,
  };
}
