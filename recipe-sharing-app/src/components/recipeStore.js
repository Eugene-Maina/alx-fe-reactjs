import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, { ...recipe, id: nanoid() }]
  })),
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  }))
}));