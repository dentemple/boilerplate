import React from "react"
import { Switch, Route } from "react-router-dom"
import asyncComponent from "../util/AsyncComponent"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/404" component={PageNotFound} />
    <Route component={PageNotFound} />
  </Switch>
)

const HomePage = asyncComponent(() => import("../components/pages/HomePage"))
const PageNotFound = asyncComponent(() =>
  import("../components/pages/PageNotFound")
)

export default Routes
