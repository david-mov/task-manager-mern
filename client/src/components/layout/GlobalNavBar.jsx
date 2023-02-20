import * as React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export default function GlobalNavBar() {
    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark' >
            <Navbar.Brand as={NavLink} to='/'>Task Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to='projects'>Projects</Nav.Link>
                    <NavDropdown title='Admin'>
                        <NavDropdown.Item as={NavLink} to='/admin/users'>Users</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to='signin'>Sign-in</Nav.Link>
                    <Nav.Link as={NavLink} to='signup'>Sign-up</Nav.Link>
                    <Nav.Link as={NavLink} to='account'>Account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}