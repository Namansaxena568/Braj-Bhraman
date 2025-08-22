
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        braj: {
          saffron: '#f59e0b',
          purple: '#7c3aed',
          cream: '#fef3c7'
        }
      },
      container: { center: true, padding: '1rem' },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,.15)'
      }
    },
  },
  plugins: [],
}
