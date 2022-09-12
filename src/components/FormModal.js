import axios from 'axios';
import React, {  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useEffect, handleSubmit} from 'react';

const FormModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    supervisor: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const userObject = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      supervisor: formData.supervisor,
    };
    axios
      .post('http://localhost:8080/api/submit', { userObject })
      .then((res) => {
        console.log(res.data);
        console.log(res)
        window.alert(res);
      })
      .catch((err) => {console.log(err)
      window.alert(err);
      });
  };

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/supervisors')
      .then((res) => {
        console.log(res.data);
        setData(res.data)})
        .catch((err) => console.log(err));
  }, []);


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
      
    <form onSubmit = {handleSubmit}>
    <label>
      first name:
      <input type="text" value={formData.firstName} name="firstName" onChange={handleChange} />
    </label>
    <label>
      last name:
      <input type="text" value={formData.lastName} name="lastName" onChange={handleChange} />
    </label>
    <label>
      Email:
      <input type="text" value={formData.email} name="email" onChange={handleChange} />
    </label>
    <label>
      Phone Number:
      <input type="text" value={formData.phoneNumber} name="phoneNumber" onChange={handleChange} />
    </label>
    <label>
      Supervisor: 
      <select name="supervisor" value={formData.supervisor} onChange={handleChange}>
      {data.map((item) => (
            <option name="supervisor" value={item}>{item}</option>
        ))}
      </select>
    </label>

    <button type="submit">Submit</button>
    </form>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );
}

export default FormModal;