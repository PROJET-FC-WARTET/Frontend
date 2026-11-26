// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      // Police principale (texte) → classe Tailwind font-sans (par défaut)
      { name: "Barlow", provider: "google", weights: [400, 500, 600, 700] },
      // Police des titres → classe Tailwind font-condensed
      { name: "Barlow Condensed", provider: "google", weights: [600, 700, 800] },
      { name: "Geist Mono", provider: "google" },
    ],
  },
});
