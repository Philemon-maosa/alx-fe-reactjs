import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Must import Link

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        🍲 Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>

              {/* ✅ Link used here */}
              <Link
                to={`/recipe/${index}`}
                className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
