import { injectGlobal } from "styled-components"

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
