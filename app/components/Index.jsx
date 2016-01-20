import React from 'react'
import {render} from 'react-dom'
import AwesomeComponent from './Awesome.jsx'
import Navigation from './nav/Navigation.jsx'
import SideNavigation from './nav/SideNavigation.jsx'
import ContentLayout from './ContentLayout.jsx'
import Footer from './Footer.jsx'

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
