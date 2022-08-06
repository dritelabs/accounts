import { createClient } from '@dritelabs/accounts-protobuf/dist/client';
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();

export const client = createClient(config.serverHost);
