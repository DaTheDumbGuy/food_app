import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "../ItemList/ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "6830e482803e448280963ef0405568ee";
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪<strong>Serves: {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🥩Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐷 Vegan" : ""}</strong>
          </span>
        </div>
        <div className={styles.pricePerServings}>
          ${" "}
          <span>
            <strong>{food.pricePerServing} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ul>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
