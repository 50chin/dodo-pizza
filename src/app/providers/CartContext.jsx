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
    const findProduct = cart.find((el) => el.id === item.id);

    if (!findProduct) {
      setCart([...cart, item]);
    } else {
      const updatedCart = cart.map((el) =>
        el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      setCart(updatedCart);
    }
  };

  // Функция по увеличению количество продуктов
  const incrementCount = (product) => {
    const findProduct = cart.find((el) => el.id === product.id);
    const updatedCart = cart.map((el) =>
      el.id === findProduct.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setCart(updatedCart);
  };

  // Функция по уменьшению количество продуктов
  const decrementCount = (product) => {
    const findProduct = cart.find((el) => el.id === product.id);

    const updatedCart = cart.map((el) =>
      el.id === findProduct.id ? { ...el, quantity: el.quantity - 1 } : el
    );
    setCart(updatedCart);
    // Если ков-во ноль , то вызов функции по удалению продукт из корзицы
    if (findProduct.quantity <= 1) {
      deleteFromCart(product);
    }
  };

  // Функция для добавления доп ингредиент к пицце
  const addToPizza = (title, price) => {
    const addIngredients = cart.map((el) => {
      return {
        ...el,
        addToPizza: [...el.addToPizza, { name: title, price: price }],
      };
    });
    setCart(addIngredients);
  };


  // Функция по удалению продукта из корзины
  const deleteFromCart = (item) => {
    const updatesCart = cart.filter((el) => el.id !== item.id);
    setCart(updatesCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        addToPizza,
        decrementCount,
        incrementCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
