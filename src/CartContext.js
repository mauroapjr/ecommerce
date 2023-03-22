import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  products: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})

export function CartProvider({children}){
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);

  function setProductData(data) {
    setProducts(data);
  }

  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0){
      setCartProducts([
        ...cartProducts,
        {
          id:id,
          quantity:1
        }
      ])
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id === id ?
          {...product, quantity:product.quantity + 1} : product
        )
      )
    }
  }

  function removeFromCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity === 1){
      deleteFromCart(id);
    } else {
      setCartProducts(
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
          return currentProduct.id !== id;
      })
    )
  }

  //this function not finished yet
  function getTotalCost() {
    return
  }

  const contextValue = {
    items: cartProducts,
    products: products,
    getProductQuantity,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCost,
    setProductData
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}