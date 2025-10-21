import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function getCartItem(id) {
    const cartItem = cart.find((item) => item.id === id);

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

  return (
    <CartContext.Provider
      value={{ getCartItem, cart, handleAddToCart, handleDecrement }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
