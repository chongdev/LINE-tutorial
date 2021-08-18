export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'กล่องรอดตาย',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#F6F9ED' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href:'https://fonts.gstatic.com', crossorigin: ''},
      // { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap'},
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap'},
      { rel: 'stylesheet', href:'https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'},
      // { rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ],
    script: [
      { src: 'https://static.line-scdn.net/liff/edge/2.1/sdk.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '~/assets/css/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    
  ],
  auth: {
    redirect: {
      login: '/login'
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, ctx) {}
  }
}
