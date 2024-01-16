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
      }
    },
  },
  plugins: [],
}

