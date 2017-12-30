import React from "react"
import { Display, Content } from "./Layout"
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

export default App
