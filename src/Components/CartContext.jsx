import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setTotalAmount((prev) => prev + product.price);
    const exist =cartItems.find(item => item.id === product.id);
    if(exist) {
        alert('item already added to the cart');
  };return; 
 }

  const removeFromCart = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      const itemToRemove = cartItems[index];
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
      setTotalAmount((prev) => prev - itemToRemove.price);
    };
}

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
