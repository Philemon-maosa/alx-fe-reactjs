import React, { useState } from "react";
import { getRandomDish } from "../services/api";

const Suggestions = () => {
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSuggestion = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getRandomDish();
      setDish(result);
    } catch (err) {
      setError("Could not fetch suggestion.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>Get a Suggestion</h2>

      <button onClick={fetchSuggestion} disabled={loading}>
        {loading ? "Thinking..." : "Suggest a Dish"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {dish && (
        <div style={{ marginTop: 16, border: "1px solid #ddd", padding: 12 }}>
          <h3>{dish.name}</h3>
          {dish.category && <p>Category: {dish.category}</p>}
          {dish.ingredients && (
            <>
              <h4>Ingredients</h4>
              <p>{dish.ingredients}</p>
            </>
          )}
        </div>
      )}

      {!dish && !loading && <p style={{ marginTop: 12 }}>Click the button to get a suggestion.</p>}
    </section>
  );
};

export default Suggestions;
