import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/prismic"],

  css: ['assets/scss/main.scss'],
  prismic: {
    endpoint: repositoryName,
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
