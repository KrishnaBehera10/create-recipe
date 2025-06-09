import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Slide, ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import RecipesContext from "./context/RecipesContext.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RecipesContext>
    <BrowserRouter basename="/create-recipe">
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipesContext>
);
