"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  * {
    box-sizing: border-box;
    cursor: none;
  }
}

html,
body {
  width: 100vw;
  height: 500vw;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overscroll-behavior: none;
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

@keyframes pingPingButtonText {
 0% { transform: translateX(30px) scale(2); }
 100% { transform: translateX(-30px) scale(2) }
}
`;

export default GlobalStyle;
