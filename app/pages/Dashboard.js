import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import MainChart from '../components/charts/MainChart'
import Table from '../components/AlfrescoDefectTable'
import config from '../../config'
import PageTitle from '../components/PageTitle'
import {Link, browserHistory} from 'react-router'
import { Button } from 'react-bootstrap';
import Superagent from 'superagent'
/**
 * Dashboard page, displays alfresco defect burn down.
 * Author: Michael Suzuki
 */
export default class Dashboard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data : [],
            url : config.reporting.service + "/reporting/api/alfresco/5.1/report"
        }
    }
    componentDidMount(){
        this.prepareDashboard();
    }

    prepareDashboard(result){
        Superagent.get(this.state.url).then((res) => {
            this.setState({ data:res.body })}
        )
        browserHistory.listen((ev)=> {
            let paths = ev.hash.split("/")
            let project = paths[2]
            let version = paths[3].split("?")[0]
            this.setState({url : config.reporting.service + "/reporting/api/" + project + "/" + version + "/report"})
        })

    }
    render () {
        if (this.props.params.version != null) {
          let title = "Dashboard " + this.props.params.version
          return (
              <div>
                  <PageTitle title={title}/>
                  <MainChart url={this.state.url}></MainChart>
                  <Table title="Data" data={this.state.data}></Table>
              </div>
          )
        } else {
        return (
          <div>
            <PageTitle title="Choose a project to start with:"/>
            <div className="clearfix" >
              <Button bsStyle="primary" href="#/project/alfresco/5.1" block>Alfresco 5.1</Button>
              <Button bsStyle="primary" href="#/project/alfresco/5.1.1" block>Alfresco 5.1.1</Button>
              <Button bsStyle="primary" href="#/project/alfresco/Cloud 43" block>Cloud 43</Button>
            </div >
          </div>
        )
        }
    }
}
