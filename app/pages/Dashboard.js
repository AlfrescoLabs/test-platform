import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import MainChart from '../components/charts/MainChart'
import Table from '../components/AlfrescoDefectTable'
import config from '../../config'
import PageTitle from '../components/PageTitle'
import {Link, browserHistory} from 'react-router'
/**
 * Main entry point to applicaiton.
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
        browserHistory.listen((ev)=> {
            let paths = ev.hash.split("/")
            let project = paths[2]
            let version = paths[3].split("?")[0]
            this.setState({url : config.reporting.service + "/reporting/api/" + project + "/" + version + "/report"})
        })

    }
    render () {
        let title = "Dashboard " + this.props.params.version
        return (
            <div>
                <PageTitle title={title}/>
                <MainChart url={this.state.url}></MainChart>
                <Table title="Data" url={this.state.url}></Table>
            </div>
        )
    }
}
