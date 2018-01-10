import React from "react"
import styled from "styled-components"

import Routes from "./Routes"
import RenderStore from "../util/RenderStore" // For dev purposes only

const App = () => (
  <Display>
    <Routes />
    <RenderStore />
  </Display>
)

const Display = styled.div`
  display: grid;
`

export default App
