import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import EditTaskModal from './components/EditTaskModal'
import useModal from '../../hooks/useModal'
import TaskCard from './components/TaskCard'

export default function ProjectPage() {
  const { projectId } = useParams()

  const [isOpenEditTaskModal, openEditTaskModal, closeEditTaskModal] =
    useModal()

  const getProject = (id) => {
    return {
      id,
      title: 'Project Write a Novel',
      tasks: [
        {
          id: '1',
          title: 'Write the first page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          status: 'In progress',
          dueDate: new Date(),
          priority: 'High',
        },
        {
          id: '2',
          title: 'Get the main idea of the novel',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          status: 'Completed',
          dueDate: new Date(),
          priority: 'Medium',
        },
        {
          id: '3',
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
    <>
      <Container
        style={{ height: '100%', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <Row className='d-flex justify-content-center'>
          <Col lg='8'>
            <h2 className='mb-3'>{`Project ${projectId}`}</h2>
            {project.tasks.map((task) => {
              return (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  dueDate={task.dueDate}
                  openEditTaskModal={openEditTaskModal}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
      <EditTaskModal
        isOpen={isOpenEditTaskModal}
        handleClose={closeEditTaskModal}
      />
    </>
  )
}
