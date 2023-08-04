import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import editAccountResolver from '../../../validations/editAccountResolver'
import useUserState from '../../../hooks/useUserState'
import useUserApi from '../../../hooks/useUserApi'

const EditModal = ({ isOpen, handleClose }) => {
  const { user } = useUserState()
  const { updateInfo } = useUserApi()

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, dirtyFields },
    reset,
  } = useForm({
    resolver: editAccountResolver,
    defaultValues: {
      username: user.username,
      email: user.email,
    },
  })

  const onSubmit = (data) => {
    if (isDirty) {
      const updatedFields = {}
      for (const prop in dirtyFields) {
        updatedFields[prop] = data[prop]
      }
      updateInfo(updatedFields)
    }
    handleClose()
  }

  React.useEffect(() => {
    if (isOpen && user)
      reset({
        name: user.username,
        email: user.email,
      })
  }, [isOpen])

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Change username</Form.Label>
            <Form.Control
              placeholder='Type your new username'
              {...register('username')}
            />
            {errors.username ? (
              <Form.Text>
                <Alert variant='danger'>{errors.username.message}</Alert>
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Change email</Form.Label>
            <Form.Control
              placeholder='Type your new email'
              {...register('email')}
            />
            {errors.email ? (
              <Form.Text>
                <Alert variant='danger'>{errors.email.message}</Alert>
              </Form.Text>
            ) : null}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit(onSubmit)} disabled={!isDirty}>
          Update Account
        </Button>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

EditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  user: PropTypes.object,
}

export default EditModal
