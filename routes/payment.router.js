// In your Express route handler or controller file (e.g., payment.js)
const express = require('express');
const router = express.Router();

const { createOrder } = require('../razorpay'); // Import the createOrder function from your server-side razorpay.js

// Your route handler or controller logic
router.post('/', async (req, res) => {
  try {
    const totalAmount = req.body.totalAmount; // Replace with the actual total amount
    const currency = 'INR'; // Replace with the appropriate currency

    const order = await createOrder(totalAmount, currency);

    // Send the order data as a response to the client
    res.json(order);
    
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: 'Payment order creation failed' });
  }
});

module.exports = router;
