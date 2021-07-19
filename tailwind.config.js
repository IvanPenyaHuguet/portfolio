const designConf = require("./design.config");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { colors: designConf.colors, fontFamily: designConf.fonts },
    screens: designConf.breakpoints,
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-filters"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
  xwind: {
    mode: "objectstyles",
  },
};
