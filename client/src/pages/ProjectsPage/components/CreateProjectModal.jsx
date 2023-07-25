import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import createProjectResolver from '../../../validations/createProjectResolver'

const CreateProjectModal = ({ isOpen, handleClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: createProjectResolver })

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
        <Modal.Title>Create a new project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder='Type the title of your new project'
              {...register('title')}
            />
            {errors.title && (
              <Form.Text>
                <Alert variant='danger'>{errors.title.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder='Type a brief description of your project'
              {...register('description')}
            />
            {errors.description && (
              <Form.Text>
                <Alert variant='danger'>{errors.description.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit(onSubmit)}>Create new project</Button>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

CreateProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default CreateProjectModal
