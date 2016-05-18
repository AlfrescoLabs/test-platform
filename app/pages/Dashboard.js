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
            url:config.reporting.service + "/reporting/api/" + this.props.params.project + "/" + this.props.params.version + "/report"

        }
    }
    componentDidMount(){
        this.prepareDashboard();
    }


    prepareDashboard(url){
        Superagent.get(this.state.url).then((res) => {
            this.setState({ data:res.body })}
        )
    }
    render () {
        if (this.props.params.version != null) {
          let title = this.props.params.version + " Dashboard"
          return (
              <div>
                  <PageTitle title={title}/>
                  {
                      (this.state.data.msg ? <h1>No data available</h1>:
                          <div>
                              <MainChart url={this.state.url}></MainChart>
                              <Table title="Data" data={this.state.data}></Table>
                          </div>)
                  }
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
