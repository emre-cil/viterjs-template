import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`${css`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --primaryColor: #393e46;
    --secondaryColor: #00adb5;
  }

  * {
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--primaryColor);
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--darkGrey);
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: var(--darkGrey);
    }
  }
`}`;
