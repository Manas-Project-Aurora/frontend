import tailwindcss from "@tailwindcss/vite"
import Aura from "@primeuix/themes/aura"

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL,
    },
  },
  css: ["~/assets/css/main.css", "primeicons/primeicons.css"],
  modules: ["@primevue/nuxt-module", "@nuxt/image"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,
  },
})