// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.css",
    ],
    build: {
        transpile: ["vuetify"]
    },
    vite: {
        define: {
            "process.env.DEBUG": false
        },
        // for HMR
        server: {
            watch: {
                usePolling: true
            }
        },
    }
});