/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/6963.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}