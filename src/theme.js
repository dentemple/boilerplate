import { injectGlobal } from "styled-components"

injectGlobal`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    border: 0.05px solid pink; /* Dev only */
  }
`

const theme = {
  mobile: "600px;"
}

export default theme
