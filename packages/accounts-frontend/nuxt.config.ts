import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [["@pinia/nuxt", { disableVuex: true }]],
  css: ["bulma", "@/assets/css/main.scss"],
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
