/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: "class", // or 'media' or 'class',
  darkMode: "class",
  theme: {
    extend: {
      spacing:{
        "big":"48rem"
      }
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
