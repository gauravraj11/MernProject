// razorpay.js
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'rzp_test_biQOer8T9qcV4b',
  key_secret: 'TOEx8DoalbVcyqOnqglLOwXw',
});

// Function to create a payment order
const createOrder = async (amount, currency) => {
  const options = {
    amount: amount * 100, // Amount in paise (INR currency)
    currency: currency || 'INR',
    receipt: 'order_receipt_' + Date.now(),
  };

  try {
    const order = await razorpay.orders.create(options);
    return order;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { createOrder };
