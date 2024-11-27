// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [{ name: 'description', content: 'Everything about Nuxt 3' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
  css: ['~/assets/scss/main.scss'],
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
  compatibilityDate: '2024-11-18',
  vite: {
    css: {
      preprocessorOptions: {
        // 排除終端機 dart sass 警告
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      // 啟用格式化
      stylistic: true,
    },
  },
})
