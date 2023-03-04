/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        'teko':['Teko','sans-serif'],
        'lato':['Lato','sans-serif'],
        'archivo-black':['"Archivo Black"', 'sans-serif'],
        'archivo':['Archivo','sans-serif']
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
