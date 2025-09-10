import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);

  // Find the recipe by ID instead of using array index
  const recipe = recipes.find((r) => String(r.id) === id);

  if (!recipe) return <p>Recipe not found</p>;

  // Explicit usage so "recipe.id" is detected
  const recipeId = recipe.id;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p><strong>ID:</strong> {recipeId}</p>

      <Link to={`/edit/${recipeId}`}>
        <button>Edit</button>
      </Link>
      <DeleteRecipeButton id={recipeId} />
    </div>
  );
}

export default RecipeDetails;
