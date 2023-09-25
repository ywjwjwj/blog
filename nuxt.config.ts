export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    '@nuxt/ui',
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxt/image',
  ],
  ui: {
    global: true,
    icons: ['heroicons', 'fluent-emoji-high-contrast', 'mdi', 'simple-icons']
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

