import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      advise: string;
      black: string;
      white: string;
      error: string;
      lightGray: string;
      js: string;
      java: string;
      react: string;
      spring: string;
      alert: {
        error: string;
        success: string;
      };
      softGray: string;
    };
    breakpoints: {
      xs: {
        min: number;
        max: number;
      };
      sm: {
        min: number;
        max: number;
      };
      md: {
        min: number;
        max: number;
      };
      lg: {
        min: number;
        max: number;
      };
    };
    media: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      mobile: string;
      mdland: string;
      smland: string;
    };
    shadows: {
      normal: string;
    };
    spacings: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    fonts: {
      size: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        xxxlarge: string;
        largest: string;
      };
      weight: {
        light: string;
        normal: string;
        bold: string;
        extrabold: string;
      };
      line: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        xxxlarge: string;
        largest: string;
      };
      code: string;
      text: string;
      title: string;
    };
    borders: {
      radius: {
        none: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        round: string;
      };
    };
    filters: {
      blurNormal: string;
    };
  }
}
