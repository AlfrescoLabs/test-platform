import React from 'react'
import PageTitle from '../components/PageTitle'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
class ContentLayout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <Navigation />
                <div className="container-fluid">
                    <div className="row">
                        <SideNavigation />
                    </div>
                </div>

                {this.props.children}
            </div>
        )
    }
}

export default ContentLayout
