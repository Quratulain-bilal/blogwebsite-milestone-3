"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DrinkDetail = () => {
  const { idDrink } = useParams(); // Use useParams for dynamic route segments
  const [drink, setDrink] = useState<any>(null);

  useEffect(() => {
    if (idDrink) {
      const fetchDrinkDetail = async () => {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        );
        const data = await res.json();
        setDrink(data.drinks[0]);
      };

      fetchDrinkDetail();
    }
  }, [idDrink]);

  if (!drink) {
    return (
      <div className="container mx-auto p-4">
        <p>Loading drink details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{drink.strDrink}</h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5">
            {Object.keys(drink)
              .filter((key) => key.startsWith("strIngredient") && drink[key])
              .map((ingredientKey, index) => (
                <li key={index}>{drink[ingredientKey]}</li>
              ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Instructions</h2>
          <p className="leading-relaxed">{drink.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;
