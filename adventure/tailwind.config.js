/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        lobster: ["Lobster Two", "cursive"]
      }
    },
  },
  plugins: [],
}
