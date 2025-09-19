import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Recipe Sharing App</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/add-recipe" style={{ marginRight: "10px" }}>Add Recipe</Link>
          <Link to="/recipes/1">Recipe Details (ID: 1)</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;