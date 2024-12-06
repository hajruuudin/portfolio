/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'antique' : {
          "dark-container" : "#001F22",
          "dark-one" : "#01424F",
          "dark-two" : "#003842",
          "dark-three" : "#002A32"
        }
      },
      animation: {
        'slow-spin': 'spin-slow 5s ease-in-out infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'scale(1.0)' },
          '50%' : {transform: 'scale(3.0)'},
          '100%': { transform: 'scale(1.0)' },
        },
      },
    },
  },
  plugins: [],
}

