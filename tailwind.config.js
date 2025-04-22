/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg": "url('./assets/backgroundImg.png')",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
