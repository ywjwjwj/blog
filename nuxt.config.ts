export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    '@nuxthq/ui',
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxt/image',
  ],
  ui: {
    prefix: ''
  },
  runtimeConfig: {
    public: {
      algolia: {
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        applicationId: process.env.ALGOLIA_APPLICATION_ID,
        langAttribute: "lang",
        docSearch: {
          indexName: process.env.ALGOLIA_INDEX_NAME,
        },
      },
    },
  },
})

