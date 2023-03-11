/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      rotate: {
        '360':'360deg'
      },
      fontFamily: {
        'archivo-black': '"Archivo Black"',
        'lato': 'Lato',
        'archivo': 'Archivo',
        'teko': 'Teko'
      },
      colors: {
        'defaultWhite': '#EFEFEF',
        'defaultWhiteGD': "#F0F0F0",
        'defaultBlack': '#0B0B0B',
        'defaultBlue': '#2339FF',
        'darkBlue': "#0F22CE"
      },
      boxShadow: {
        'cartoon': "2px 2px 0px 0px black",
      }

    },
  },
  plugins: [],
}
