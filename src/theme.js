import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const theme = {}

export default theme
