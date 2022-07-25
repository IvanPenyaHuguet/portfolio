import { colors, fonts, breakpoints, media, borders, shadows, spacings, filters } from "@styles/index";


const baseThemeProps = {
  colors,
  breakpoints,
  media,
  fonts,
  borders,
  shadows,
  spacings,
  filters
}


const lightThemeProps = {
  ...baseThemeProps
};

const darkThemeProps = {
  ...baseThemeProps
};


export {lightThemeProps, darkThemeProps};
