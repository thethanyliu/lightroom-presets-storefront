import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cart = window.localStorage.getItem("CART_ITEM");
    const subtotal = window.localStorage.getItem("SUBTOTAL");
    const totalQuantity = window.localStorage.getItem("TOTAL_QUANTITY");

    if (cart !== null) setCartItems(JSON.parse(cart));
    if (subtotal !== null) setTotalPrice(JSON.parse(subtotal));
    if (totalQuantity !== null) setTotalQty(JSON.parse(totalQuantity));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("CART_ITEM", JSON.stringify(cartItems));
    window.localStorage.setItem("SUBTOTAL", JSON.stringify(totalPrice));
    window.localStorage.setItem("TOTAL_QUANTITY", JSON.stringify(totalQty));
  }, [cartItems, totalPrice, totalQty]);

  const onAddToCart = (product, displayToast = true) => {
    const productInCart = cartItems.find((item) => item.name === product.name);
    setTotalPrice((prev) => prev + product.price);
    setTotalQty((prev) => prev + 1);

    if (productInCart) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.name === product.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    if (displayToast) {
      toast.success(`1 ${product.name} added to cart!`);
    }
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find((item) => item.name === product.name);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.name !== product.name));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
    setTotalQty((prev) => {
      if (prev == 0) {
        return 0;
      }
      return prev - 1;
    });

    setTotalPrice((prev) => {
      const rounded = (prev - product.price).toFixed(2);
      if (rounded < 0) {
        return 0;
      }
      return parseFloat(rounded);
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        onAddToCart,
        removeFromCart,
        totalQty,
        setTotalQty,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
