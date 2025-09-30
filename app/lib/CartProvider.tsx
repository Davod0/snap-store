"use client";

import { CartItem, Product } from "@/data";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextValue {
  cart: CartItem[];
  numItems: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeProduct: (product: Product) => void;
  increaseCartItem: (cartItem: CartItem) => void;
  decreaseCartItem: (cartItem: CartItem) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ContextValue>({} as ContextValue);

export default function CartProvider(props: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [isLoadedFromLS, setIsLoadedFromLS] = useState(false);

  useEffect(() => {
    if (isLoadedFromLS) return;
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    setIsLoadedFromLS(true);
  }, [isLoadedFromLS]);

  useEffect(() => {
    if (!isLoadedFromLS) return;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [isLoadedFromLS, cart]);

  const addToCart = (product: Product) => {
    let itemToAdd = cart.find((item) => item.id === product.id);

    if (itemToAdd) {
      itemToAdd.quantity += 1;
      setCart([...cart]);
    } else {
      itemToAdd = { ...product, quantity: 1 } as CartItem;
      setCart([...cart, itemToAdd]);
    }
  };

  const removeProduct = (product: Product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const increaseCartItem = (cartItem: CartItem) => {
    const itemToIncrease = cart.find((item) => item.id === cartItem.id);
    if (itemToIncrease) {
      itemToIncrease.quantity += 1;
      setCart([...cart]);
    }
  };

  const decreaseCartItem = (cartItem: CartItem) => {
    const itemToDecrease = cart.find((item) => item.id === cartItem.id);
    if (itemToDecrease) {
      itemToDecrease.quantity -= 1;
      setCart([...cart]);
    }
    updateCart(itemToDecrease!);
  };

  const updateCart = (cartItem: CartItem) => {
    if (cartItem.quantity === 0) {
      const updatedCart = cart.filter((item) => item.id !== cartItem.id);
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const numItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        numItems,
        totalPrice,
        addToCart,
        removeProduct,
        increaseCartItem,
        decreaseCartItem,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
