// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Добавление методов для управления состоянием корзины
  const addToCart = (item) => {
    if (!cart.some((el) => el.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const deleteFromCart = (item) => {
    const updatesCart = cart.filter((el) => el.id !== item.id);
    setCart(updatesCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
