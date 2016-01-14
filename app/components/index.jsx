import React from 'react'
import {render} from 'react-dom'
import AwesomeComponent from './Awesome.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  render () {
    return (
        <div>
            <Navigation />
            <div class="ui main text container">
                <h1 class="ui header">Semantic UI Fixed Template</h1>
                <p>This is a basic fixed menu template using fixed size containers.</p>
                <p>A text container is used for the main container, which is useful for single column layouts</p>
                <p>hi</p>
                <AwesomeComponent />
            </div>
            <Footer />
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
