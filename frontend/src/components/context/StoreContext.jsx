// StoreContext.jsx
import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCart((prevCart) => [...prev, { id: itemId, quantity: 1 }]);
    } else {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev, { ...prev, [itemId]: prev[itemId] - 1 });
  }
  useEffect(() => {
    console.log(cartItems);
  },[cartItems])
  

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}
