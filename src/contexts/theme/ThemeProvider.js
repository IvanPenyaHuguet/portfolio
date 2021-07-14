import { ThemeProvider } from "@emotion/react";
import { breakpoints, colors } from "../../../design.config";

const theme = {
  colors: colors,
  breakpoints: breakpoints,
};

export default function ThemeProviderComponent({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
