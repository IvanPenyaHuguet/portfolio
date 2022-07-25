import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResponsiveContext } from '@contexts/index';
import { useScreenSize } from '@hooks/index';
import { MainHead, EmotionTheme, NavBar } from '@components/index';

import i18n from '@lib/internationalization/i18n-config';
import '@fontsource/fira-code';
import '@fontsource/vollkorn';
import '@fontsource/libre-franklin';
import { HomePage } from './pages';

export default function App() {
  const resolution = useScreenSize();

  return (
    <>
      <Router>
        <I18nextProvider i18n={i18n}>
          <HelmetProvider>
            <ResponsiveContext.Provider value={{ resolution }}>
              <EmotionTheme>
                <>
                  <div className='App' id='App'>
                    <MainHead />
                    <NavBar />
                    <main className='MainApp' id='MainApp'>
                      <HomePage />
                    </main>
                  </div>
                </>
              </EmotionTheme>
            </ResponsiveContext.Provider>
          </HelmetProvider>
        </I18nextProvider>
      </Router>
    </>
  );
}
