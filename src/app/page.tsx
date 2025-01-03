"use client";
import { useEffect, useState } from "react";
import { fetchFoodItems, fetchDrinkItems } from "../lib/api";
import Link from "next/link";
import {
  FaUtensils,
  FaGlassCheers,
  FaUtensilSpoon,
  
  FaPhone,

} from "react-icons/fa";
import BestRestaurants from "../componenet/Bestresturants"
import Contact from "../componenet/Contact"
import Footer from "@/componenet/Footer";
import Newslister from "@/componenet/Newslister";


const Home = () => {
  const [foodItems, setFoodItems] = useState<any[]>([]);
  const [drinkItems, setDrinkItems] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    const getFoodItems = async () => {
      const items = await fetchFoodItems();
      setFoodItems(items);
    };

    const getDrinkItems = async () => {
      const items = await fetchDrinkItems();
      setDrinkItems(items);
    };

    getFoodItems();
    getDrinkItems();
  }, []);

  const renderItems = () => {
    if (activeCategory === "food") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((item) => (
            <div
              key={item.idMeal}
              className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href={`/food/${item.idMeal}`}>
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.strMeal}</h3>
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Read More
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      );
    } else if (activeCategory === "drinks") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drinkItems.map((item) => (
            <div
              key={item.idDrink}
              className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href={`/drinks/${item.idDrink}`}>
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.strDrink}</h3>
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Read More
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      );
    } else if (activeCategory === "restaurants") {
      return (
        <div className="text-center">
          <p className="text-lg">
            Coming Soon! Stay tuned for amazing restaurant recommendations.
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="container mx-auto p-4 min-h-screen">
        <header className="relative text-white p-12 rounded-lg shadow-md text-center h-96">
          <img
            src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-03.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover  rounded-lg"
          />
          <div className="relative z-10">
            <h1 className="text-5xl font-bold">Welcome to Annablog</h1>
            <p className="mt-4 text-xl">
              Explore delicious food, refreshing drinks, and amazing
              restaurants!
            </p>
          </div>
        </header>

        <nav className="bg-gray-800 text-white p-2 mt-4 rounded-lg shadow-md">
          <ul className="flex justify-center space-x-4">
            <li className="flex items-center">
              <FaUtensils  />
              <Link href="#food" className="hover:underline">
                Food
              </Link>
            </li>
            <li className="flex items-center">
              <FaGlassCheers />
              <Link href="#drinks" className="hover:underline">
                Drinks
              </Link>
            </li>
            <li className="flex items-center">
              <FaUtensilSpoon  />
              <Link href="/Bestaurants" className="hover:underline">
                Restaurants
              </Link>
            </li>
            <li className="flex items-center">
             
            </li>
            <li className="flex items-center">
              <FaPhone />
              <Link href="/Contact" className="hover:underline">
                Contact
              </Link>
            </li>
            
            
          </ul>
        </nav>

        <main className="p-4">
          <section className="my-8">
            <h2 className="text-3xl font-bold text-center mb-4">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveCategory("food")}
              >
                <img
                  src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?t=st=1735917451~exp=1735921051~hmac=46ce341061f4542f818a13d054dc4681dbd2e07271e90b57aa88fdb2c8c598d2&w=900"
                  alt="Food"
                  className="w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold text-center p-4">Food</h3>
              </div>
              <div
                className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveCategory("drinks")}
              >
                <img
                  src="https://img.freepik.com/free-photo/side-view-invigorating-variety-soft-drinks-with-slice-lemon-strawberries-table_141793-3917.jpg?t=st=1735917375~exp=1735920975~hmac=ad89b86c105e26c25be941911910454e8c9614f26373c48a8d44643b86e7fba2&w=360"
                  alt="Drinks"
                  className="w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold text-center p-4">
                  Drinks
                </h3>
              </div>
              <div
                className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveCategory("restaurants")}
              >
                <img
                  src="https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?t=st=1735917295~exp=1735920895~hmac=2249043d2f8fa3e43de0f289d31a25c600c3da4d9426d5864ecb5a41e5012f90&w=740"
                  alt="Restaurants"
                  className="w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold text-center p-4">
                  Restaurants
                </h3>
              </div>
            </div>
          </section>

          <section className="my-8">{renderItems()}</section>
        </main>
      </div>
      <BestRestaurants />

      <Contact />
      <Newslister/>
      <Footer/>
      
      
    </>
  );
};

export default Home;
