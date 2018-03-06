import React from "react"
import styled from "styled-components"

import Routes from "App/Routes"
import RenderStore from "util/RenderStore" // For dev purposes only

const App = () => (
  <Display>
    <Routes />
    <RenderStore />
  </Display>
)

const Display = styled.div`
  display: flex;
  flex-direction: column;

  /* @supports (display: grid) {
    display: grid;
  } */
`

export default App
