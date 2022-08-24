/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#F3F8FF",
        150: "#F1F7FF",
        200: "#EBFDFF",
        300: "#E7F0FD",
        350: "#C9D9EF",
        375: "#C4DFEA",
        400: "#C0EBF6",
        500: "#95E8F7",
        550: "#85D8E7",
        600: "#5DE6FF",
        650: "#41A3BB",
        700: "#00A3CE",
        800: "#077997",
      },
      gray: {
        200: "#A1A1A1",
        300: "#9697A3",
        500: "#666666",
        550: "#626675",
        575: "#5B6C84",
        700: "#333333",
      },
      red: {
        700: "#D00000",
      },
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    fontFamily: {
      body: ["MuseoSansRounded", "Arial", "sans-serif"],
    },
    fontSize: {
      10: ["10px", 1],
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
      breadcrumb: "0px 10px 15px #DFECFF",
      "button-inset": "inset 3px 0.26px 18px #85D8E759",
    },
    extend: {},
  },
  plugins: [],
}
