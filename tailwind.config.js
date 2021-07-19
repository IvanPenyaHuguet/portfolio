const designConf = require("./design.config");

module.exports = {
  /*  mode: "jit", */
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { colors: designConf.colors, fontFamily: designConf.fonts },
    screens: {
      xs: {
        min: "0px",
        max: "450px",
      },
      sm: {
        min: "451px",
        max: "800px",
      },
      md: {
        min: "801px",
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
        raw: "(orientation: landscape) and (min-width:801px) and (max-width:1200px) and (max-height: 500px)",
      },
      smland: {
        raw: "(orientation: landscape) and (min-width:451px) and (max-width:800px) and (max-height: 400px)",
      },
    },
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
