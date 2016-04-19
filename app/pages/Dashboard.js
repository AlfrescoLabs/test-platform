import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import MainChart from '../components/charts/MainChart'
import Table from '../components/AlfrescoDefectTable'
import Superagent from 'superagent'
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
            url : ""
        }
    }
    componentDidMount(){
        browserHistory.listen((ev)=> {
            let paths = ev.hash.split("/")
            let project = paths[2]
            let version = paths[3].split("?")[0]
            let theurl = "/reporting/api/" + project+ "/" + version + "/report"
            this.setState({
                url : config.reporting.service + theurl
            })
        })
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
