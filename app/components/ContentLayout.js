import React from 'react'
import Charts from './Charts'
import Table from './Table'
import PageTitle from './PageTitle'

class ContentLayout extends React.Component{
    render(){
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {/* add this */}
            {this.props.children}
                <PageTitle />
                <Charts />
                <Table />
            </div>
        )
    }
}

export default ContentLayout
