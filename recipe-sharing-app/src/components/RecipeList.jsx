import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <Link to={`/recipe/${index}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
