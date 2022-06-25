import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { defineNuxtConfig } from "nuxt";

const port = process.env.PORT || 3001;

const __dirname = dirname(fileURLToPath(import.meta.url));
const privateFile = readFileSync(join(__dirname, "./config/private-key.json"));
const publicFile = readFileSync(join(__dirname, "./config/public-key.json"));
const privateKey = JSON.parse(privateFile.toString("utf-8"));
const publicKey = JSON.parse(publicFile.toString("utf-8"));

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxt3/apollo-module"],
  apollo: {
    default: {
      uri: "http://localhost:3001/api/graphql",
    },
  },
  css: ["~/assets/scss/index.scss"],
  meta: {
    link: [
      {
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.6.96/css/materialdesignicons.min.css",
        rel: "stylesheet",
      },
    ],
  },
  runtimeConfig: {
    authorizationServerHost:
      process.env.AUTHORIZATION_SERVER_HOST || "http://localhost:3000",
    authorizationEndpoint:
      process.env.AUTHORIZATION_ENDPOINT || "http://localhost:3000/authorize",
    clientId: process.env.CLIENT_ID || "cl05amov600137o9kit49f4cz",
    clientAssertionExpirationTime:
      process.env.CLIENT_ASSERTION_EXPIRATION_TIME || "60",
    codeChallengeMethod: process.env.CODE_CHALLENGE_METHOD || "S256",
    host: process.env.HOST || `http://localhost:${port}`,
    redirectUri:
      process.env.REDIRECT_URI || `http://localhost:${port}/api/callback`,
    scope: process.env.SCOPE || "clients",
    resource: process.env.SERVER_HOST || "localhost:5000",
    secretCookiePassword:
      process.env.SECRET_COOKIE_PASSWORD ||
      "complex_password_at_least_32_characters_long",
    tokenEndpoint:
      process.env.TOKEN_ENDPOINT || "http://localhost:3000/api/token",
    privateKey,
    publicKey,
  },
  typescript: {
    shim: false,
  },
});
