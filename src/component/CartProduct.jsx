import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Modal } from "react-bootstrap";

export default function CartProduct(props) {
  const cart = useContext(CartContext);
  // const id = props.id;
  // const quantity = props.quantity;
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0) 

  let totalPrice = 0;

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
              
              totalPrice += currentProduct.quantity * currentProduct.price;
              return (
                  <h1>
                  
                    <div>Name:{currentProduct.title}</div>
                    <div>Quantity:{currentProduct.quantity}</div>
                    <div>Price:{currentProduct.price}</div>
                    
                    <Button sm="6" onClick={() => cart.addToCart(currentProduct.id)} className="mx-2">+</Button>
                    <Button sm="6" onClick={() => cart.removeFromCart(currentProduct.id)} className="mx-2">-</Button>
                    
                    <Button size="sm" onClick={() => cart.deleteFromCart(currentProduct.id)}>
                      Remove Item
                    </Button>
                  </h1>

            )} )}
              
                  
    
                    
            <p>Total:{totalPrice.toFixed(2)} </p>
            <Button variant="success">
                      Purchase Item
                    </Button>

            
          </>
        ) : (
          <h1>Cart is Empty!</h1>
        )}
      </Modal.Body>
    </Modal>
  );
}