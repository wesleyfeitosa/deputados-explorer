import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #E0E0E5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Jost', sans-serif;
    border: 0;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
