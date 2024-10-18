import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  #root {
    min-height: 100%;
  }
`;