/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  plugins: [],
}
