import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App.js'
import About from './About.js'
import Login from './components/Login'
import Dashboard from './Dashboard.js'
render((
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="/release" component={App}/>
    <Route path="/perftest" component={About}/>
    <Route path="/automationcover" component={About}/>
    <Route path="/qm" component={About}/>
    <Route path="/testrunconfig" component={About}/>
    <Route path="/historical" component={About}/>
  </Router>
), document.getElementById('app'))
