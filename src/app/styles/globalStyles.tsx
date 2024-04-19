"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  body {
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
