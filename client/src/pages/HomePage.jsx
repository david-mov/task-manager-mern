import * as React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { routes } from '../helpers/routes'

export default function HomePage() {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <h2>Welcome to Task Manager</h2>
          <br />
          <p>From this site you can manage all your projects</p>
          <p>Mark your tasks as completed, add, delete or update them</p>
          <div>
            <Link to={routes.signin}>Sign-in</Link> or
            <Button className='mx-1' as={Link} to={routes.signup}>
              Sign-up
            </Button>
          </div>
        </Col>
        <Col>
          <img
            className='img-fluid'
            src='/img/task-manager.svg'
            alt='task-manager'
          />
          <p>Manage your time and improve your productivity</p>
        </Col>
      </Row>
    </Container>
  )
}
