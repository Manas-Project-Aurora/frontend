import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura"

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
}
});
