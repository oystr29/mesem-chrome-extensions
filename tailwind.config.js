/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica'],
        roboto: ["'Roboto'"],
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

