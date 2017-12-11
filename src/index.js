import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ConnectedRouter } from 'react-router-redux'

// import registerServiceWorker from './util/registerServiceWorker'
import history from './util/history'
import configureStore from './store'
import theme from './theme'

const store = configureStore()
const root = document.getElementById('root')

let render = () => {
  const App = require('./App').default

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>,
    root
  )
}

// Configures Hot Module Reloading
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      setTimeout(render)
    })
  }
}

render()
// registerServiceWorker()
