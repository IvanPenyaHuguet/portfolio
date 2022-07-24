import { colors, fonts, breakpoints, borders, shadows, spacings } from "@styles/index";


const baseThemeProps = {
  colors,
  breakpoints,
  fonts,
  borders,
  shadows,
  spacings
}


const lightThemeProps = {
  ...baseThemeProps
};

const darkThemeProps = {
  ...baseThemeProps
};

export {lightThemeProps, darkThemeProps};
