import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Modal } from "react-bootstrap";

export default function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0) 


  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>My Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productsCount > 0 ? (
          <>
            <p>Items in Cart:</p>
            
            {cart.items.map((currentProduct) => {
              
              
              return (
                  <h1>
                  
                    <div>Name:{currentProduct.title}</div>
                    <div>Quantity:{currentProduct.quantity}</div>
                    <div>Price:{currentProduct.price}</div>
                    
                  </h1>

            )} )}
              
              
            
            {/* <h3>{prop.title}</h3> */}
            <p>{quantity} Total</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
              Remove Item
            </Button>

            {/* <Button variant="success">
                      Purchase Item
                    </Button> */}
          </>
        ) : (
          <h1>Cart is Empty!</h1>
        )}
      </Modal.Body>
    </Modal>
  );
}