// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  ssr: true, // ➤ Disable SSR to enable static SPA mode (generates dist folder)
  app: {
    baseURL: '/viewpage/',
  },

  devtools: {
    enabled: true
  }
})
