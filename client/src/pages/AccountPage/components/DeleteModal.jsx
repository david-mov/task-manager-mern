import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Alert, Button } from 'react-bootstrap'
import useAuthApi from '../../../hooks/useAuthApi'

const DeleteModal = ({ isOpen, handleClose }) => {
  const { signout } = useAuthApi()

  const handleDelete = () => {
    // Workaround ─ HTTP Request
    signout()
  }

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant='danger'>
          Are you sure you want to delete your account permanently?{' '}
          <b> All your data will be lost.</b>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={handleDelete}>
          Delete account
        </Button>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

DeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default DeleteModal
