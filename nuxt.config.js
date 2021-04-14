export default {
  target: 'static',
  telemetry: false,
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  head: {
    title: 'DLZ Media',
    titleTemplate: '%s | DLZMedia.ca',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'DLZ media is a Toronto base video production company, staring at 2019. We are focus on making cost- effective videos and images for small businesses.',
      },
      {
        hid: 'msapplication-tile-color',
        name: 'msapplication-TileColor',
        content: '#2b5797',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff',
      },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#4ab3cd',
      },
    ],
  },

  css: ['@/assets/magic/animate.min.css', '@/assets/css/main.scss'],
  plugins: [{ src: '@/plugins/directus' }, { src: '@/plugins/masonry' }],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
}
