import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import { Link } from 'react-router'

export default class Release extends React.Component{
    render(){
        return(
            <ContentLayout title="Release" >
            <h3>Alfresco Cloud Release Reports</h3>
            <ul>
                <li><Link activeClassName="active" to="/release/cloud430/trend">Cloud defect trend chart</Link></li>
                <li><Link activeClassName="active" to="/release/cloud430/defect/discovery">Cloud defect discovery chart</Link></li>
            </ul>
            <h3>Alfresco 5.1 Release Reports</h3>
            <ul>
                <li><Link activeClassName="active" to="/release/5.1/trend">defect trend chart</Link></li>
                <li><Link activeClassName="active" to="/release/5.1/defect/discovery"> defect discovery chart</Link></li>
            </ul>
            </ContentLayout>

        )
    }
}
