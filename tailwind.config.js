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
          "dark-three" : "#002A32",
          "light" : "#00535B"
        }
      },
      animation: {
        'slow-spin': 'spin-slow 10s ease-in-out infinite',
        'slow-scroll' : 'scroll-slow 10s linear infinite',
        'body-opacity' : 'fadeIn 0.2s ease-in'
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        'scroll-slow': {
          '0%' : { transform: 'translateX(0%)'},
          '100%' : { transform: 'translateX(-100%)'}
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      width: {
        'image': '650px'
      },
      height: {
        'image': '650px'
      },
    },
  },
  plugins: [],
}

