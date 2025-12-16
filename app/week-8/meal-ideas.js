"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();
  return data.meals ? data.meals : [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealsFromApi = await fetchMealIdeas(ingredient);
    setMeals(mealsFromApi);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <section className="max-w-md">
      <h2 className="text-xl font-bold mb-3">
        Meal Ideas {ingredient ? `for ${ingredient}` : ""}
      </h2>

      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="border rounded p-2">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </section>
  );
}
