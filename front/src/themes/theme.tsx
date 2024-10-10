import * as React from 'react';
import { ThemeProvider } from 'styled-components';

// const fontSizes: any = [14, 18, 20, 24, 36];

const primary = '#5E7430';
const secondary = '#2F5D55';
const tertiary = '#89AE29';
const offWhite = 'E4DED0';

const theme = {
  // fontSizes,
  fonts: {
    primary: 'Raleway',
    secondary: 'Roboto',
  },
  colors: {
    primary,
    secondary,
    tertiary,
    offWhite
  },
};

export type ThemeType = typeof theme;

interface Props {
  children: React.ReactNode;
}

export const Theme: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};