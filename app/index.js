import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App.js'
import About from './pages/About.js'
import Login from './components/Login'
import Dashboard from './pages/Dashboard.js'
import Release from './pages/Release.js'
import Release51 from './pages/DefectTrend51.js'
import ReleaseCloud from './pages/DefectTrendCloud.js'
render((
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard}/>
    <Route path="/Dashboard" component={Dashboard}/>
    <Route path="/Release" component={Release}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="/release" component={App}/>
    <Route path="/release/5.1/trend" component={Release51}/>
    <Route path="/release/cloud430/trend" component={ReleaseCloud}/>
    <Route path="/perftest" component={About}/>
    <Route path="/automationcover" component={About}/>
    <Route path="/qm" component={About}/>
    <Route path="/testrunconfig" component={About}/>
    <Route path="/historical" component={About}/>
  </Router>
), document.getElementById('app'))
