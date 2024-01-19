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
        'presentation' : "url('/img/presentacion.png')",
        'spinner': "url('/svg/spinner.svg')"
      },
      animation:{
        'alert': 'alert 0.5s linear',
        'loading': 'loading 8s linear infinite'
      },
      keyframes:{
        alert:{
          '0%' : {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(-1rem)'}
        },
        loading : {
          '0%' : {transform: 'rotate(0)'},
          '25%' : {transform: 'rotate(45dg)'},
          '50%' : {transform: 'rotate(90dg)'},
          '75%': {transform: 'rotate(135dg)'},
          '100%': {transform: 'rotate(180dg)'}
        }
      }
    },
  },
  plugins: [],
}

