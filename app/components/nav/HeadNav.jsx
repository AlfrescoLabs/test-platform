import React from 'react'

class HeadNav extends React.Component {
    render () {
        return (
            <div className="following bar light fixed">
                <div className="ui container">
                    <div className="ui large secondary network menu">
                        <a className="view-ui item">
                            <i className="sidebar icon"></i>
                            Menu
                        </a>
                        <div className="right menu">
                            <div className="item">
                                login and logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HeadNav
