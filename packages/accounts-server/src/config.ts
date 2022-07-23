import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicKey = readFileSync(join(__dirname, "../config/public-key.json"));
const privateKey = readFileSync(join(__dirname, "../config/private-key.json"));

export const config = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || "5000",
  authorizationServerIssuerBaseUrl:
    process.env.AUTHORIZATION_SERVER_ISSUER_BASE_URL || "http://localhost:3000",
  authorizationCodeExpirationTime:
    process.env.AUTHORIZATION_CODE_EXPIRATION_TIME || 30,
  accessTokenExpirationTime:
    process.env.ACCESS_TOKEN_EXPIRATION_TIME || 60 * 10,
  refreshTokenExpirationTime:
    process.env.REFRESH_TOKEN_EXPIRATION_TIME || 60 * 60 * 24 * 10,
  databaseUrl:
    process.env.DATABASE_URL ||
    "postgresql://driten:driten@localhost:5432/accounts",
  memcachedHost: process.env.MEMCACHED_HOST || "localhost:11211",
  publicKey: JSON.parse(publicKey.toString("utf-8")),
  privateKey: JSON.parse(privateKey.toString("utf-8")),
};
