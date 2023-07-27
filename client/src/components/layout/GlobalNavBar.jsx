import * as React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { routes } from '../../helpers/routes'

export default function GlobalNavBar() {
  const { isAuthenticated, hasRole, signout } = useAuth()

  return (
    <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark' fixed='top'>
      <Navbar.Brand as={NavLink} to={routes.home}>
        Task Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='me-auto'>
          {isAuthenticated() ? (
            <Nav.Link as={NavLink} to={routes.projects}>
              Projects
            </Nav.Link>
          ) : null}
          {isAuthenticated() && hasRole('admin') ? (
            <NavDropdown title='Admin'>
              <NavDropdown.Item as={NavLink} to={routes.admin.users}>
                Users
              </NavDropdown.Item>
            </NavDropdown>
          ) : null}
        </Nav>
        <Nav>
          {isAuthenticated() ? (
            <>
              <Nav.Link as={NavLink} to={routes.account}>
                Account
              </Nav.Link>
              <Nav.Link onClick={signout} to={routes.home}>
                Sign-out
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to={routes.signin}>
                Sign-in
              </Nav.Link>
              <Nav.Link as={NavLink} to={routes.signup}>
                Sign-up
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
