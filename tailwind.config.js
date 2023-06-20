/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'abel': ['Abel', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive']
      },
    },
  },
  plugins: [],
};
