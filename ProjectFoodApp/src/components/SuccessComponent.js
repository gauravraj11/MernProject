// SuccessModal.js
import React from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

const SuccessModal = ({ isOpen, toggleModal }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Order Placed Successfully</ModalHeader>
      <ModalBody>
        <p>Your order has been placed. Thank you for choosing us!</p>
        <Button color="primary" onClick={toggleModal}>
          Close
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default SuccessModal;
