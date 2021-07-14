const breakpoints = {
  xs: {
    max: 450,
  },
  sm: {
    min: 451,
    max: 800,
  },
  md: {
    min: 801,
    max: 1200,
  },
  lg: {
    min: 1201,
    max: 1800,
  },
};

const colors = {
  primary: "#abc2e8",
  secondary: "#00878a",
  advise: "#ffc740",
  black: "black",
  white: "white",
  error: "#da0101",
  lightgray: "#f6f6f6",
  alert: {
    error: "#ff7272",
    success: "#b5ead7",
  },
};

module.exports = { colors, breakpoints };
