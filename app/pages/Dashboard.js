import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import MainChart from '../components/charts/MainChart'
import Table from '../components/Table'

/**
 * Main entry point to applicaiton.
 * Author: Michael Suzuki
 */
class App extends React.Component {
  render () {
    return (
        <ContentLayout title="Dashboard">
            <MainChart url="http://localhost:3000/reporting/api/alfresco/5.1/summary"/>
            <Table title="Data"></Table>
        </ContentLayout>
    )
  }
}
export default App
