/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '15%': '15%',
      },
      border: {
        '1px': '1px',
      },
      width: {
        '15%': '15%',
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
        '85%': '85%'
      },
      height: {
        '53px': '53px',
        '119px': '119px',
        '25%': '25%',
        '50%': '50%',
      },
      colors: {
        'white1': '#D9D9D9',
      }
    },
  },
  plugins: [],
}