import { generate } from "@vue/compiler-core";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Required for proper static generation with `nuxi generate`

  app: {
    // This MUST match the GitHub repo name for correct routing
    baseURL: '/viewpage/',
    buildAssetsDir: 'assets/',
  },
  nitro: {
    preset: 'static' // ensure Nitro generates static files
  },

  compatibilityDate: '2025-05-15',

  devtools: {
    enabled: true
  }
});
