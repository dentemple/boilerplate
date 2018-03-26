import React, { Fragment } from "react"
import ScreenReaderOnly from "../ScreenReaderOnly"

const Icon = ({ children, screenReader = "" }) => (
  <Fragment>
    <span>{children}</span>
    {screenReader && <ScreenReaderOnly screenReader={screenReader} />}
  </Fragment>
)

export default Icon
