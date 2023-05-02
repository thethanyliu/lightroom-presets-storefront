import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  

  const onAddToCart = (product) => {
    const productInCart = cartItems.find((item) => item.name === product.name);
    totalPrice += product.price;
    totalQty++;

    if (productInCart) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.name === product.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
      });

      cartItems = updatedCartItems;
    } else {
      cartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    toast.success(`1 ${product.name} added to cart!`);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQty,
        onAddToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
