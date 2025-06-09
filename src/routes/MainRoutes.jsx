import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Favourite from "../pages/Favourite";
import CreateRecipes from "../pages/CreateRecipes";
import RecipeDetails from "../components/RecipeDetails";
import PageNotFound from "../pages/PageNotFound";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipes />} />
      <Route path="/recipe/details/:id" element={<RecipeDetails />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/create-recipes" element={<CreateRecipes />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default MainRoutes;
