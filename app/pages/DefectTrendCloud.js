import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import DefectTrend from '../components/charts/defect/DefectTrend'
export default class DefectTrendCloud extends React.Component{
    render(){
        return(
            <ContentLayout title="Defect Trend" >
                <DefectTrend url="http://localhost:3000/reporting/api/alfresco/cloud%2043/defects/open/summary" />
            </ContentLayout>
        )
    }
}
