import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Apercu Arabic Pro';
    src: local('Apercu Arabic Pro Bold'), local('Apercu-Arabic-Pro-Bold'),
        url('./fonts/ApercuArabicProBold.woff2') format('woff2'),
        url('./fonts/ApercuArabicProBold.woff') format('woff'),
        url('./fonts/ApercuArabicProBold.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    font-family: "Apercu Arabic Pro";
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
