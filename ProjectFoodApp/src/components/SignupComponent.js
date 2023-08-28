import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './SignupModal.css';
import {useNavigate } from 'react-router-dom';

const SignupFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [username, setUsername] = useState('');
  
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const userData = {
      username,
      number,
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        setRegistrationMessage('Registration successful!');

        // navigate('/')
      } else {
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setRegistrationMessage('');
    setUsername('');
    setNumber('');
    setEmail('');
    setPassword('');
  };

  const handleShow = () => setShowModal(true);

  return (
    <div>
      <center><Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button></center>
      <br /><br /><br /><br />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {registrationMessage && <p style={{ color: 'green' }}>{registrationMessage}</p>}



          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container' >
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>



          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container'>
            <label>Number:</label>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />
          </div>
          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container'>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container'>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignupFormModal;




