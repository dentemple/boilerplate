import React, { Fragment } from "react"
import ScreenReaderOnly from "../ScreenReaderOnly"

const Icon = ({ screenReader = "", children }) => (
  <Fragment>
    <span>{children}</span>
    {screenReader ? (
      <ScreenReaderOnly screenReader={screenReader} />
    ) : (
      <Fragment />
    )}
  </Fragment>
)

export default Icon
