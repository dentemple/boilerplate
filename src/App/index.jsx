import React, { Component, Fragment } from 'react'

import Display from './Display'
import GlobalStyle from './GlobalStyle'
import Header from '../components/Header'
import RenderStore from '../util/RenderStore'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Display>
          <Header />
          <RenderStore />
        </Display>
      </Fragment>
    )
  }
}

export default App
