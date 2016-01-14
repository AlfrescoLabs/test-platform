import React from 'react'
class Navigation extends React.Component {
    render(){
        return(
            <div className="ui fixed inverted menu">
                <div className="ui container">
                  <a href="#" className="header item">
                    Project Name
                  </a>
                  <a href="#" className="item">Home</a>
                </div>
              </div>
        )
    }
}

export default Navigation
