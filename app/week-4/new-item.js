"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button 
          onClick={decrement} 
          disabled={quantity === 1}
          className="bg-red-500 text-white px-3 py-1 rounded disabled:bg-gray-300"
        >
          -
        </button>
        
        <span className="text-xl font-bold">{quantity}</span>
        
        <button 
          onClick={increment} 
          disabled={quantity === 20}
          className="bg-blue-500 text-white px-3 py-1 rounded disabled:bg-gray-300"
        >
          +
        </button>
      </div>
      
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-10 px-4 py-2 rounded text-center">
          <span className="text-sm text-gray-600">Range: 1-20</span>
        </div>
      </div>
    </div>
  );
}