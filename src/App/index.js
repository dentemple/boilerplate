import React, { Component } from 'react'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="logo" style={{ width: 100 }} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
