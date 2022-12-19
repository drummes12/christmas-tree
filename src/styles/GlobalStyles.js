import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    user-select: none;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  body::before {
    z-index: -1;
    position: fixed;
    content: '';
    width: 100vw;
    height: 100vh;
    background-image: url('https://assets.stickpng.com/images/5846a020cef1014c0b5e47f9.png');
    filter: blur(2px) brightness(0.3);
  }
  body::after {
    position: fixed;
    bottom: 0;
    content: 'by Drummes12';
    color: white;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
