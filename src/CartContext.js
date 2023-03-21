import { createContext, useState } from "react";

export const CartContext = createContext({

  items: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}

})

export function CartProvider({children}){
  const [cartProduct, setCartProduct] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addToCart(id) {
    const quantity = getProductQuantity(id);

    //product not in cart
    if (quantity === 0){
      [
        ...setCartProduct,
        {
          id:id,
          quantity:1
        }
      ]
    } else {
      //product in cart
      setCartProduct(
        cartProducts.map(
          product => product.id === id ?
          {...product, quantity:product.quantity + 1} : product
        )
      )
    }
  }

  function removeFromCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity == 1){
      deleteFromCart(id);
    } else {
      setCartProduct(
        cartProducts.map(
          product => product.id === id ?
          {...product, quantity:product.quantity - 1} : product
        )
      )
    }
  }

  function deleteFromCart(id) {
    setCartProducts(
      cartProducts => 
      cartProducts.filter(
        currentProduct => {
          return currentProduct.id != id;
      })
    )
  }

  const contextValue = {
    items: cartProduct,
    getProductQuantity,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}