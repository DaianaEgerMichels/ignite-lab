/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      
      black: '#000',
      white: '#FFF',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      cyan: {
        500: '#05b6d4',
        400: '#22d3ee',
        300: '#67e8f9',
        200: '#a5f3fc',
        100: '#cffafe',
      }

      
    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
    },
  },
  plugins: [],
}
