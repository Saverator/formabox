// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Формабокс'
    }
  },
  css: ['~/assets/scss/main.scss'],
  modules: ['nuxt-svgo'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/global-main.scss" as *;'
        },
      },
    },
  },
})
