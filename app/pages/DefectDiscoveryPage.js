import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import DefectDiscovery from '../components/charts/defect/DefectDiscovery'
export default class DefectDiscoveryPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let url = "http://localhost:3000/reporting/api/alfresco/" + this.props.params.version + "/defects/created/summary"
        let title = this.props.params.version + " Defect Discovery"
        return(
            <ContentLayout title={title} >
                <DefectDiscovery url={url} />
            </ContentLayout>
        )
    }
}
