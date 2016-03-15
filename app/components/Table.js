import React from 'react'
/**
 * Usage: <Table data={} title="Section title"/>
 * Takes in:
 * String title for section title.
 * Data array of json.
 */
class Table extends React.Component{
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
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        )
    }
}
export default Table
