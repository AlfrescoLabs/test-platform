import React from 'react'
class SideNavigation extends React.Component {
    render () {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <li className="active"><a href="#">Release <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Performance Tests</a></li>
                <li><a href="#">Automation Coverage</a></li>
                <li><a href="#">Quality Meterics</a></li>
              </ul>
              <ul className="nav nav-sidebar">
                <li><a href="#">Test Run Configuration</a></li>
                <li><a href="">Historical Run</a></li>
              </ul>
            </div>)
        }
    }
    export default SideNavigation
