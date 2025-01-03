
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Comment from "../../../componenet/Comment"


const initialComments = [
  {
    body: "This is a great blog post! Thanks for sharing.",
    email: "user@example.com",
    id: 1,
    name: "John Doe",
    postId: 101,
  },
  {
    body: "I found this post really helpful. Keep it up!",
    email: "jane@example.com",
    id: 2,
    name: "Jane Doe",
    postId: 101,
  },
];


const FoodDetail = () => {
  const { id } = useParams(); // Get the id directly from useParams
  const [foodItem, setFoodItem] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchFoodDetail = async () => {
        try {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          const data = await res.json();
          setFoodItem(data.meals[0]);
        } catch (error) {
          console.error("Error fetching food details:", error);
        }
      };

      fetchFoodDetail();
    }
  }, [id]);

  if (!foodItem) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Food Details Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {foodItem.strMeal}
        </h1>
        <img
          src={foodItem.strMealThumb}
          alt={foodItem.strMeal}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Ingredients:
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {Object.keys(foodItem)
              .filter((key) => key.startsWith("strIngredient") && foodItem[key])
              .map((key, index) => (
                <li key={index}>{foodItem[key]}</li>
              ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Instructions:
          </h2>
          <p className="text-gray-600 leading-7">{foodItem.strInstructions}</p>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-12">
        <Comment />
      </div>
    </div>
  );
};

export default FoodDetail;
