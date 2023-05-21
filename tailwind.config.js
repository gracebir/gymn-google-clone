/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'search-shadow':"0 1px 6px rgba(32,33,36,.28)",
        "btn-search": "0 1px 1px rgba(0,0,0,.1)"
      },
      colors: {
        "btn-bg": "#f8f9fa"
      },
      fontFamily: {
        "global-font": ["arial", "sans-serif"]
      }
    },
  },
  plugins: [],
}

