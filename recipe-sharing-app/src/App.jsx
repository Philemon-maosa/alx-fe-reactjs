import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar"; // ⬅️ import the SearchBar

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        {/* Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
        </nav>

        {/* Search bar should appear above RecipeList (only on Home page) */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />   {/* ⬅️ prominently displayed */}
                <RecipeList />
              </>
            }
          />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
