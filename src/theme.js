import { injectGlobal } from "styled-components"
// import FONT-NAME from "./fonts/PATH-TO-FONT"

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

injectGlobal`
  /* @font-face {
    font-family: 'FONT-NAME';
    src: url(${FONT - NAME}) format('FONT-TYPE');
    font-weight: normal;
    font-style: normal;
  } */
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
    /* border: 0.01px solid pink; */
  }
`

export default theme
