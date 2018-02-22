import React from "react"
import { shallow } from "enzyme"
import MyComponent from "../Spinner"

it("renders without crashing", () => {
  shallow(<MyComponent />)
})
