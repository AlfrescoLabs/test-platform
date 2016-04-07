import React from 'react'
import {Link, browserHistory} from 'react-router'

class SideNavigation extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            project:"",
            version:""
        }
    }
    componentDidMount() {
        this.updateState()
    }

    updateState() {
        browserHistory.listen((ev)=> {
            let paths = ev.hash.split("/")
            this.setState({
                "project" : paths[2],
                "version" : paths[3].split("?")[0]
            })
        })
    }

    render () {
        let url = "project/" + this.state.project + "/" + this.state.version
        let trend = url + "/defect/trend"
        let defect = url + "/defect/discovery"
        console.log("the url is:" + url)
        console.log("trend url is:" + trend)
        return (
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                  <li>
                      <Link activeClassName="active" to={url}>Dashboard <span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                      <Link activeClassName="active" to={defect}>Defect Discovery <span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                      <Link activeClassName="active" to={trend}>Defect Trend <span className="sr-only">(current)</span></Link>
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
