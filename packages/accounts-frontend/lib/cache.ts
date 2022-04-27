import { Client } from "memjs";
import { useRuntimeConfig } from "#imports";

const config = useRuntimeConfig();

export const client = Client.create(config.memcachedHost);
