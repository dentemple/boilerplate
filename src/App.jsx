import React, { Component, StrictMode } from "react"
import styled from "styled-components"

import Routes from "components/pages/Routes"
import RenderStore from "util/RenderStore"

class App extends Component {
  render() {
    return (
      <StrictMode>
        <Display>
          <Routes />
          <RenderStore />
        </Display>
      </StrictMode>
    )
  }
}

const Display = styled.div`
  display: flex;
  flex-direction: column;

  /* @supports (display: grid) {
    display: grid;
  } */
`

export default App
