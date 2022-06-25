import type { IncomingMessage } from "http";

export interface H3Request extends IncomingMessage {
  filePayload?: object;
}
