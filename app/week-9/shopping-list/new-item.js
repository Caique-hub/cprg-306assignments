"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    setQuantity((q) => (q < 20 ? q + 1 : q));
  }

  function decrement() {
    setQuantity((q) => (q > 1 ? q - 1 : q));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: Math.random().toString(36).slice(2),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    // reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label className="block mb-1 font-medium">Item Name</label>
        <input
          className="border rounded p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. apples 🍎"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Quantity</label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            -
          </button>

          <span className="w-10 text-center font-semibold">{quantity}</span>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          className="border rounded p-2 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">produce</option>
          <option value="dairy">dairy</option>
          <option value="bakery">bakery</option>
          <option value="meat">meat</option>
          <option value="canned goods">canned goods</option>
          <option value="dry goods">dry goods</option>
          <option value="household">household</option>
        </select>
      </div>

      <button
        type="submit"
        className="px-4 py-2 border rounded"
        disabled={name.trim() === ""}
      >
        Add Item
      </button>
    </form>
  );
}
