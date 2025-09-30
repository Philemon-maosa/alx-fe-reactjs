import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the recipe object
    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"), // split by new line
      instructions: instructions.split("\n"), // split by new line
    };

    console.log("New Recipe:", newRecipe);

    // Clear the form after submission
    setTitle("");
    setIngredients("");
    setInstructions("");

    // TODO: Send the recipe to your backend or update state
    alert("Recipe submitted! Check console for output.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Example:\n200g spaghetti\n100g minced beef\n1 onion"
            required
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="instructions">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Example:\nCook spaghetti\nSauté onion\nAdd beef"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
