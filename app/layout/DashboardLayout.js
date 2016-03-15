import React from 'react'
import MainChart from '../components/charts/MainChart'
import Table from '../components/Table'
import PageTitle from '../components/PageTitle'


class DashboardLayout extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {/* add this */}
            {this.props.children}
                <PageTitle title="Dashboard"/>
                <MainChart url="http://localhost:3000/reporting/api/alfresco/5.1/summary"/>
                <Table title="Data"></Table>
            </div>
        )
    }
}
export default DashboardLayout
