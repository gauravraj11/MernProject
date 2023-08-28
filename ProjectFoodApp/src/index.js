import React from 'react';
import ReactDOM from 'react-dom/client';


import "bootstrap/dist/css/bootstrap.min.css" ;
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './components/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <CartProvider>
          <App />
      </CartProvider>
  </React.StrictMode>
  
);


reportWebVitals();
