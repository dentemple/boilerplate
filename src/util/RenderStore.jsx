/*
  For dev purposes only
*/

import React from "react"
import { connect } from "react-redux"
import { testDispatch } from "../state/actions"

const RenderStore = props => {
  const style = {
    fontFamily: "monospace",
    lineHeight: "1.5",
    minHeight: 100,
    margin: 40,
    padding: 20,
    backgroundColor: "#f3f3f3",
    border: "0.5px solid #777",
    borderRadius: 10
  }
  const managedFunction = () => props.passedFunction()
  return (
    <pre style={style}>
      {JSON.stringify(props.store ? props.store : {}, null, 2)}
      <p>
        <button onClick={() => managedFunction()}>Test Dispatch</button>
      </p>
    </pre>
  )
}

const mapState = state => {
  return {
    store: state
  }
}

const mapDispatch = dispatch => {
  return {
    passedFunction: value => {
      dispatch(testDispatch())
    }
  }
}

export default connect(mapState, mapDispatch)(RenderStore)
