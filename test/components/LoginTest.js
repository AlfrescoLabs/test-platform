import expect from 'expect'
import TestUtils from 'react-addons-test-utils';
import Login from '../../app/components/Login'
import React from 'react'
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Login component', ()=>{
    it('it should display username and password input and submit button',()=>{
        let expected =
        <div className='alert alert-info'>
          <label>Username:</label><input id="username" value="" />
          <label>Password:</label><input id="password" value="" />
          <button id="submit-login" />
        </div>
        const renderer = TestUtils.createRenderer()
        renderer.render(<Login/>)
        let actual = renderer.getRenderOutput()
        expect(actual).toEqualJSX(expected)
    })
})
