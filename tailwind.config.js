/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm": "480px"
      },
      spacing:{
        "big":"34rem",
        "350px":"350px",
        "450px":"450px",
        "450px":"450px",
        "550px":"550px"
      }
    },
    fontFamily:{
      nunito: ['Nunito', 'sans-serif']
    },
  },
  plugins: [],
}
