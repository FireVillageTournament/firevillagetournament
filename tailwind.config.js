/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
      extend: {
        colors: {
          fire: {
            yellow: '#facc15',
            dark: '#0f0f0f',
            gray: '#1f2937'
          }
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          heading: ['Oswald', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
  