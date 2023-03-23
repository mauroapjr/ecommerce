import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button, useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";


export default function Navbar(props) {
  const { user } = props;

export default function Navbar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0) 


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link to="/"className="navbar-brand fw-bold fs-4" href="/">
            Store Name
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>

            <li>{ user }</li>

            <CartProduct show={show} handleClose={handleClose} />

            <div className="buttons">
              <a href="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in" aria-hidden="true"></i> Login</a>
              <a href="/signup" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus" aria-hidden="true"></i> Sign up</a>
              <button 
                className="fa fa-shopping-cart btn btn-outline-dark ms-2" 
                aria-hidden="true" 
                onClick={handleShow}>
                  My Cart ({productsCount}) Items
                </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
