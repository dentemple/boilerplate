import React from "react"
import { shallow } from "enzyme"
import MyComponent from "../Icon"

it("renders without crashing", () => {
  shallow(<MyComponent screenReader="string">Children</MyComponent>)
})
