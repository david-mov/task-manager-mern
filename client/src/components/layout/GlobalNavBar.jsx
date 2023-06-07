import * as React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {routes} from '../../helpers/routes'

export default function GlobalNavBar() {
    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark' >
            <Navbar.Brand as={NavLink} to={routes.home}>Task Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to={routes.projects}>Projects</Nav.Link>
                    <NavDropdown title='Admin'>
                        <NavDropdown.Item as={NavLink} to={routes.admin.users}>Users</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.signin}>Sign-in</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.signup}>Sign-up</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}