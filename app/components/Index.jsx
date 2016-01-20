import React from 'react'
import {render} from 'react-dom'
import Navigation from './nav/Navigation.jsx'
import SideNavigation from './nav/SideNavigation.jsx'
import ContentLayout from './ContentLayout.jsx'
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
                    <ContentLayout />
                </div>
            </div>
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
