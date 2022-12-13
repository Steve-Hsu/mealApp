import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
function FavoritesScreen() {
  const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id))
  return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;
