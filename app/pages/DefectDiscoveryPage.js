import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import DefectDiscovery from '../components/charts/defect/DefectDiscovery'
import config from '../../config'
import PageTitle from '../components/PageTitle'
export default class DefectDiscoveryPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let url = config.reporting.service + "/reporting/api/alfresco/"
                    + this.props.params.version + "/defects/created/summary"
        let title = this.props.params.version + " Defect Discovery"
        return(
            <div>
                <PageTitle title={title}/>
                <DefectDiscovery url={url} />
            </div>
        )
    }
}
