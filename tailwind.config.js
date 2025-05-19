/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#030b25',
        // navy: '#26517d',
        cyan: '#22abfa',
        white: '#e6f1ff',
        grey: '#b1bcdc',
        light_grey: '#1b243f',
        dark_blue: '#02091d',
=======
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Poppins font added here
      },
      keyframes: {
        navAnimation: {
          '0%': { transform: 'rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'rotateX(0)', opacity: '1' },
        },
      },
      animation: {
        navAnimation: 'navAnimation 4s ease forwards',
>>>>>>> 8733996 (Initial commit)
      },
    },
  },
  plugins: [],
};
