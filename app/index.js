import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Redirect, IndexRoute } from 'react-router'
import App from './App.js'
import About from './pages/About.js'
import Login from './components/Login'
import Dashboard from './pages/Dashboard.js'
import DashboardIndex from './pages/DashboardIndex.js'
import Release from './pages/Release.js'
import DefectTrendPage from './pages/DefectTrendPage.js'
import DefectDiscoveryPage from './pages/DefectDiscoveryPage.js'
import ContentLayout from './layout/ContentLayout.js'
const app = document.getElementById('app')
/**
 * Application router.
 */
ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={ContentLayout}>
          <IndexRoute component={DashboardIndex} > </IndexRoute>
          <Route path="about" name="about" component={About}/>
          <Route path="login" component={Login}/>
          <Route path="project/:project/:version" component={DashboardIndex}/>
          <Route path="project/:project/:version/dashboard" component={Dashboard}/>
          <Route path="project/:project/:version/release" component={Release} />
          <Route path="project/:project/:version/defect/trend" component={DefectTrendPage}/>
          <Route path="project/:project/:version/defect/discovery" component={DefectDiscoveryPage}/>
      </Route>
  </Router>, app);
