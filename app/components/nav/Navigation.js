import React from 'react'
import { Link } from 'react-router'
import SideNavigation from './SideNavigation'
import Dropdown from '../Dropdown'
class Navigation extends React.Component {

    render () {
        let data = [
            {
                name: "Alfresco 5.1",
                value: "/alfresco/5.1"
            },
            {
                name: "Cloud",
                value: "/cloud"
            },
            {
                name: "RM 2.4",
                value: "/alfresco/rm/2.4"
            }
        ];
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
                        <Link className="navbar-brand" to="/">Test Platform</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Dropdown list={data} selected={{name : "Project", value:""}}></Dropdown>
                            </li>
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
