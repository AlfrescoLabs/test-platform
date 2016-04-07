import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import MainChart from '../components/charts/MainChart'
import Table from '../components/AlfrescoDefectTable'
import Superagent from 'superagent'
import config from '../../config'
import PageTitle from '../components/PageTitle'
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
        this.getDashboardData()
    }

    getDashboardData(result){
        Superagent.get(this.state.url).then((res) => {
            this.setState({ data:res.body})}
        )
    }
    render () {

        let title = "Dashboard " + this.props.params.version
        return (
            <div>
                <PageTitle title={title}/>
                <MainChart url={this.state.url}></MainChart>
                <Table title="Data" data={this.state.data}></Table>
            </div>
        )
    }
}
