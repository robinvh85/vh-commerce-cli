import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/not_found/NotFound'
import HomeLayout from './layouts/HomeLayout'
import AboutLayout from './layouts/AboutLayout'

const router = () => {
  
  // Route for HomeLayout
  const HomeRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={routeProps => (
      <HomeLayout>
        <Component {...routeProps}/>
      </HomeLayout>
    )}/>
  )

  // Route for AboutLayout
  const AboutRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={routeProps => (
      <AboutLayout>
        <Component {...routeProps}/>
      </AboutLayout>
    )}/>
  )

  return (
    <Switch>
      <HomeRoute exact path="/" component={Home}/>
      <AboutRoute path="/about" component={About}/>
      <Route component={NotFound} />
    </Switch>
  )
}

export default router;
