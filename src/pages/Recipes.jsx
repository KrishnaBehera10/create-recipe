import { UserecipeContext } from "../context/RecipesContext";
import RecipeCard from "./RecipeCard";

function Recipes() {
  const { data } = UserecipeContext();
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {data && data.length != 0 ? (
        data.map((item) => {
          return <RecipeCard key={item.id} {...item} />;
        })
      ) : (
        <p className="text-2xl text-red-400 whitespace-nowrap">
          Recipe not found !!
        </p>
      )}
    </div>
  );
}

export default Recipes;
