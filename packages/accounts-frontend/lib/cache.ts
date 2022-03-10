import { Client } from "memjs";
import { config } from "@driten/accounts-config";

export const client = Client.create(config.frontend.memcacheHost);
