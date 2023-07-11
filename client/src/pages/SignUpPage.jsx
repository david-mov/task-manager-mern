import * as React from 'react'
import { Container, Row, Col, Form, Alert, Button, Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import signUpResolver from '../validations/signUpResolver'
import { routes } from '../helpers/routes'

export default function SignUpPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: signUpResolver })

  const onSubmit = (formData) => {
    // Workaround ─ HTTP request to the back-end
    console.log(formData)
  }

  return (
    <Container>
      <Row className='mt-5'>
        <Col md={{ span: 6, offset: 3 }} className='text-center'>
          <Card className='mw-50 p-3 text-start'>
            <h2>Sign up</h2>
            <br />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  placeholder='Type your username'
                  {...register('username')}
                />
                {errors.username && (
                  <Form.Text>
                    <Alert variant='danger'>{errors.username.message}</Alert>
                  </Form.Text>
                )}
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder='Type your email'
                  {...register('email')}
                />
                {errors.email && (
                  <Form.Text>
                    <Alert variant='danger'>{errors.email.message}</Alert>
                  </Form.Text>
                )}
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder='Type your password'
                  {...register('pass')}
                  type='password'
                />
                {errors.pass && (
                  <Form.Text>
                    <Alert variant='danger'>{errors.pass.message}</Alert>
                  </Form.Text>
                )}
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  placeholder='Retype your password'
                  {...register('confirmedpass')}
                  type='password'
                />
                {errors.confirmedpass && (
                  <Form.Text>
                    <Alert variant='danger'>
                      {errors.confirmedpass.message}
                    </Alert>
                  </Form.Text>
                )}
              </Form.Group>
            </Form>
            <br />
            <div className='d-flex justify-content-end'>
              <Button onClick={handleSubmit(onSubmit)}>Sign up now</Button>
            </div>
          </Card>
          <br />
          <p>
            Already have an account? <Link to={routes.signin}>Sign in</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}
