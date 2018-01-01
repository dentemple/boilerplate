import React from "react"
import styled from "styled-components"
import Routes from "./Routes"
import RenderStore from "../util/RenderStore" // For dev purposes only

const App = () => (
  <Display>
    <Content>
      <Routes />
      <RenderStore />
    </Content>
  </Display>
)

const Display = styled.div`
  display: grid;
  grid-template-areas: "content";

  @media only screen and (min-width: ${props => props.theme.mobile}) {
    grid-template-areas: "content";
  }
`

const Content = styled.section`
  grid-area: content;
`

export default App
