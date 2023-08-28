import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {Button, Badge} from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "./style.css" ;
import { useCart } from './CartContext';

export default function HeaderComponent() {

    const { cart } = useCart();
    
    const [isNavOpen, setisNavOpen] =useState(false);
    const [cartCount, setCartCount] = useState(0);
            
    
            function toggleNav(){
                setisNavOpen(!isNavOpen);
                };
                const addToCart = () => {
                    setCartCount(cartCount + 1);
                };
            
            
        return(
            <div>
                <Navbar dark expand="md" >
                    <div className="container">
                        <NavbarToggler onClick={toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Indian Restaurant ' /></NavbarBrand>
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/'><span className="fa fa-user" aria-hidden="true" ></span> Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/signup'><span className="fa fa-sign-in" aria-hidden="true"></span>SignUp</NavLink>
                            </NavItem>
                            
                            </Nav>
                            <Nav>

                            <Button variant="outline-light" onClick={addToCart} className="cart-button">
                            <FaShoppingCart />
                            Cart 
                            <Badge bg="secondary">{cart.length}</Badge>
                            </Button>
                            
                        </Nav>
                                            
                        </Collapse>
                    </div>
                
                </Navbar>

                

                    <div className="container">
                    <div className="row row-header">
                    <center><div className="col-8 col-sm-6">
                                <h2 dark>Indian Restaurant !</h2>
                            </div></center>
                        </div>
                    </div>
            </div>
        );
    }



