import * as React from 'react'
import { useParams } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'

export default function ProjectPage() {
  const { projectId } = useParams()

  const getProject = (id) => {
    return {
      id,
      title: 'Project Write a Novel',
      tasks: [
        {
          id: 1,
          title: 'Write the first page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          status: 'In progress',
          dueDate: new Date(),
          priority: 'High',
        },
        {
          id: 2,
          title: 'Get the main idea of the novel',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          status: 'Completed',
          dueDate: new Date(),
          priority: 'Medium',
        },
        {
          id: 3,
          title: 'Get a book distributor',
          status: 'Pending',
          dueDate: null,
          priority: 'Low',
        },
      ],
    }
  }

  const project = getProject(projectId)

  return (
    <Container
      style={{ height: '100%', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <Row className='d-flex justify-content-center'>
        <Col lg='8'>
          <h2 className='mb-3'>{`Project ${projectId}`}</h2>
          {project.tasks.map((task) => {
            return (
              <Card
                key={task.id}
                border={task.status === 'Completed' ? 'success' : 'primary'}
                className='mb-4'
              >
                <Card.Header as='h6'>{task.status}</Card.Header>
                <Card.Body>
                  <Card.Title>{task.title}</Card.Title>
                  <Card.Text>{task.description}</Card.Text>
                  <DropdownButton
                    id='dropdown-basic-button'
                    title='Mark as...'
                    className='d-flex justify-content-end'
                  >
                    <Dropdown.Item>Completed</Dropdown.Item>
                    <Dropdown.Item>In progress</Dropdown.Item>
                    <Dropdown.Item>Pending</Dropdown.Item>
                  </DropdownButton>
                </Card.Body>
                {task.dueDate ? (
                  <Card.Footer className='text-muted'>{`Due date: ${task.dueDate.toLocaleDateString()}`}</Card.Footer>
                ) : null}
              </Card>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}
