import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'montserrat': ['Montserrat', 'sans-serif'],
      'salsa': ['Salsa', 'cursive']
    },
    extend: {
      backgroundImage: {
        'check': "url('/svg/check.svg')",
        'presentation' : "url('/img/presentacion.png')"
      },
      animation:{
        'alert': 'alert 0.5s linear'
      },
      keyframes:{
        alert:{
          '0%' : {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(-1rem)'}
        }
      }
    },
  },
  plugins: [],
}

