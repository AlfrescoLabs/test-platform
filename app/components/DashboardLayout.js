import React from 'react'
import MainChart from './charts/MainChart'
import Table from './Table'
import PageTitle from './PageTitle'


class DashboardLayout extends React.Component{
    render(){
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {/* add this */}
            {this.props.children}
                <PageTitle />
                <MainChart />

            </div>
        )
    }
}
export default DashboardLayout
