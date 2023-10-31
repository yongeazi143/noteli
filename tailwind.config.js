/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      hero: "#FFF2E1",
      "light-blue": "#65DAFF",
      "dark-blue": "#2F327D",
      blue: "#545AE7",
      orange: "#F48C06",
      white: "#FFF",
      black: "#000",
      "nav-blue": "#252641",
      "gray-dark": "#FFF2E1",
      "light-gray": "#696984",
      gray: "#696984",
      footer: "#252641",
      "gray-100": "#B2B3CF",
      teal: "#20c997",
      indigo: "#6610f2",
      yellow: "#f0864a",
      purple: "#AA87F5",
      info: "#87baf5",
      cyan: "#87baf5",
      red: "#f674ad",
      green: "#8ac3a3",
      sky: "#158df7",
    },
    fontFamily: {
      serif: ["Nunito Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      unica: ["Unica One", "cursive"],
    },
    extend: {},
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
