import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import changePassResolver from '../../../validations/changePassResolver'
import { useChangePassword } from '../../../context/StoreContext'

const ChangePassModal = ({ isOpen, handleClose }) => {
  const changePassword = useChangePassword()

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: changePassResolver })

  const onSubmit = (data) => {
    changePassword(data)
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
              {...register('currentPassword')}
              type='password'
            />
            {errors.currentPassword ? (
              <Form.Text>
                <Alert variant='danger'>{errors.currentPassword.message}</Alert>
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>New password</Form.Label>
            <Form.Control
              placeholder='Type your new password'
              {...register('newPassword')}
              type='password'
            />
            {errors.newPassword ? (
              <Form.Text>
                <Alert variant='danger'>{errors.newPassword.message}</Alert>
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Confirm new password</Form.Label>
            <Form.Control
              placeholder='Retype your new password'
              {...register('confirmedPassword')}
              type='password'
            />
            {errors.confirmedPassword ? (
              <Form.Text>
                <Alert variant='danger'>
                  {errors.confirmedPassword.message}
                </Alert>
              </Form.Text>
            ) : null}
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
