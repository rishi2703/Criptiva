
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', 'sans-serif'],
        pixelify: ['"Pixelify Sans"', 'cursive'],
      },
    },
  },
  plugins: [],
}
