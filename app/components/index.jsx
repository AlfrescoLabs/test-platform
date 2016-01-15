import React from 'react'
import {render} from 'react-dom'
import AwesomeComponent from './Awesome.jsx'
import Navigation from './nav/Navigation.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  render () {
    return (
        <div>
            <Navigation />
            //content
            <h1>Hello</h1>

        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
