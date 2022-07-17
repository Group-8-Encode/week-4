/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#25262E",
        secondary: "#E01595",
        accent: "#2B2E3B",
      },
    },
  },
  plugins: [],
};
