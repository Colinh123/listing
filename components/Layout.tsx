
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MeasurementUnit } from '../types';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { items, isOpen, toggleCart, removeFromCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCheckoutClick = () => {
    setShowConfirmation(true);
  };

  const confirmRedirect = () => {
    // Replace with the actual support/sales phone number
    const phoneNumber = "15550100000"; 
    
    let message = "Hello, I would like to place an order for the following items:\n\n";
    
    items.forEach((item) => {
      const unitLabelH = item.userUnit === MeasurementUnit.METRIC ? 'cm' : 'ft';
      const unitLabelW = item.userUnit === MeasurementUnit.METRIC ? 'kg' : 'lbs';
      
      message += `PRODUCT: ${item.designer} - ${item.name}\n`;
      message += `PRICE: $${item.price}\n`;
      message += `SIZE INFO: Height: ${item.userHeight}${unitLabelH}, Weight: ${item.userWeight}${unitLabelW}\n`;
      message += `--------------------------------\n`;
    });
    
    const total = items.reduce((acc, item) => acc + item.price, 0);
    message += `\nTOTAL: $${total.toLocaleString()}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="flex items-center space-x-6">
             <button className="p-2 -ml-2 hover:bg-gray-50 rounded-full lg:hidden">
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" className="text-2xl font-serif tracking-tight font-bold">
              Undefined.Market
            </Link>
          </div>

          <div className="relative">
            <button 
              onClick={toggleCart}
              className="p-2 hover:bg-gray-50 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              {items.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></span>
              )}
            </button>

            {/* Mini Cart Dropdown */}
            {isOpen && (
              <div className="absolute right-0 top-full mt-4 w-96 bg-white border border-gray-200 shadow-2xl z-50 rounded-sm overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest">Shopping Bag ({items.length})</span>
                </div>
                
                <div className="max-h-[60vh] overflow-y-auto">
                  {items.length === 0 ? (
                    <div className="p-8 text-center text-sm text-gray-400">
                      Your bag is empty.
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {items.map((item, index) => (
                        <div key={index} className="p-4 flex gap-4 bg-white hover:bg-gray-50 transition-colors">
                          <div className="w-16 h-20 bg-gray-100 shrink-0">
                            <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wide">{item.designer}</h4>
                                <p className="text-xs text-gray-500 truncate">{item.name}</p>
                              </div>
                              <button 
                                onClick={() => removeFromCart(index)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                            
                            <div className="mt-2 space-y-1">
                              <p className="text-xs font-medium">${item.price.toLocaleString()}</p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                <span className="inline-block bg-gray-100 px-1.5 py-0.5 rounded text-[10px] text-gray-600 font-medium">
                                  H: {item.userHeight} {item.userUnit === MeasurementUnit.METRIC ? 'cm' : 'ft'}
                                </span>
                                <span className="inline-block bg-gray-100 px-1.5 py-0.5 rounded text-[10px] text-gray-600 font-medium">
                                  W: {item.userWeight} {item.userUnit === MeasurementUnit.METRIC ? 'kg' : 'lbs'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {items.length > 0 && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold uppercase">Subtotal</span>
                      <span className="text-sm font-bold">${items.reduce((acc, item) => acc + item.price, 0).toLocaleString()}</span>
                    </div>
                    <button 
                      onClick={handleCheckoutClick}
                      className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-gray-800 transition-colors"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1920px] mx-auto">
        {children}
      </main>

      <footer className="border-t border-gray-100 py-12 mt-20">
        <div className="max-w-[1920px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Undefined.Market</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The premier destination for archival fashion. Authenticity guaranteed.
              Connecting collectors worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
              <li><Link to="/shipping-returns" className="hover:text-black">Shipping & Returns</Link></li>
              <li><Link to="/authenticity" className="hover:text-black">Authenticity</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/terms" className="hover:text-black">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Newsletter</h4>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-1 border-b border-gray-300 py-2 text-sm outline-none focus:border-black" />
              <button className="ml-2 text-sm font-medium uppercase hover:text-gray-600">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto px-6 mt-12 text-xs text-gray-400 text-center md:text-left">
          © 2024 Undefined.Market. All rights reserved.
        </div>
      </footer>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowConfirmation(false)} />
          <div className="relative bg-white p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Leaving Undefined.Market</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              You will be redirected to WhatsApp to contact customer service and place your order.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Cancel
              </button>
              <button 
                onClick={confirmRedirect}
                className="flex-1 px-4 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};