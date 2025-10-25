import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function getCartItem(name) {
    const cartItem = cart.find((item) => item.name === name);

    return cartItem;
  }

  function handleAddToCart(product) {
    const inCart = getCartItem(product.name);

    if (inCart) {
      return;
    }

    setCart((prevCart) => [...prevCart, product]);
  }

  function handleDecrement(name) {
    setCart((pr) =>
      pr.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  function handleIncrement(name) {
    setCart((pr) =>
      pr.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // To wrap my app  with, without this, no access to the context.
  return (
    <CartContext.Provider
      value={{
        getCartItem,
        cart,
        handleAddToCart,
        handleDecrement,
        handleIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to be able to access or use what i stored in the context
export function useCart() {
  return useContext(CartContext);
}
