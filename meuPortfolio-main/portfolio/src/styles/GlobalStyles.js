import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: #121212;
    --color-primary: #1e1e1e;
    --color-secondary: #2a2a2a;
    --color-accent: #bb86fc;
    --color-text: #ffffff;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-accent);
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyles;
