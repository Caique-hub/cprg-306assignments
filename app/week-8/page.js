"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

function cleanItemName(name) {
  return name
    .split(",")[0]
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "");
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(item) {
    const cleaned = cleanItemName(item.name);
    setSelectedItemName(cleaned);
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="space-y-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
