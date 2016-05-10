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
    // it('it should display Date, Planned Defect Reduction, Actual Defect Reduction,Test Run, Actual Tests not yet run',()=>{
    //     var component = TestUtils.renderIntoDocument(
    //             <AlfrescoDefectTable />
    //         );
    //     let expected =
    //         <thead>
    //           <tr>
    //             <th>Date</th>
    //             <th>Planned Defect Reduction</th>
    //             <th>Actual Defect Reduction</th>
    //             <th>Plan Test Run</th>
    //             <th>Actual Tests not yet run</th>
    //           </tr>
    //         </thead>
    //
    //
    //     let actual = TestUtils.findRenderedDOMComponentWithTag(component,"thead")
    //     expect(actual).toEqualJSX(expected)
    // })

})
