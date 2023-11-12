import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals", {
      method: "GET",
    });

    console.log("Response");
    console.log(response);

    if (!response.ok) {
      alert("Jest dupa");
    } else {
      const meals = await response.json();
      console.log(meals);
      setLoadedMeals(meals);
    }
  }
  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((el) => (
        <MealItem key={el.id} meal={el} />
      ))}
    </ul>
  );
}
