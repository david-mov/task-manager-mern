import * as React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function ProjectsPage() {

  const fakeCards = [
    {id: 1, title: 'card 1', description: 'description 1', lastUpdate: new Date('2011/02/07 15:13:06')},
    {id: 2, title: 'card 2', description: 'description 2', lastUpdate: new Date('2011/02/07 15:13:06')},
    {id: 3, title: 'card 3', description: 'description 3', lastUpdate: new Date('2011/02/07 15:13:06')},
    {id: 4, title: 'card 4', description: 'description 4', lastUpdate: new Date('2011/02/07 15:13:06')},
    {id: 5, title: 'card 5', description: 'description 5', lastUpdate: new Date('2011/02/07 15:13:06')},
    {id: 6, title: 'card 6', description: 'description 6', lastUpdate: new Date('2011/02/07 15:13:06')},
  ]

  return (
    <>
      <Container>
      <Row className='mt-5'>
        {fakeCards.map((_, idx) => 
          <Col key={idx} xs={{ span: 12 }} md={{ span: 6 }} className='mb-4'>
            <Card style={{ width: '18rem'}}>
              <Card.Img 
                variant="top" 
                src="img/projects-card.svg" 
                className='p-3'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        )}
      </Row>
      </Container>
    </>
  )
}
