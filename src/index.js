/* react */
import React from 'react'
import ReactDOM from 'react-dom'

/* state */
import { Provider } from 'react-redux'
import configureStore from './state/store'

/* style */
import { ThemeProvider } from 'styled-components'
import theme from './theme'

/* util */
import * as serviceWorker from './util/serviceWorker'

/* polyfills */
import 'whatwg-fetch'

/* set references */
const store = configureStore()
const root = document.getElementById('root')

let render = () => {
  const App = require('./App').default

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
    root
  )
}

// Configure Hot Module Reloading
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(['./App', './theme'], () => {
    render()
  })
}

// Run app for the first time
render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
