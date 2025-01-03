// lib/api.ts
export const fetchFoodItems = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await res.json();
  return data.meals;
};

export const fetchDrinkItems = async () => {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  );
  const data = await res.json();
  return data.drinks;
};
