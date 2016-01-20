import React from 'react'
import Charts from './Charts.jsx'
import Table from './Table.jsx'
import PageTitle from './PageTitle.jsx'

class ContentLayout extends React.Component{
    render(){
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <PageTitle />
                <Charts />
                <Table />
            </div>
        )
    }
}

export default ContentLayout
