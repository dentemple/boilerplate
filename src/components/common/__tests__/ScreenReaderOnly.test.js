import React from "react"
import { shallow } from "enzyme"
import MyComponent from "../ScreenReaderOnly"

it("renders without crashing", () => {
  shallow(<MyComponent screenReader="example string" />)
})
