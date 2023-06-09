import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button, useState, useContext } from "react";
import { CartContext } from "../CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import CartProduct from "./CartProduct";
import Login from "./Login";
import Logout from "./Logout";
import UserProfile from "./UserProfile";

export default function Navbar() {
  const { user } = useAuth0();
  console.log("USER", user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="..\assets\logo_crop.png"
              alt=""
              className="store_logo"
              style={{ width: "180px", height: "auto" }}
            />
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
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href='http://storage.googleapis.com/store_-_locator/index.html'
                >
                  Find us
                </a>
              </li>
            </ul>
            <CartProduct show={show} handleClose={handleClose} />

            <div className="buttons d-flex">
              <Login />
              <Logout />

              <a
                onClick={handleShow}
                className="btn btn-outline-dark ms-2 ms=auto"
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> My
                Cart ({productsCount}) Items
              </a>
            </div>
          </div>
        </div>
        <UserProfile />
      </nav>
    </div>
  );
}
