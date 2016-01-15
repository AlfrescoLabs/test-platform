import React from 'react'
class SideNavigation extends React.Component {

    render () {
        return (
        <div className="ui vertical inverted sidebar menu left overlay visible" id="toc">
            <div className="item">
                <a href="/">
                    <b>Home</b>
                </a>
            </div>
            <a className="item" href="/introduction/getting-started.html">
                <b>Reporting</b>
            </a>
            <a className="item" href="/introduction/new.html">
                <b>Pro</b>
            </a>
            <div className="item">
                <div className="header">5.1</div>
                <div className="menu">
                    <a className="item" href="/introduction/integrations.html">
                        Defect Trend
                    </a>
                    <a className="item" href="/introduction/build-tools.html">
                        Manual run
                    </a>
                    <a className="item" href="/introduction/advanced-usage.html">
                        Automation run
                    </a>
                </div>
            </div>
        </div>)
        }
    }
    export default SideNavigation
