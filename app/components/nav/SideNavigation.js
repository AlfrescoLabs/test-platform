import React from 'react'
import {Link, browserHistory} from 'react-router'

class SideNavigation extends React.Component {
    constructor(props){
        super(props)
        this.setpath = this.setpath.bind(this);
        this.state = {
            "path" : "/"
        }
    }
    componentDidMount(){
        browserHistory.listen(function(ev){
            this.setpath(ev.pathname)}.bind(this)
        )
    }
    setpath(current){
        this.setState({path: current})
    }
    render () {
        console.log(this.state.path)
        return (
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                  <li>
                      <Link activeClassName="active" to="{}">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                      <Link activeClassName="active" to={this.state.path + "/trend"}>Defect Trend <span className="sr-only">(current)</span></Link>
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
