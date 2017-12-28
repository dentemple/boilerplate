import React from "react"
import { shallow } from "enzyme"
import MyComponent from "../Routes"

it("renders without crashing", () => {
  shallow(<MyComponent />)
})
