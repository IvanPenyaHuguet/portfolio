import { GlobalStyles } from "twin.macro";
import { appWithTranslation } from "next-i18next";
import ThemeProvider from "contexts/theme/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
