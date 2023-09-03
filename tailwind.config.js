/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  
  theme: {
    container: {
      center: true,
      padding: '16px'
    },

    extend: {
      colors:{
        primary: '#2563eb',
        secondary: '#a1a1aa',
        dark:'#020617'
      }
    },

  },
  plugins: [],
}

