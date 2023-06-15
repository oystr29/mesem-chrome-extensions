/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'"],
      }
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/typography')],
}

