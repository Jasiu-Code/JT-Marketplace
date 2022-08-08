/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        themeDark: '#000000',
        themePrimary: '#f35b04',
        themeLight: '#fcfffc',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
