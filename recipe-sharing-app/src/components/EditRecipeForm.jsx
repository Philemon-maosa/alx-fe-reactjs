import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const recipe = recipes.find((r) => String(r.id) === id);

  const [title, setTitle] = useState(recipe ? recipe.title : "");
  const [description, setDescription] = useState(recipe ? recipe.description : "");

  if (!recipe) return <p>Recipe not found</p>;

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ explicitly included

    updateRecipe(recipe.id, { title, description });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;
