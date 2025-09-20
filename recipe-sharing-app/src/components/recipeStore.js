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

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [], // Initially empty, or set to recipes if needed
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      // Automatically update filteredRecipes when searchTerm changes
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title?.toLowerCase().includes(term.toLowerCase())
      ),
    })),
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      // Automatically update filteredRecipes when recipes change
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title?.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title?.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));