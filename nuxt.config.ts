// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-13',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  routeRules: {
    '/': { prerender: true }
  },
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
      }]
    }
  }
})