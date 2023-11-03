/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ranga': ['Ranga-Regular', 'sans'],  // Add 'sans' as a fallback font-family
        'manrope': ['Manrope', 'sans']       // Add 'sans' as a fallback font-family
      }
    }
  },
  plugins: [],
}