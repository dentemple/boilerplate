import { injectGlobal } from "styled-components"
// import FONTNAME from "./assets/fonts/PATHTOFONT"

const theme = {
  fontPrimary: "sans-serif",
  fontSecondary: "sans-serif",
  screens: {
    tablet: "600px",
    landscape: "900px",
    desktop: "1200px"
  },
  colors: {
    black: "#111111",
    white: "#ffffff"
  }
}

/* 
Syntax for adding local fonts:

@font-face {
  font-family: 'FONTNAME';
  src: url(${FONTNAME}) format('FONTTYPE');
  font-weight: normal;
  font-style: normal;
} 
*/

injectGlobal`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${theme.fontPrimary};
    color: ${theme.black};
    background-color: ${theme.white}
  }
  *, *:before, *:after {
    box-sizing: inherit;
    /* border: 0.01px solid pink; */ /* Dev only */
  }
`

export default theme
