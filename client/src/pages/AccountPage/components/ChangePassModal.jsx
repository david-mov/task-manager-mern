import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import changePassResolver from '../../../validations/changePassResolver'

const ChangePassModal = ({ isOpen, handleClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: changePassResolver })

  const onSubmit = (formData) => {
    // Workaround ─ HTTP request to the back-end
    console.log(formData)
    handleClose()
  }

  React.useEffect(() => {
    if (!isOpen) reset()
  }, [isOpen])

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Current password</Form.Label>
            <Form.Control
              placeholder='Type your current password'
              {...register('currentpass')}
              type='password'
            />
            {errors.currentpass && (
              <Form.Text>
                <Alert variant='danger'>{errors.currentpass.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>New password</Form.Label>
            <Form.Control
              placeholder='Type your new password'
              {...register('newpass')}
              type='password'
            />
            {errors.newpass && (
              <Form.Text>
                <Alert variant='danger'>{errors.newpass.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Confirm new password</Form.Label>
            <Form.Control
              placeholder='Retype your new password again'
              {...register('confirmedpass')}
              type='password'
            />
            {errors.confirmedpass && (
              <Form.Text>
                <Alert variant='danger'>{errors.confirmedpass.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit(onSubmit)}>Change password</Button>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ChangePassModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default ChangePassModal
