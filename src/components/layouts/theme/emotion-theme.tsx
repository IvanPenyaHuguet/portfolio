import { ThemeProvider, Global } from "@emotion/react";
import { useEffect, useState } from "react";
import { lightThemeProps, darkThemeProps } from '@styles/emotion-theme';
import { globalEmotionStyles } from '@styles/global-emotion-styles';
import {ThemeContext} from '@contexts/index';
import { ThemeOption } from "@models/index";
import { NormalizeCss } from '@styles/normalize';


interface Props {
  children?: JSX.Element;
}

export default function EmotionTheme({ children }: Props) {

  const [theme, setTheme] = useState<ThemeOption>('light');

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme])

  const themeProps = theme === 'light' ? lightThemeProps : darkThemeProps;

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={themeProps}>
        <Global styles={NormalizeCss} />
        <Global styles={globalEmotionStyles} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
