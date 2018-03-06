import { injectGlobal } from "styled-components"
// import FONTNAME from "assets/fonts/PATHTOFONT"

const theme = {
  fontPrimary: "sans-serif",
  fontSecondary: "monospace",
  screens: {
    tablet: "600px",
    landscape: "900px",
    desktop: "1200px"
  },
  colors: {
    black: "#333333" /* Charcoal Gray */,
    white: "#ffffff"
  }
}

/* 
Syntax for adding local fonts:

@font-face {
  font-family: 'FONTNAME';
  src: url(${FONTNAME}) format('TYPE_OF_FONT');
  font-weight: normal;
  font-style: normal;
} 
*/

injectGlobal`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    /* border: 0.01px solid pink; */ /* Dev only */
  },
  body {
    font-family: ${theme.fontPrimary};
    color: ${theme.black};
    background-color: ${theme.white};
  }
`

export default theme
