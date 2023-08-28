import React from 'react';

const Profile = ({ orders }) => {
  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <p>Order ID: {order.id}</p>
              <p>Total Amount: Rs. {order.totalAmount.toFixed(2)}</p>
              <ul>
                {order.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.name} - Rs. {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
