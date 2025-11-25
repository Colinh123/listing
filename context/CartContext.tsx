import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product, MeasurementUnit } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, height: string, weight: string, unit: MeasurementUnit) => void;
  removeFromCart: (index: number) => void;
  isOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product, height: string, weight: string, unit: MeasurementUnit) => {
    const newItem: CartItem = {
      ...product,
      userHeight: height,
      userWeight: weight,
      userUnit: unit,
    };
    setItems((prev) => [...prev, newItem]);
    setIsOpen(true); // Open cart when item is added
  };

  const removeFromCart = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, isOpen, toggleCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};