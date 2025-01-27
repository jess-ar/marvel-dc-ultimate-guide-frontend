/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        bangers: ['Bangers', 'cursive'],
      },
      colors: {
        primary: '#ED1B24',
        secondary: '#FFFFFF',
        terciary: '#007DBF',
        background: '#000000',
        navbar: '#21020B',
        placeholder: '#AA9999',
      },
      backgroundImage: {
        navbarmobile: 'linear-gradient(180deg, #0072E4 0%, #002D70 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  
};