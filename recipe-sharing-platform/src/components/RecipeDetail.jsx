import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipe(data[id]))
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <p className="text-center mt-10 text-gray-600 text-lg">Loading recipe...</p>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back Link */}
      <Link
        to="/"
        className="text-blue-600 hover:underline font-medium mb-6 inline-block"
      >
        &larr; Back to Home
      </Link>

      {/* Recipe Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
        {recipe.title}
      </h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-h-96 object-cover rounded-2xl shadow-md mb-8"
      />

      {/* Recipe Description */}
      {recipe.description && (
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          {recipe.description}
        </p>
      )}

      {/* Ingredients Section */}
      {recipe.ingredients && (
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions Section */}
      {recipe.instructions && (
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
