import React from "react";

const BestRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Italian Bistro",
      description: "Experience authentic Italian cuisine with a modern twist.",
      image:
        "https://img.freepik.com/free-photo/restaurant-corridor-with-small-two-people-tables_140725-4928.jpg?t=st=1735918730~exp=1735922330~hmac=78455f96b2dffec1ccc4a6dd9b5082300713ba8d7e9de33e69277f32863652ad&w=360",
    },
    {
      id: 2,
      name: "Sushi Haven",
      description:
        "Fresh sushi and traditional Japanese dishes in a cozy setting.",
      image:
        "https://img.freepik.com/premium-photo/restaurant-interior-shot_1385-3810.jpg?w=360",
    },
    {
      id: 3,
      name: "Steakhouse Deluxe",
      description:
        "Premium cuts of meat grilled to perfection, served with elegance.",
      image:
        "https://img.freepik.com/premium-photo/traditional-georgian-cuisine-food-khinkali-chahokhbili-phali-lobio-local-sauces_135427-5785.jpg?w=360",
    },
  ];

  return (
    <section className="my-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">
        Best Restaurants to Visit
      </h2>
      <p className="text-lg text-center mb-6">
        Discover our top picks for dining experiences that will tantalize your
        taste buds and leave you wanting more!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="relative border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{restaurant.name}</h3>
              <p className="mt-2 text-gray-600">{restaurant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestRestaurants;
