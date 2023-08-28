import React, { useState, useEffect } from 'react';
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Contact from "./components/ContactComponent";
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Login from "./components/LoginComponent";
import Signup from "./components/SignupComponent";
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:8000/getdishes');
      const data = await response.json();
      setDishes(data);
    };
    fetchUsers();
  }, []);
  return (
    <Router>

      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

          <Route path='/home' element={<Home />} />

          <Route exact path='/menu' element={<Menu dishes={dishes} />} />

          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

        <Footer />

      </div>

    </Router>

  )
}

