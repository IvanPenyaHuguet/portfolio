import { GlobalStyles } from "twin.macro";
import { appWithTranslation } from "next-i18next";
import ThemeProvider from "contexts/theme/ThemeProvider";
import { ResponsiveContext } from "contexts/ResponsiveContext";
import useScreenSize from "hooks/useScreenSize";

import "@fontsource/fira-code";
import "@fontsource/vollkorn";
import "@fontsource/libre-franklin";

function MyApp({ Component, pageProps }) {
  const resolution = useScreenSize();

  return (
    <>
      <ResponsiveContext.Provider value={{ resolution }}>
        <ThemeProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ResponsiveContext.Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
