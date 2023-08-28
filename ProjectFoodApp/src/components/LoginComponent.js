import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './SignupModal.css';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [loginMessage, setloginMessage] = useState('');
  

  const handleLogin = async () => {
    const loginData = {
      number,
      password
    };

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {

        setShowModal(false);
        setloginMessage('Login successful!');
        const responseData = await response.json();
        // Assuming the server returns a token upon successful login
        const token = responseData.accessToken;
        // Save the token to local storage or a state management solution
        localStorage.setItem('authToken', token);
        console.log("Successful Login !");
        
      } else {
        setLoginError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <center><Button variant="primary" onClick={handleShow}>
        Login
      </Button></center>
      <br />
      <br />
      <br />
      <br />
      {loginMessage && <p style={{ color: 'green' }}>{loginMessage}</p>}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container' >
            <label>Number:      </label>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />
          </div>

          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container' >
            <label>Password:    </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;