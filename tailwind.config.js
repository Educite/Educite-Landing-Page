const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors"); // Removing colors import

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.tsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   trueGray: colors.neutral,
      // },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
