"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((q) => (q < 20 ? q + 1 : q));
  }

  function decrement() {
    setQuantity((q) => (q > 1 ? q - 1 : q));
  }

  return (
    <section className="flex items-center gap-4">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        -
      </button>

      <span className="text-xl font-semibold w-10 text-center">
        {quantity}
      </span>

      <button
        onClick={increment}
        disabled={quantity === 20}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        +
      </button>
    </section>
  );
}
