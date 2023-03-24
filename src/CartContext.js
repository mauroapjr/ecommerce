import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  products: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  setProducts: () => {},
  clearCart: () => {}
})

export function CartProvider({children}){
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);


  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity
    
    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addToCart(id) {
    const quantity = getProductQuantity(id);
    const found = products.find(product => product.id === id)

    if (quantity === 0){
      
      setCartProducts([
        ...cartProducts,
        
        {
          id:id,
          quantity:1,
          price:found.price,
          title:found.title
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
    let totalCost = 0;
    cartProducts.map((cartItem) =>{
      // const productData = getProductData(cartItem.id);
      // totalCost += (productData.price * cartItem.quantity);
    })
  }

  function clearCart() {
    setCartProducts([]);
  }
  

  const contextValue = {
    items: cartProducts,
    products: products,
    getProductQuantity,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCost,
    setProducts,
    clearCart
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}