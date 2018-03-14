import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { ConnectedRouter } from "react-router-redux"

import history from "state/history"
import configureStore from "state/store"
import theme from "theme"

// import registerServiceWorker from 'util/registerServiceWorker'

const store = configureStore()
const root = document.getElementById("root")

let render = () => {
  const App = require("App").default

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>,
    root
  )
}

// Configures Hot Module Reloading
if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("App", () => {
      setTimeout(render)
    })
  }
}

render()

// registerServiceWorker()
