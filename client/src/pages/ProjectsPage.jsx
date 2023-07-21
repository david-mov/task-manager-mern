import * as React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { compareDate } from '../helpers/compareDate'

export default function ProjectsPage() {
  const fakeCards = [
    {
      id: 1,
      title: 'card 1',
      description: 'description 1',
      lastUpdate: new Date('2023/02/07 15:13:06'),
    },
    {
      id: 2,
      title: 'card 2',
      description: 'description 2',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 3,
      title: 'card 3',
      description: 'description 3',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 4,
      title: 'card 4',
      description: 'description 4',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 5,
      title: 'card 5',
      description: 'description 5',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 6,
      title: 'card 6',
      description: 'description 6',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 7,
      title: 'card 6',
      description: 'description 6',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 8,
      title: 'card 6',
      description: 'description 6',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 9,
      title: 'card 6',
      description: 'description 6',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 10,
      title: 'card 6',
      description: 'description 6',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 11,
      title: 'card 6',
      description: 'description 6',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 12,
      title: 'card 6',
      description: 'description 6',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
    {
      id: 13,
      title: 'card 6',
      description: 'description 6',
      lastUpdate: new Date('2011/02/07 15:13:06'),
    },
  ]

  return (
    <Container
      style={{ height: '100%', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <Row>
        <Col>
          <h2>Your projects</h2>
        </Col>
        <Col>
          <div className='d-flex justify-content-end'>
            <Button>Create a new project</Button>
          </div>
        </Col>
      </Row>
      <Row>
        {fakeCards.map((project) => (
          <Col
            key={project.id}
            xs={{ span: 12 }}
            sm={{ span: 6 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}
          >
            <Card className='m-2'>
              <Card.Img
                variant='top'
                src='img/projects-card.svg'
                className='p-3'
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>
                  Last updated {compareDate(project.lastUpdate).text} ago
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
