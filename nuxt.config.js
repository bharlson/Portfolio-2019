const pkg = require('./package');
const axios = require('axios');

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bjørn Harlson | Designer, Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', content: 'http://bjornharlson.com/img/about/chomp-static.jpg' },
      { hid: 'description', name: 'description', content: 'Portfolio Site for Bjørn Harlson, a Seattle based designer, front-end web developer and artist.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '@/components/Loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "@/assets/scss/_variables.scss";`
  //     }
  //   }
  // },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js',
    '~plugins/v-lazy-image.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/,
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'layouts/error.vue')
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
