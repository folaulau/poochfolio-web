/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        lightest: "#EBFDFF",
        lighter: "#E7F0FD",
        light: "#C0EBF6",
        DEFAULT: "#95E8F7",
        dark: "#5DE6FF",
        darker: "#00A3CE",
        darkest: "#077997",
      },
      gray: {
        DEFAULT: "#666666",
        dark: "#333333",
      },
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    fontFamily: {
      body: ["MuseoSansRounded", "Arial", "sans-serif"],
    },
    fontSize: {
      12: ["12px", 1],
      15: ["15px", 1],
      16: ["16px", 1],
      18: ["18px", 1],
      40: ["40px", 1],
      54: ["54px", 1],
      60: ["60px", 1],
    },
    fontWeight: {
      100: 100,
      300: 300,
      500: 500,
      700: 700,
      900: 900,
      1000: 1000,
    },
    container: {
      center: true,
      padding: "3rem",
      screens: {
        sm: "1024px",
        "2xl": "1280px",
      },
    },
    boxShadow: {
      button: "0px 15px 20px #00A3CE26",
    },
    extend: {},
  },
  plugins: [],
}
