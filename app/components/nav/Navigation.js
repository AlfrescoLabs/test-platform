import React from 'react'
import { Link } from 'react-router'
import SideNavigation from './SideNavigation'
import { Navbar,Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
class Navigation extends React.Component {

    render () {
        return (
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
                        <MenuItem eventKey={3.1}><Link to="/alfresco/5.1">Alfresco 5.1</Link></MenuItem>
                        <MenuItem eventKey={3.2}><Link to="/alfresco/cloud">cloud</Link></MenuItem>
                        <MenuItem eventKey={3.3}><Link to="/rm/2.4">RM 2.4</Link></MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
