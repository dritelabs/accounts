import { Client } from "memjs";
import config from "#config";

export const client = Client.create(config.memcachedHost);
