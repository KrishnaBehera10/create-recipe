import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const Recipes = createContext(null);
function RecipesContext({ children }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipe")) || []);
  }, []);
  return (
    <Recipes.Provider value={{ data, setdata }}>{children}</Recipes.Provider>
  );
}

export default RecipesContext;
export function UserecipeContext() {
  return useContext(Recipes);
}
