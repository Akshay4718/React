/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust path if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
