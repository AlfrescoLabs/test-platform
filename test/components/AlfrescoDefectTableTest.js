import expect from 'expect'
import TestUtils from 'react-addons-test-utils';
import AlfrescoDefectTable from '../../app/components/AlfrescoDefectTable'
import React from 'react'
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

function shallowRenderAlfrescoDefectTable(title,data) {
    const renderer = TestUtils.createRenderer()
    renderer.render(<AlfrescoDefectTable title={title} data={data}/>)
    return renderer.getRenderOutput()
}

describe('Defect table component', ()=>{
    it('it should display table title',()=>{
        var component = TestUtils.renderIntoDocument(
                <AlfrescoDefectTable title="my table" />
            );
        let actual =  shallowRenderAlfrescoDefectTable("my table", [])
        let element = actual.props.children[0].props
        expect(element.children).toEqual("my table")
        expect(element.className).toEqual("sub-header")
    })
    it('it should display data passed in,',()=>{
        var component = shallowRenderAlfrescoDefectTable("Results", [{
            'date': "16/11/2015",
            'plannedDefectReduction': '44',
            'actualDefectReduction': '51',
            'planTestRun': '-56',
            'testNotRun': '-55.7'
            },
            {
            'date': "17/11/2015",
            'plannedDefectReduction': '41',
            'actualDefectReduction': '52',
            'planTestRun': '-52',
            'testNotRun': '-52.43'
        }])
        let expected =
        <div>
        <h2 className="sub-header">Results</h2>
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
                <tr>
                    <td>16/11/2015</td>
                    <td>44</td>
                    <td>51</td>
                    <td>-56</td>
                    <td>-55.7</td>
                </tr>
                <tr>
                    <td>17/11/2015</td>
                    <td>41</td>
                    <td>52</td>
                    <td>-52</td>
                    <td>-52.43</td>
                </tr>
            </tbody>
          </table>
        </div>
    </div>
    expect(component).toEqualJSX(expected)
    })
    it('it should not display data if none passed in,',()=>{
        var component = shallowRenderAlfrescoDefectTable()
        let expected =
        <div>
        <h2 className="sub-header"></h2>
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
    expect(component).toEqualJSX(expected)
    })
})
