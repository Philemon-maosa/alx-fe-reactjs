import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes[id];

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
      <DeleteRecipeButton id={id} />
    </div>
  );
}

export default RecipeDetails;
