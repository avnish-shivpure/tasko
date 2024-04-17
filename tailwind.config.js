/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner2': 'inset 0px 1px 20px 1px'
      },
      fontFamily: {
        sans: 'Mulish, sans-serif',
        serif: "Arvo, serif",
         // Custom font family for 'font-display' class
      },
    },
  },
  plugins: [],
  
};
