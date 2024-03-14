// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxt/devtools",
        "@nuxtjs/eslint-module",
        // "@nuxtjs/tailwindcss",
        "@formkit/auto-animate",
        "@vueuse/nuxt",
        "@nuxtjs/color-mode",
        '@nuxtjs/eslint-module',
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
        "nuxt-icon",
        "@nuxt/ui",
        "@nuxtjs/i18n"
    ]
})
