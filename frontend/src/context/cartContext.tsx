"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  getCart as getCartFromStorage,
  addToCart as addToStorage,
  clearCart as clearFromStorage,
  CartItem,
} from "@/lib/cart";

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  updateQuantity: (productId: number, weightId: number, amount: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const countItems = (cart: CartItem[]) =>
    cart.reduce((total, item) => total + item.quantity, 0);

  // Инициализация
  useEffect(() => {
    const loadedCart = getCartFromStorage();
    setCart(loadedCart);
    setCartCount(countItems(loadedCart));
  }, []);

  useEffect(() => {
    setCart(getCartFromStorage());
  }, []);

  // Добавление в корзину
  const addToCart = (item: CartItem) => {
    addToStorage(item);
    const updatedCart = getCartFromStorage();
    setCart(updatedCart);
    setCartCount(countItems(updatedCart));
  };

  // Очистка корзины
  const clearCart = () => {
    clearFromStorage();
    setCart([]);
    setCartCount(0);
  };

  const updateQuantity = (
    productId: number,
    weightId: number,
    amount: number,
  ) => {
    const currentCart = getCartFromStorage();

    const index = currentCart.findIndex(
      (item) => item.productId === productId && item.weightId === weightId,
    );

    if (index !== -1) {
      currentCart[index].quantity += amount;

      if (currentCart[index].quantity <= 0) {
        currentCart.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(currentCart));
      setCart(currentCart);
      setCartCount(countItems(currentCart));
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
