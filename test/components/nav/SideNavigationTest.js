import expect from 'expect'
import TestUtils from 'react-addons-test-utils';
import SideNavigation from '../../../app/components/nav/SideNavigation'
import React from 'react'
import expectJSX from 'expect-jsx';
import {Link} from 'react-router'
expect.extend(expectJSX);

function shallowRenderNav() {
  const renderer = TestUtils.createRenderer()
  renderer.render(<SideNavigation />)
  return renderer.getRenderOutput()
}

describe('SideNavigation component', ()=>{
    it('it should display SideNavigation',()=>{
        let expected =
        <div className="col-sm-3 col-md-2 sidebar">
          <ul className="nav nav-sidebar">
              <li>
                  <Link activeClassName="active" to="project/alfresco/1.0">Dashboard <span className="sr-only">(current)</span></Link>
              </li>
              <li>
                  <Link activeClassName="active" to="project/alfresco/1.0/defect/discovery">Defect Discovery <span className="sr-only">(current)</span></Link>
              </li>
              <li>
                  <Link activeClassName="active" to="project/alfresco/1.0/defect/trend">Defect Trend <span className="sr-only">(current)</span></Link>
              </li>
          </ul>
        </div>
        let actual = shallowRenderNav()
        expect(actual).toEqualJSX(expected)
    })

})
