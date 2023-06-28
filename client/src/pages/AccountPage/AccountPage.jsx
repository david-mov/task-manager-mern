import * as React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'
import useModal from '../../hooks/useModal'
import DeleteModal from './components/DeleteModal'
import ChangePassModal from './components/ChangePassModal'
import EditModal from './components/EditModal'
import ProfilePicModal from './components/ProfilePicModal'

export default function AccountPage() {
  const { user } = useAuth()

  const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal()
  const [isOpenChangePassModal, openChangePassModal, closeChangePassModal] =
    useModal()
  const [isOpenEditModal, openEditModal, closeEditModal] = useModal()
  const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal] = useModal()

  return (
    <>
      <Container>
        <Row className='mt-4 d-flex justify-content-center'>
          <Col xs={12} className='text-center'>
            <img
              src={user?.profilePic || '/img/male_avatar.svg'}
              alt='profile'
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer'
              }} 
              onClick={openProfilePicModal}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} className='mt-4'>
            <Card className='mw-50 p-3 text-center'>
              <p>
                <b>Name: </b>
                {user.name}
              </p>
              <p>
                <b>Email: </b>
                {user.email}
              </p>
              <p>
                <b>Rol: </b>
                {user.role}
              </p>

              <div>
                <Button
                  onClick={openEditModal}
                >
                  Edit account
                </Button>
              </div>
              <div>
                <Button
                  variant='link'
                  className='mt-3'
                  onClick={openChangePassModal}
                >
                  Change password
                </Button>
              </div>
              <div>
                <Button
                  variant='link'
                  className='my-2 text-danger'
                  onClick={openDeleteModal}
                >
                  Delete account
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <DeleteModal isOpen={isOpenDeleteModal} handleClose={closeDeleteModal} />
      <ChangePassModal isOpen={isOpenChangePassModal} handleClose={closeChangePassModal} />
      <EditModal isOpen={isOpenEditModal} handleClose={closeEditModal} />
      <ProfilePicModal isOpen={isOpenProfilePicModal} handleClose={closeProfilePicModal} />
    </>
  )
}
