/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
        protest: ['Protest Strike', 'sans-serif'],
      },
      fontSize: {
        xsCustom: '0.875rem',  // 14px en rem
        sm: '1rem',            // 16px
        md: '1.25rem',         // 20px
        lg: '1.563rem',        // 25px
        xl: '2.5rem',          // 40px
        '2xl-custom': '1.875rem', // 30px en rem (Aquí sí necesitas las comillas porque tiene un guion)
      },
      colors: {
        primary: '#ED1B24',   
        secondary: '#FFFFFF',  
        background: '#000000', 
      },
    },
  },
  plugins: [],
};
