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
          "dark-container" : "#001F22"
        }
      }
    },
  },
  plugins: [],
}

