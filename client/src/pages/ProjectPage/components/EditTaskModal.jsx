import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import editTaskResolver from '../../../validations/editTaskResolver'
import { prioritiesArray } from '../../../helpers/consts/taskPriorities'

const EditTaskModal = ({ isOpen, handleClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: editTaskResolver,
    defaultValues: {
      title: 'asgsad',
      description: 'adsadasf',
      status: 'Completed',
      dueDate: new Date().toISOString().slice(0, 10),
      priority: 'Medium',
    },
  })

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
        <Modal.Title>Edit task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder='Change the title'
              {...register('title')}
            />
            {errors.title ? (
              <Form.Text>
                <Alert variant='danger'>{errors.title.message}</Alert>
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder='Change the description'
              {...register('description')}
            />
            {errors.description ? (
              <Form.Text>
                <Alert variant='danger'>{errors.description.message}</Alert>
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Due date</Form.Label>
            <Form.Control
              type='date'
              pattern='\d{4}-\d{2}-\d{2}'
              placeholder='yyyy-mm-dd'
              {...register('dueDate')}
            />
            {errors.dueDate ? (
              <Form.Text>
                <Alert variant='danger'>{errors.dueDate.message}</Alert>
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Priority level</Form.Label>
            {prioritiesArray.map((priority) => (
              <Form.Check
                type='radio'
                name='priority-level'
                key={priority}
                label={priority}
                value={priority}
                {...register('priority')}
              />
            ))}
            {errors.priority ? (
              <Form.Text>
                <Alert variant='danger'>{errors.priority.message}</Alert>
              </Form.Text>
            ) : null}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit(onSubmit)}>Edit task</Button>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

EditTaskModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default EditTaskModal
