"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const AddToCart = ({ food }) => {
  const [isCart, setIsCart] = useState(false);
  const { addToCart } = use(CartContext);

  const hanleAddCart = () => {
    addToCart(food);
    setIsCart(true);
  };
  return (
    <button
      disabled={isCart}
      onClick={hanleAddCart}
      className="w-full py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition cursor-pointer disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"
    >
      {isCart ? "Added" : "Add To Cart"}
    </button>
  );
};

export default AddToCart;
