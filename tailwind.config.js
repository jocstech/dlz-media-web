module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: '#4DCCDD',
        primary: '#503386',
        secondary: '#2F7196',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
        '50w': '50vw',
        '55w': '55vw',
        '60w': '60vw',
        '65w': '65vw',
        '70w': '70vw',
        '75w': '75vw',
        '80w': '80vw',
        '85w': '85vw',
        '90w': '90vw',
        '95w': '95vw',
        '100w': '100vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
