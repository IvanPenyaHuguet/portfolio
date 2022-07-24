import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { ResponsiveContext } from '@contexts/index';
import { useScreenSize } from '@hooks/index';
import { MainHead, EmotionTheme } from '@components/index';

import i18n from '@lib/internationalization/i18n-config';
import "@fontsource/fira-code";
import "@fontsource/vollkorn";
import "@fontsource/libre-franklin";

export default function App() {
  const resolution = useScreenSize();

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <HelmetProvider>
          <ResponsiveContext.Provider value={{ resolution }}>
            <EmotionTheme>
              <>
                <div className="App" id="App">
                  <MainHead />
                  <main className="MainApp" id="MainApp">
                    <h2>{'hola'}</h2>
                  </main>
                </div>
              </>
            </EmotionTheme>
          </ResponsiveContext.Provider>
        </HelmetProvider>
      </I18nextProvider>
    </>
  );
}
