import * as React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import useModal from '../../hooks/useModal'
import CreateProjectModal from './components/CreateProjectModal'
import PaginationBar from './components/PaginationBar'
import ProjectCard from './components/ProjectCard'

export default function ProjectsPage() {
  const [
    isOpenCreateProjectModal,
    openCreateProjectModal,
    closeCreateProjectModal,
  ] = useModal()

  const getProjects = ({ page }) => {
    return {
      docs: [
        {
          id: '1',
          title: 'card 1',
          description: 'description 1',
          lastUpdate: new Date('2023/02/07 15:13:06'),
        },
        {
          id: '2',
          title: 'card 2',
          description: 'description 2',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '3',
          title: 'card 3',
          description: 'description 3',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '4',
          title: 'card 4',
          description: 'description 4',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '5',
          title: 'card 5',
          description: 'description 5',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '6',
          title: 'card 6',
          description: 'description 6',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '7',
          title: 'card 7',
          description: 'description 7',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '8',
          title: 'card 8',
          description: 'description 8',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '9',
          title: 'card 9',
          description: 'description 9',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '10',
          title: 'card 10',
          description: 'description 10',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '11',
          title: 'card 11',
          description: 'description 11',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
        {
          id: '12',
          title: 'card 12',
          description: 'description 12',
          lastUpdate: new Date('2011/02/07 15:13:06'),
        },
      ],
      page: 1,
      totalPages: 10,
      hasPrevPage: false,
      hasNextPage: true,
      prevPage: null,
      nextPage: 2,
    }
  }

  const location = useLocation()
  const query = new URLSearchParams(location.search)

  const requestedPage = parseInt(query.get('page')) || 1
  const projects = getProjects({ page: requestedPage })

  const navigate = useNavigate()

  const handlePagination = ({ page: pageNumber }) => {
    return navigate({
      pathname: '/projects',
      search: `?page=${pageNumber}`,
    })
  }

  const navigateToProject = (id) => {
    return navigate({
      pathname: `/projects/${id}`,
    })
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Your projects</h2>
          </Col>
          <Col>
            <div className='d-flex justify-content-end'>
              <Button onClick={openCreateProjectModal}>
                Create a new project
              </Button>
            </div>
          </Col>
        </Row>
        {projects.docs.length ? (
          <>
            <Row>
              {projects.docs.map((project) => (
                <Col
                  key={project.id}
                  xs={{ span: 12 }}
                  sm={{ span: 6 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                >
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    lastUpdate={project.lastUpdate}
                    navigateToProject={navigateToProject}
                  />
                </Col>
              ))}
            </Row>
            <Row>
              <Col className='d-flex justify-content-center mt-3'>
                <PaginationBar
                  handlePagination={handlePagination}
                  page={projects.page}
                  totalPages={projects.totalPages}
                  hasPrevPage={projects.hasPrevPage}
                  hasNextPage={projects.hasNextPage}
                  prevPage={projects.prevPage}
                  nextPage={projects.nextPage}
                />
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col md={{ span: 6, offset: 3 }} className='text-center'>
              <img
                className='w-100 p-3'
                src='/img/tasks-card.svg'
                alt='projects list empty'
              />
              <h2>You do not have any projects here</h2>
              <p>
                Start creating one and discover the potencial of this
                application
              </p>
            </Col>
          </Row>
        )}
      </Container>
      <CreateProjectModal
        isOpen={isOpenCreateProjectModal}
        handleClose={closeCreateProjectModal}
      />
    </>
  )
}
