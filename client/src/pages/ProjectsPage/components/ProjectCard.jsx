import React from 'react'
import { Card } from 'react-bootstrap'
import { compareDate } from '../../../helpers/compareDate'
import PropTypes from 'prop-types'

const ProjectCard = ({
  id,
  title,
  description,
  lastUpdate,
  navigateToProject,
}) => {
  return (
    <Card
      className='m-2'
      style={{ cursor: 'pointer' }}
      onClick={() => navigateToProject(id)}
    >
      <Card.Img variant='top' src='img/projects-card.svg' className='p-3' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>
          Last updated {compareDate(lastUpdate).text} ago
        </small>
      </Card.Footer>
    </Card>
  )
}

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lastUpdate: PropTypes.instanceOf(Date),
  navigateToProject: PropTypes.func.isRequired,
}

export default ProjectCard
