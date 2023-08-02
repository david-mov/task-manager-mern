import * as React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { routes } from '../helpers/routes'

export default function NotFoundPage() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className='text-center'>
          <img
            className='w-100 p-3'
            src='/img/404-not-found.svg'
            alt='error 404'
          />
          <h2>Page not found</h2>
          <p>
            Back to <Link to={routes.home}>Home</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}
