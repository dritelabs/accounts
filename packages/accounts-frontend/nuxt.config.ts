import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [["@pinia/nuxt", { disableVuex: true }]],
  css: ["bulma", "@/assets/css/main.scss"],
  privateRuntimeConfig: {
    port: process.env.PORT || 3000,
    serverHost: process.env.SERVER_HOST || "localhost:5000",
    memcachedHost: process.env.MEMCACHED_HOST || "localhost:11211",
    secretCookiePassword:
      process.env.SECRET_COOKIE_PASSWORD ||
      "complex_password_at_least_32_characters_long",
    authorizationCodeExpirationTime:
      process.env.AUTHORIZATION_CODE_EXPIRATION_TIME || 60,
    accessTokenExpirationTime: process.env.ACCESS_TOKEN_EXPIRATION_TIME || 3600,
    refreshTokenExpirationTime:
      process.env.REFRESH_TOKEN_EXPIRATION_TIME || 3600 * 24,
  },
  serverMiddleware: [
    {
      path: "/.well-known/oauth-authorization-server",
      handler: "~/server/api/.well-known/oauth-authorization-server.ts",
    },
    { path: "/authorize", handler: "~/server/api/authorize.ts" },
    { path: "/jwks.json", handler: "~/server/api/jwks.ts" },
    { path: "/token", handler: "~/server/api/token.ts" },
    { path: "/userinfo", handler: "~/server/api/userinfo.ts" },
  ],
});
