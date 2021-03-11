import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  body {
    background: #eee;
  }

  input,
  button {
    outline: 0;
  }

  button {
    cursor: pointer;
  }
`;
