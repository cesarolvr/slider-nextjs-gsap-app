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
    overflow-x: scroll;
    overscroll-behavior-y: none;
  }

  body {
    color: white;
    background: black;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
