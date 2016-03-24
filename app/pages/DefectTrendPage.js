import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import DefectTrend from '../components/charts/defect/DefectTrend'
import config from '../../config'
export default class DefectTrendPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let title = this.props.params.version + " Defect Trend"
        let url =  config.reporting.service + "/reporting/api/alfresco/" +
         this.props.params.version + "/defects/open/summary"
        return(
            <ContentLayout title={title} >
                <DefectTrend url={url} />
            </ContentLayout>
        )
    }
}
