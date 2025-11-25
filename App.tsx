import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';
import { ShippingReturns } from './pages/ShippingReturns';
import { Authenticity } from './pages/Authenticity';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/authenticity" element={<Authenticity />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  );
};

export default App;