import { createClient } from '@drite/accounts-protobuf/dist/client';

const host = process.env.ACCOUNTS_SERVER_HOST || 'localhost:5000';
export const client = createClient(host);
