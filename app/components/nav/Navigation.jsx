import React from 'react'
import SideNavigation from './SideNavigation.jsx'
class Navigation extends React.Component {
    render () {
        return (
            <nav className="navbar-fixed-top bb">
              <div className="container-fluid ">
                <div className="navbar-header ">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <img src="img/alfresco-logo-48.png" className="logo-brand"  alt="Alfresco Logo"/>
                  <a className="navbar-brand" href="#">Test Platform</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a className="glyphicon glyphicon-bell"></a></li>
                    <li><a className="glyphicon glyphicon-th"></a></li>
                    <li><a className="glyphicon glyphicon-user"></a></li>
                  </ul>
                </div>
              </div>
            </nav>
        )
    }
}

export default Navigation
