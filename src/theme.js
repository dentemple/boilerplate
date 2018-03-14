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
    white: "#fefefe"
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
    font-family: ${theme.fontPrimary};
    color: ${theme.black};
    background-color: ${theme.white};
    font-size: 1.2em;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  },
  body {
    font-family: inherit;
    color: inherit;
    background-color: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fontSecondary};
  }
`

export default theme
