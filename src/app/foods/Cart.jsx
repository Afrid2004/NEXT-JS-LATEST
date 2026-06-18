"use client";
import FoodCartCard from "@/components/cards/FoodCartCard";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const Cart = () => {
  const { cart } = use(CartContext);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">
        Total <span className="text-amber-400">{cart.length}</span> carts found
      </h2>
      <div>
        <div className="grid grid-cols-1 gap-5">
          {cart.map((cart) => {
            return <FoodCartCard cart={cart} key={cart.id}></FoodCartCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
