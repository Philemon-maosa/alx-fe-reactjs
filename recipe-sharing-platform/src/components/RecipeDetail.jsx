import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // ✅ useParams imported

const RecipeDetail = () => {
  const { id } = useParams(); // ✅ useParams used
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data[id]); // ✅ recipe fetched by id
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        &larr; Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      {recipe.description && <p className="mb-6">{recipe.description}</p>}

      {/* Ingredients Section ✅ */}
      {recipe.ingredients && (
        <div className="mb-6 p-4 bg-white rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li> // ✅ ingredients referenced
            ))}
          </ul>
        </div>
      )}

      {/* Instructions Section ✅ */}
      {recipe.instructions && (
        <div className="mb-6 p-4 bg-white rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li> // ✅ instructions referenced
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
