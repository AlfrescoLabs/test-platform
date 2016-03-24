import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App.js'
import About from './pages/About.js'
import Login from './components/Login'
import Dashboard from './pages/Dashboard.js'
import Release from './pages/Release.js'
import DefectTrendPage from './pages/DefectTrendPage.js'
import DefectDiscoveryPage from './pages/DefectDiscoveryPage.js'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard}/>
    <Route path="/alfresco/:version" component={Dashboard}/>
    <Route path="/alfresco/:version/trend" component={DefectTrendPage}/>
    <Route path="/alfresco/:version/defect/discovery" component={DefectDiscoveryPage}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="/:project/:version/release" component={Release} />
    <Route path="/:project/:version/trend" component={DefectTrendPage}/>

  </Router>
), document.getElementById('app'))
