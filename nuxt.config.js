const pkg = require('./package');
const axios = require('axios');

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

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
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/,
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',    
    ['storyblok-nuxt', {
      accessToken:
        process.env.NODE_ENV == 'production'
        ? '2n3obJaIQxp8eUfmQAtFiwtt'
        : 'jxWxKMXP01QfdxGiP4QrQgtt',
      cacheProvider:'memory'
    }],
  ],

  // generate:{
  //   routes: function(){
  //     return axios.get('https://api.storyblok.com/v1/cdn/stories?version=published&token=2n3obJaIQxp8eUfmQAtFiwtt&cv=' + Math.floor(Date.now()/1e3)
  //     )
  //     .then(res =>{
  //       return [
  //         '/',
  //         '/scott2019',
  //         '/creaytive',
  //         '/posters', 
  //         '/logos',
  //         '/about',
  //         '/scotsman-guide',
  //         '/ask-a-lender'
  //       ]
  //     })
  //   }
  // },


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
