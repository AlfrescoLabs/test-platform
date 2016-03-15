import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import DefectTrend from '../components/charts/defect/DefectTrend'
export default class DefectTrend51 extends React.Component{
    render(){
        return(
            <ContentLayout title="Defect Trend" >
                <DefectTrend url="http://localhost:3000/reporting/api/alfresco/5.1/defects/open/summary" />
            </ContentLayout>
        )
    }
}
