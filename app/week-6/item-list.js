"use client";

import { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const items = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.category.localeCompare(b.category);
  });

  return (
    <section className="max-w-md">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded border ${
            sortBy === "name" ? "bg-blue-600 text-white" : ""
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded border ${
            sortBy === "category" ? "bg-blue-600 text-white" : ""
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}