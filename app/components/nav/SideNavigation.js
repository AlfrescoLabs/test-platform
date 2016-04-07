import React from 'react'
import {Link, browserHistory} from 'react-router'

class SideNavigation extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                  <li>
                      <Link activeClassName="active" to="/project/alfresco/5.1">Dashboard <span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                      <Link activeClassName="active" to="/project/alfresco/5.1/defect/discovery">Defect Discovery <span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                      <Link activeClassName="active" to="/project/alfresco/5.1/defect/trend">Defect Trend <span className="sr-only">(current)</span></Link>
                  </li>
                  {/*
                      <li><Link activeClassName="active" to="/perftest">Performance Tests</Link></li>
                      <li><Link activeClassName="active" to="/automationcover">Automation Coverage</Link></li>
                      <li><Link activeClassName="active" to="/qm">Quality Meterics</Link></li>
                  */}

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
