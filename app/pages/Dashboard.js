import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import DashboardLayout from '../layout/DashboardLayout'

/**
 * Main entry point to applicaiton.
 * Author: Michael Suzuki
 */
class App extends React.Component {
  render () {
    return (
        <div>
            <Navigation />
            <div className="container-fluid">
                <div className="row">
                    <SideNavigation />
                    <DashboardLayout />
                </div>
            </div>
        </div>
    )
  }
}
export default App
