/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  screens:{
    xs: "320px",
    sm: "375px",
    sml: "500px",
    md: "667px",
    mdl: "768px",
    lg: "960px",
    lgl: "1024px",
    xl: "1280px",
  },
  theme: {
    extend: {},
  },
  plugins: [],
}