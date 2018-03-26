import React from "react"
import FaSpinner from "react-icons/lib/fa/spinner"

import Icon from "components/common/Icon"

const Spinner = () => (
  <Icon speak="Loading!">
    <FaSpinner title="Loading!" aria-hidden="true" />
  </Icon>
)

export default Spinner
