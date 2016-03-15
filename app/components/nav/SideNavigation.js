import React from 'react'
import {Link} from 'react-router'
class SideNavigation extends React.Component {
    render () {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                  <li>
                      <Link activeClassName="active" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                      <Link activeClassName="active" to="/release">Release <span className="sr-only">(current)</span></Link>
                  </li>
                  <li><Link activeClassName="active" to="/perftest">Performance Tests</Link></li>
                  <li><Link activeClassName="active" to="/automationcover">Automation Coverage</Link></li>
                  <li><Link activeClassName="active" to="/qm">Quality Meterics</Link></li>
              </ul>
              {/*
              <ul className="nav nav-sidebar">
                <li><Link activeClassName="active" to="/testrunconfig">Test Run Configuration</Link></li>
                <li><Link activeClassName="active" to="/historical">Historical Run</Link></li>
              </ul>

            */}
            </div>)
        }
    }
    export default SideNavigation
