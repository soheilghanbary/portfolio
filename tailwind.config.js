/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#818cf8",
        red: "#FB7185",
        blue: "#38BDF8",
        yellow: "#fb923c",
        green: '#2DD4BF'
      },
    },
  },
  plugins: [],
};
