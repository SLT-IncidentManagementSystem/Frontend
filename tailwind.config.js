/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0056A4",
        green: "#4DB848",
        gray1: "#757575"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

