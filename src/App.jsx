import React, { Component } from "react"
import styled from "styled-components"

import Routes from "pages/Routes"
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
  display: flex;
  flex-direction: column;

  /* @supports (display: grid) {
    display: grid;
  } */
`

export default App
