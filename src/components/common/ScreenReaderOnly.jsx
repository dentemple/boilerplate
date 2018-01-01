import React from "react"
import styled from "styled-components"

/* Screen-Reader-Only */
const ScreenReaderOnly = ({ screenReader }) => (
  <HiddenSpan>{screenReader}</HiddenSpan>
)

const HiddenSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

export default ScreenReaderOnly
