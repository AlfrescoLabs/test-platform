import React from 'react'
import Superagent from 'superagent'
/**
 * Usage: <Table data={} title="Section title"/>
 * Takes in:
 * String title for section title.
 * Data array of json.
 */
export default class AlfrescoDefectTable extends React.Component{

    render(){
        let count = 0
        if(this.props.data && this.props.data.msg){
            return(<div></div>)
        }
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
                    {console.log(this.props.data)}
                    {
                        (this.props.data || []).map(function(x){
                        count++
                        return(
                                <tr key={count}>
                                    <td>{x.date}</td>
                                    <td>{x.plannedDefectReduction}</td>
                                    <td>{x.actualDefectReduction}</td>
                                    <td>{x.planTestRun}</td>
                                    <td>{x.testNotRun}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
              </table>
            </div>
        </div>
        )
    }
}
