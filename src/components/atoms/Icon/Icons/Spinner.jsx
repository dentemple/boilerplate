import React from "react"
import FaSpinner from "react-icons/lib/fa/spinner"

import Icon from "components/atoms/Icon"

const Spinner = () => (
  <Icon speak="Loading!">
    <FaSpinner title="Loading!" aria-hidden="true" />
  </Icon>
)

export default Spinner
