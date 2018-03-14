import React, { Component } from "react"
import styled from "styled-components"

import Routes from "App/Routes"
import RenderStore from "util/RenderStore"

class App extends Component {
  render() {
    return (
      <Display>
        <Routes />
        <RenderStore />
      </Display>
    )
  }
}

const Display = styled.div`
  flex: 1;

  /* @supports (display: grid) {
    display: grid;
  } */
`

export default App
