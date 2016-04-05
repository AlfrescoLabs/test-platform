import React from 'react'
/**
 * Usage: <Table data={} title="Section title"/>
 * Takes in:
 * String title for section title.
 * Data array of json.
 */
export default class AlfrescoDefectTable extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <h2 className="sub-header">{this.props.title}</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Planned Defect Reduction</th>
                    <th>Actual Defect Reduction</th>
                    <th>Plan Test Run</th>
                    <th>Actual Tests not yet run</th>
                  </tr>
                </thead>
                <tbody>
                    {this.props.data.map(function(x){
                        return(
                            <tr>
                                <th>{x.date}</th>
                                <th>{x.plannedDefectReduction}</th>
                                <th>{x.actualDefectReduction}</th>
                                <th>{x.planTestRun}</th>
                                <th>{x.testNotRun}</th>
                            </tr>)
                    }
                )}
                </tbody>
              </table>
            </div>
        </div>
        )
    }
}
