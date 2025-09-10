import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Update an existing recipe by index
  updateRecipe: (index, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes];
      updatedRecipes[index] = updatedRecipe;
      return { recipes: updatedRecipes };
    }),

  // Delete a recipe by index
  deleteRecipe: (index) =>
    set((state) => ({
      recipes: state.recipes.filter((_, i) => i !== index),
    })),

  // Initialize recipe list
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
