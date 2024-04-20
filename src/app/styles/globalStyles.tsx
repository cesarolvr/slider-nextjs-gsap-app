"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  * {
    box-sizing: border-box;
  }
}

html,
body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
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

::selection { background: white; color: black }
`;

export default GlobalStyle;
