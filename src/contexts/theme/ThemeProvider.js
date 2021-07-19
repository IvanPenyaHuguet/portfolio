import { ThemeProvider } from "@emotion/react";
import { breakpoints, colors, fonts } from "../../../design.config";

const theme = {
  colors: colors,
  breakpoints: breakpoints,
  fonts,
};

export default function ThemeProviderComponent({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
