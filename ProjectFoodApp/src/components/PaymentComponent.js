// Payment.js
import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Payment = ({ totalAmount, onPaymentSuccess }) => {

  const [paymentId, setPaymentId] = useState(null);
  const [amount, setAmount] = useState(null);
  
  const handlePayment = async () => {
    try {
      // Make an HTTP request to your server endpoint (/create-order) to create the Razorpay order
      const response = await fetch('http://localhost:8000/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalAmount }),
        
      });

      if (response.ok) {

        const order = await response.json();

        console.log("Payment Successful !");

        console.log(order.amount , "paid");
        setAmount(order.amount);

        setPaymentId(order.id);
        
        onPaymentSuccess();
        
      } else {
        console.error('Error creating Razorpay order:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
    }
  };

  return (
    <div>
      <Button color="success" onClick={handlePayment}>
        Pay Now
      </Button>

      {paymentId && <p>Payment Successful! Payment ID: {paymentId}</p>}
      <br />
      {paymentId && <p>you have paid an amount of : INR.{amount/100} </p>}

    
    </div>
  );
};

export default Payment;
