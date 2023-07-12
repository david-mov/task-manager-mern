import * as React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { externalLinks } from '../../helpers/routes'

export default function GlobalFooter() {
  return (
    <Navbar variant='dark' bg='dark' fixed='bottom'>
      <Navbar.Text>Project developed by David Movsichoff</Navbar.Text>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Nav>
          <Nav.Link
            className='d-none d-lg-block'
            href={externalLinks.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit my GitHub
          </Nav.Link>
          <Nav.Link
            className='d-none d-lg-block'
            href={externalLinks.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit my LinkedIn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
