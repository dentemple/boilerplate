import React from "react"
import Routes from "./Routes"
import RenderStore from "../util/RenderStore" // For dev purposes only

const App = () => (
  <main>
    <Routes />
    <RenderStore />
  </main>
)

export default App
