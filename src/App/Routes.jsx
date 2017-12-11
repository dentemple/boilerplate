import React from 'react'
import { Switch, Route } from 'react-router-dom'
import asyncComponent from '../util/AsyncComponent'

const HomePage = asyncComponent(() => import('../pages/HomePage'))
const PageNotFound = asyncComponent(() => import('../pages/PageNotFound'))

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route component={PageNotFound} />
  </Switch>
)

export default Routes
