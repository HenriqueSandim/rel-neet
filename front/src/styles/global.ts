import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  body, header, main, footer, section, div, h1, h2, h3, h4, h5, h6, p, span, button, input, label, ul, li{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;

    background: none;
    border: none;
  }

  :root {
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --sucess: #3FE864;
    --negative: #E83F5B;
  }
`