//const designConf = require("./config/design.config");

module.exports = {
  /*  mode: "jit", */
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //extend: { colors: designConf.colors, fontFamily: designConf.fonts },
    textIndent: {
      1: "0.25rem",
      2: "0.5rem",
    },
    textShadow: {
      default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    screens: {
      xs: {
        min: "0px",
        max: "450px",
      },
      sm: {
        min: "451px",
        max: "799px",
      },
      md: {
        min: "800px",
        max: "1200px",
      },
      lg: {
        min: "1201px",
        max: "1850px",
      },
      xl: {
        min: "1851px",
      },
      mdland: {
        raw: "(orientation: landscape) and (min-width:800px) and (max-width:1200px) and (max-height: 500px)",
      },
      smland: {
        raw: "(orientation: landscape) and (min-width:451px) and (max-width:799px) and (max-height: 400px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
  xwind: {
    mode: "objectstyles",
  },
};
