import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-[3/4] overflow-hidden bg-gray-50 relative mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
          {product.size}
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{product.designer}</h3>
        <p className="text-sm text-gray-500 truncate">{product.name}</p>
        <p className="text-sm font-medium text-gray-900 mt-1">${product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
};