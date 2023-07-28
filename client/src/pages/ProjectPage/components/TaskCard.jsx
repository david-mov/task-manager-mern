import React from 'react'
import { Card, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { statuses, statusesArray } from '../../../helpers/taskStatuses'
import PropTypes from 'prop-types'

const TaskCard = ({
  id,
  title,
  description,
  status,
  dueDate,
  openEditTaskModal,
}) => {
  let cardColor = null

  if (status === statuses.completed) {
    cardColor = 'success'
  } else if (status === statuses.inProgress) {
    cardColor = 'warning'
  } else {
    cardColor = 'primary'
  }

  return (
    <Card border={cardColor} className='mb-4'>
      <Card.Header as='h6'>{status}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className='d-flex justify-content-end'>
          <Button variant='link' className='me-2' onClick={openEditTaskModal}>
            Edit task
          </Button>
          <DropdownButton title={status} variant={cardColor}>
            {statusesArray.map((status) => (
              <Dropdown.Item key={status}>{status}</Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </Card.Body>
      {dueDate ? (
        <Card.Footer className='text-muted'>{`Due date: ${dueDate.toLocaleDateString()}`}</Card.Footer>
      ) : null}
    </Card>
  )
}

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.string.isRequired,
  dueDate: PropTypes.instanceOf(Date),
  openEditTaskModal: PropTypes.func.isRequired,
}

export default TaskCard
