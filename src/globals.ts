import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url(//db.onlinewebfonts.com/c/c627f5f4597153a6103abfda8417df0a?family=Apercu+Arabic+Pro);

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
