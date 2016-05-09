import expect from 'expect'
import TestUtils from 'react-addons-test-utils';
import AlfrescoDefectTable from '../../app/components/AlfrescoDefectTable'
import React from 'react'
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

function shallowRenderAlfrescoDefectTable(data) {
  const renderer = TestUtils.createRenderer()
  renderer.render(<AlfrescoDefectTable title="Hello World" url={data}/>)
  return renderer.getRenderOutput()
}

describe('Defect table component, displays results in a table', ()=>{
    it('it should display Date, Planned Defect Reduction, Actual Defect Reduction,Test Run, Actual Tests not yet run',()=>{
        let expected =
        <div>
        <h2 className="sub-header">Hello World</h2>
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

            </tbody>
          </table>
        </div>
    </div>
        let actual = shallowRenderAlfrescoDefectTable()

        expect(actual).toEqualJSX(expected)
    })

})
