"use client";

import { useState } from "react";

export default function NewItem() {
  // State variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const item = {
      name,
      quantity,
      category
    };
    
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    
    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add New Item</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Item Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded px-2 py-1"
            placeholder="Enter item name"
          />
        </div>

        <div>
          <label className="block mb-1">Quantity:</label>
          <div className="flex items-center space-x-2">
            <button 
              type="button"
              onClick={decrement} 
              disabled={quantity === 1}
              className="bg-red-500 text-white px-2 py-1 rounded disabled:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button 
              type="button"
              onClick={increment} 
              disabled={quantity === 20}
              className="bg-blue-500 text-white px-2 py-1 rounded disabled:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-1">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-2 py-1"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}