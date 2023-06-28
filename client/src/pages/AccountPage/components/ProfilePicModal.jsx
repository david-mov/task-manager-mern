import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Button } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth'
import { toast } from 'react-toastify'

const ProfilePicModal = ({ isOpen, handleClose }) => {
  const { updateUser } = useAuth()

  const [selectedFile, setSelectedFile] = React.useState(null)

  const handleFileChange = (ev) => {
    const file = ev.target.files[0]

    const isNameOfOneImageRegEx = /\.(jpg|png|jpeg)$/
    const isValidType = isNameOfOneImageRegEx.test(file?.name)

    const SIZE_10MB = 10 * 1024 * 1024
    const isValidSize = file?.size < SIZE_10MB

    if (!isValidType)
      return toast.error(
        'The file uploaded must be an image in format JPG o PNG'
      )
    if (!isValidSize) return toast.error('The image must weigh less than 10MB')

    const reader = new FileReader()

    reader.onloadend = () => {
      setSelectedFile(reader.result)
    }

    reader.readAsDataURL(file)
  }

  const handleUpdateProfilePic = () => {
    if (!selectedFile) return
    updateUser({ profilePic: selectedFile })
    handleClose()
  }

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change profile picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Upload an image</Form.Label>
          <Form.Control
            type='file'
            onChange={handleFileChange}
            accept='.jpg, .jpeg, .png'
          />
        </Form>
        <img
          className='img-fluid mt-2'
          src={selectedFile}
          alt='profile-picture-preview'
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleUpdateProfilePic} disabled={!selectedFile}>
          Change profile picture
        </Button>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ProfilePicModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default ProfilePicModal
