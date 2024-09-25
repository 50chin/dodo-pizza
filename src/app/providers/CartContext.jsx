// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Добавление методов для управления состоянием корзины
  const addToCart = (item, addIngredients) => {
    let pizzaIngredientsTotal = null;
    if (item.category === 'pizza' && addIngredients.length) {
      pizzaIngredientsTotal = addIngredients.reduce(
        (acc, ingredient) => acc + ingredient.price,
        0
      );
    }
    // Переменна которая складывает сумму цены пиццы и ингредиентов иначе вернет прайс
    const findProduct = cart.find((el) => el.id === item.id);
    if (!findProduct) {
      const newItem =
        item.category === 'pizza'
          ? {
              ...item,
              addToPizza: addIngredients.map((ingredients) => ({
                title: ingredients.title,
                price: ingredients.price,
              })),
              price: item.price + pizzaIngredientsTotal,
            }
          : item;

      setCart([...cart, newItem]);
    }
    // else if (findProduct && item.category === 'pizza') {
    //   // Проверяем, существует ли продукт с таким же заголовком в пустой пицце
    //   const isProductInCart = cart.some((el) =>
    //     el.addToPizza.every(
    //       (ingredient) =>
    //         ingredient.title ===
    //         addIngredients
    //           .map((element) => element.title)
    //           .includes(ingredient.title)
    //     )
    //   );

    //   if (isProductInCart) {
    //     console.log('я тут');
    //     const updatedCart = cart.map((el) =>
    //       el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
    //     );
    //     setCart(updatedCart);
    //   } else {
    //     // Если продукт не найден, добавляем его в корзину
    //     setCart([...cart, item]);
    //   }
    // }
    else {
      const updatedCart = cart.map((el) =>
        el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      setCart(updatedCart);
    }
  };

  // Функция по увеличению количество продуктов
  const incrementCount = (product) => {
    const updatedCart = cart.map((el) =>
      el.id === product.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setCart(updatedCart);
  };

  // Функция по уменьшению количество продуктов
  const decrementCount = (product) => {
    const updatedCart = cart.map((el) =>
      el.id === product.id ? { ...el, quantity: el.quantity - 1 } : el
    );
    setCart(updatedCart);
    // Если ков-во ноль , то вызов функции по удалению продукта из корзины
    if (product.quantity <= 1) {
      deleteFromCart(product);
    }
  };

  // Функция для добавления доп ингредиент к пицце
  const addToPizza = (title, price) => {
    const addIngredients = cart.map((el) => {
      return {
        ...el,
        addToPizza: { name: title, price: price },
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
