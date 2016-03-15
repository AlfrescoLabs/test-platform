import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import DefectTrend from '../components/charts/defect/DefectTrend'
export default class DefectTrendPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.params.version)
        let url = "http://localhost:3000/reporting/api/alfresco/" + this.props.params.version + "/defects/open/summary"
        return(
            <ContentLayout title="Defect Trend" >
                <DefectTrend url={url} />
            </ContentLayout>
        )
    }
}
