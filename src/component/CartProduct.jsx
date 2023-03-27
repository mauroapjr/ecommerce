import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Modal } from "react-bootstrap";
import jsPDF from "jspdf";

export default function CartProduct(props) {
  const cart = useContext(CartContext);
  // const id = props.id;
  // const quantity = props.quantity;

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Items Purchased:", 10, 10);
    let y = 20;
    cart.items.forEach((currentProduct) => {
      doc.text(`Name: ${currentProduct.title}`, 10, y);
      doc.text(`Quantity: ${currentProduct.quantity}`, 10, y + 10);
      doc.text(`Price: ${currentProduct.price}`, 10, y + 20);
      totalPrice += currentProduct.quantity * currentProduct.price;
      y += 40;
    });
    doc.text(`Total: ${totalPrice.toFixed(2)}`, 10, y + 10);
    const dataUri = doc.output("datauristring");
    window.open(dataUri, "_blank");
    cart.clearCart(); // clear cart after generating PDF
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

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
                <div key={currentProduct.id}>
                  <div style={{ marginBottom: '10px', paddingTop: '10px' }}>
                    <div>Name: {currentProduct.title}</div>
                    <div>Quantity: {currentProduct.quantity}</div>
                    <div>Price: ${currentProduct.price}</div>
                    
                    <Button
                      sm="6"
                      onClick={() => cart.addToCart(currentProduct.id)}
                      className="mx-2"
                      style={{ margin: '5px' }}
                      variant="secondary"
                    >
                      +
                    </Button>
                    <Button
                      sm="6"
                      onClick={() => cart.removeFromCart(currentProduct.id)}
                      className="mx-2"
                      style={{ margin: '5px' }}
                      variant="secondary"
                    >
                      -
                    </Button>

                    <Button 
                      sm="6"
                      onClick={() => cart.deleteFromCart(currentProduct.id)}
                      style={{ margin: '5px' }}
                      variant="secondary"
                    >
                      Remove Item
                    </Button>
                  </div>
                </div>
              );
            })}

            <p>Total: ${totalPrice.toFixed(2)} </p>
            <Button variant="success" onClick={generatePDF}>
              Purchase Item
            </Button>
          </>
        ) : (
          <h6>Cart is Empty!</h6>
        )}
      </Modal.Body>
    </Modal>
  );
}
