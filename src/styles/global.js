import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: #1f2023;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    color: #f8f8f8;
    font-style: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
