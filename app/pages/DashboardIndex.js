import React from 'react'
import PageTitle from '../components/PageTitle'
import { Button } from 'react-bootstrap';

/**
 * Dashboard page, displays alfresco defect burn down.
 * Author: Michael Suzuki
 */
export default class DashboardIndex extends React.Component {



    render () {
        if (this.props.params.version != null) {
          let title = this.props.params.version + " " + this.props.params.project
          return (
              <div>
                  <PageTitle title={title}/>
              </div>
          )
        } else {
        return (
          <div>
            <PageTitle title="Choose a project to start with:"/>
            <div className="clearfix" >
              <Button bsStyle="primary" href="#/project/alfresco/5.2" block>Alfresco 5.2</Button>
              <Button bsStyle="primary" href="#/project/alfresco/5.1" block>Alfresco 5.1</Button>
              <Button bsStyle="primary" href="#/project/alfresco/5.1.1" block>Alfresco 5.1.1</Button>
              <Button bsStyle="primary" href="#/project/alfresco/Cloud 43" block>Cloud 43</Button>
            </div >
          </div>
        )
        }
    }
}
