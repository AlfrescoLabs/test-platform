import expect from 'expect'
import TestUtils from 'react-addons-test-utils';
import PageTitle from '../../app/components/PageTitle'
import React from 'react'
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

function shallowRenderPageTitle(title) {
  const renderer = TestUtils.createRenderer()
  renderer.render(<PageTitle title={title}/>)
  return renderer.getRenderOutput()
}

describe('Page title component to display title', ()=>{
    it('it should display title hello when property is passed in',()=>{
        let expected = <h1 className="page-header">hello</h1>
        let actual = shallowRenderPageTitle("hello")
        expect(actual).toEqualJSX(expected)
    })
})
