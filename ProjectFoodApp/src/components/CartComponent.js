import React,{useState} from 'react';
import { Modal, ModalHeader, ModalBody, CardImg, Button, Row, Col } from 'reactstrap';
import { useCart } from './CartContext';
import Payment from './PaymentComponent';
import SuccessModal from './SuccessComponent';

const Cart = ({ isModalOpen, toggleModal }) => {
  const { cart, clearCart, removeFromCart } = useCart();
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePaymentSuccess = () => {
    // Handle any post-payment actions here
    // For example, you can clear the cart and then open the success modal
    clearCart();
    setSuccessModalOpen(true);
  };

  return (
    <div>
      <span className="cart-icon" onClick={toggleModal}>
        Cart ({cart.length})
      </span>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Cart</ModalHeader>
        <ModalBody>
          <ul className="list-unstyled">
            {cart.map((item) => (
              <li key={item.id} className="mb-2">
                <Row>
                  <Col xs={2}>
                    <CardImg src={item.image} alt={item.name} />
                  </Col>
                  <Col xs={6}>
                    <p>{item.name}</p>
                  </Col>
                  <Col xs={2}>
                    <p>Rs.{item.price}</p>
                  </Col>
                  <Col xs={2}>
                    <Button color="danger" onClick={() => removeFromCart(item.id)}>
                      Delete
                    </Button>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <h5>Total Price: Rs.{calculateTotalPrice().toFixed(2)}</h5>

            <Payment totalAmount={calculateTotalPrice()} onPaymentSuccess={handlePaymentSuccess}/>
            
            <br />

            <Button color="primary" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </ModalBody>
      </Modal>

      <SuccessModal isOpen={successModalOpen} toggleModal={() => setSuccessModalOpen(false)} />
    </div>
  );
};

export default Cart;
