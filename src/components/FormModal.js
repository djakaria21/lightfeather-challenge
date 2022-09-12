import axios from 'axios';
import React, {  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FormModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return ( 
    <>
    <Button variant="primary" onClick={handleShow}>
    send notification
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Notification form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
    <form>
    <label>
      first name:
      <input type="text" name="firstName" />
    </label>
    <label>
      last name:
      <input type="text" name="lastName" />
    </label>
    <label>
      Email:
      <input type="text" name="email" />
    </label>
    <label>
      Phone Number:
      <input type="text" name="phoneNumber" />
    </label>
    <label>
      Supervisor: 
      <DropDown></DropDown>
    </label>
    </form>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );
}

export default FormModal;