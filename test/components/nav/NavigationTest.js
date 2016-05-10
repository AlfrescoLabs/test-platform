import expect from 'expect'
import TestUtils from 'react-addons-test-utils';
import Navigation from '../../../app/components/nav/Navigation'
import React from 'react'
import expectJSX from 'expect-jsx';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
expect.extend(expectJSX);

function shallowRenderNav() {
  const renderer = TestUtils.createRenderer()
  renderer.render(<Navigation />)
  return renderer.getRenderOutput()
}

describe('Navigation component', ()=>{
    it('it should display nav',()=>{
        let expected =
            <Navbar fixedTop>
                <Navbar.Header pullLeft>
                    <img src="/img/alfresco-logo-48.png" className="logo-brand"  alt="Alfresco Logo"/>
                    <Navbar.Brand>
                        <a href="#">Alfresco Test Platform</a>
                    </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="#/project/alfresco/5.1">Alfresco 5.1</MenuItem>
                            <MenuItem eventKey={3.1} href="#/project/alfresco/5.1.1">Alfresco 5.1.1</MenuItem>
                            <MenuItem eventKey={3.2} href="#/project/alfresco/Cloud 43">Cloud</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="#/about">
                            About
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        let actual = shallowRenderNav()
        expect(actual).toEqualJSX(expected)
    })

})
