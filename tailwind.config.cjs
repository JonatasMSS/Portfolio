/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        'archivo-black':'"Archivo Black"',
        'lato':'Lato',
        'archivo':'Archivo',
        'teko':'Teko'
      },
      colors:{
        'defaultWhite':'#EFEFEF',
        'defaultWhiteGD':"#F0F0F0",
        'defaultBlack':'#0B0B0B',
      }
      
    },
  },
  plugins: [],
}
