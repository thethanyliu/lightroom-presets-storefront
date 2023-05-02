import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  let showCart;
  let cartItems;
  let totalPrice;
  let totalQty;

  useEffect(() => {
    localStorage.setItem("Show Cart", showCart)
    localStorage.setItem("Cart Items", cartItems)
    localStorage.setItem("Total Price", totalPrice)
    localStorage.setItem("Total Qty", totalQty)
  }, [showCart, cartItems, totalPrice, totalQty])


  const onAddToCart = (product) => {
    console.log(1)
    const productInCart = cartItems.find((item) => item.name === product.name);
    totalPrice += product.price
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

      cartItems = updatedCartItems
    } else {
      cartItems = [...cartItems, { ...product, quantity: 1 }]
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
