export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // SSR (サーバーサイドレンダリング) を有効にする
  ssr: false,

  nitro: {
    preset: 'static',  // 静的サイトとして生成
    serveStatic: true  // 静的ファイルとしてサーブする
  },

  generate: {
    fallback: true,  // 404.html を生成する場合
  
},

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'yoshi-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/firebase.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  compatibilityDate: '2024-12-13'
};