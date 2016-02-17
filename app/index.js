import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App.js'
import about from './about.js'
import Login from './components/Login'
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={about}/>
    <Route path="/login" component={Login}/>
    <Route path="/release" component={about}/>
    <Route path="/perftest" component={about}/>
    <Route path="/automationcover" component={about}/>
    <Route path="/qm" component={about}/>
    <Route path="/testrunconfig" component={about}/>
    <Route path="/historical" component={about}/>
  </Router>
), document.getElementById('app'))
