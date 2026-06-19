"use client";
import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeCart = (item) => {
    const removedItem = cart.filter((cart) => cart.id != item.id);
    setCart(removedItem);
  };
  const cartInfo = {
    cart,
    addToCart,
    removeCart,
  };
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
