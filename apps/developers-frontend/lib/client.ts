import { createClient } from '@dritelabs/accounts-protobuf/dist/client';

const host = process.env.SERVER_HOST || 'localhost:5000';

export const client = createClient(host);
