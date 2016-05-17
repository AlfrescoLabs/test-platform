import React from 'react'
import Navigation from '../components/nav/Navigation'
import SideNavigation from '../components/nav/SideNavigation'
import ContentLayout from '../layout/ContentLayout'
import DefectTrend from '../components/charts/defect/DefectTrend'
import PageTitle from '../components/PageTitle'
import config from '../../config'
import { ButtonToolbar, Button } from 'react-bootstrap';
export default class DefectTrendPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let title = this.props.params.version + " Defect Trend"
        let url =  config.reporting.service + "/reporting/api/" +
                    this.props.params.project + "/" +
                    this.props.params.version + "/defects/open/summary"

        let csv = url + "/csv"

        return(
            <div>
                <PageTitle title={title} />
                <DefectTrend url={url} />
                    <div className="row">
                        <div className="col-md-2 col-md-offset-5">
                        <a href={csv}>
                            <ButtonToolbar>
                                {/* Standard button */}
                                <Button>Download as CSV</Button>
                            </ButtonToolbar>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
