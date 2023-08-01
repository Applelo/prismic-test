// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/prismic"],

  css: ['assets/scss/main.scss'],
  prismic: {
    endpoint: "applelo",
    clientConfig: {
      routes: [
          {
            "type": "home",
            "path": "/"
          },
          {
            "type": "project",
            "path": "/projects/:uid"
          }
      ]
    },
  }
})
