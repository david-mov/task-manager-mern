import * as React from 'react'
import { Container, Row, Col, Form, Alert, Button, Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, Link } from 'react-router-dom'

import signInResolver from '../validations/signInResolver'
import { routes } from '../helpers/routes'
import useAuth from '../hooks/useAuth'

const userCredentials = {}

export default function SignInPage() {
  const { signin } = useAuth()

  const location = useLocation()
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: signInResolver })

  const onSubmit = (formData) => {
    // Workaround ─ HTTP request to the back-end
    console.log(formData)
    signin(userCredentials, location.state?.from, navigate)
  }

  return (
    <Container>
      <Row
        style={{ height: '100%', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <Col md={{ span: 6, offset: 3 }} className='text-center'>
          <Card className='mw-50 p-3 text-start'>
            <h2>Sign in</h2>
            <br />
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder='Type your email'
                  {...register('email')}
                />
                {errors.email ? (
                  <Form.Text>
                    <Alert variant='danger'>{errors.email.message}</Alert>
                  </Form.Text>
                ) : null}
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder='Type your password'
                  {...register('pass')}
                  type='password'
                />
                {errors.pass ? (
                  <Form.Text>
                    <Alert variant='danger'>{errors.pass.message}</Alert>
                  </Form.Text>
                ) : null}
              </Form.Group>
            </Form>
            <br />
            <div className='d-flex justify-content-end'>
              <Button onClick={handleSubmit(onSubmit)}>Sign in</Button>
            </div>
          </Card>
          <br />
          <p>
            Do not have an account? <Link to={routes.signup}>Sign up</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}
