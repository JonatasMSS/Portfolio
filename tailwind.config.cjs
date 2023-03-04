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
      }
    },
  },
  plugins: [],
}
