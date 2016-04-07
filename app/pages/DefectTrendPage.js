import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import DefectTrend from '../components/charts/defect/DefectTrend'
import PageTitle from '../components/PageTitle'
import config from '../../config'
export default class DefectTrendPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let title = this.props.params.version + " Defect Trend"
        let url =  config.reporting.service + "/reporting/api/" +
                    this.props.params.project + "/" +
                    this.props.params.version + "/defects/open/summary"

        return(
            <div>
                <PageTitle title="Defect Trend" />
                <DefectTrend url={url} />
            </div>

        )
    }
}
