/*
  For dev purposes only
*/

import React from 'react'
import { connect } from 'react-redux'

const RenderStore = props => {
  const style = {
    fontFamily: 'monospace',
    lineHeight: '1.5',
    width: '80%',
    minHeight: 100,
    margin: 30,
    padding: 20,
    backgroundColor: '#f3f3f3',
    border: '0.5px solid #777',
    borderRadius: 10
  }
  return (
    <pre style={style}>
      {JSON.stringify(props.store ? props.store : {}, null, 2)}
    </pre>
  )
}

const mapState = state => {
  return {
    store: state
  }
}

export default connect(mapState)(RenderStore)
