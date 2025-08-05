/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This path is now correct from root
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1E293B',
        'medium-dark-bg': '#161B22',
        'light-text': '#C9D1D9',
        'medium-text': '#8B949E',
        'accent-primary': '#58A6FF',
        'accent-hover': '#388BF6',
        'accent-secondary': '#A371F7',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};