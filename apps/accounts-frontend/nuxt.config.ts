// import { resolve } from "path";
import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['bulma', '@/assets/css/main.scss'],
  privateRuntimeConfig: {
    serverHost: process.env.SERVER_HOST || 'localhost:5000',
    memcachedHost: process.env.MEMCACHED_HOST || 'localhost:11211',
    secretCookiePassword:
      process.env.SECRET_COOKIE_PASSWORD || 'complex_password_at_least_32_characters_long',
    authorizationCodeExpirationTime: process.env.AUTHORIZATION_CODE_EXPIRATION_TIME || 30,
    accessTokenExpirationTime: process.env.ACCESS_TOKEN_EXPIRATION_TIME || 60 * 10,
    refreshTokenExpirationTime: process.env.REFRESH_TOKEN_EXPIRATION_TIME || 60 * 60 * 24 * 15
  },
  typescript: {
    shim: false
  }
  // modulesDir: [
  //   resolve(__dirname, "../../node_modules"),
  //   resolve(__dirname, "node_modules"),
  // ],
});
