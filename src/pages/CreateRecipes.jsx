import { useForm } from "react-hook-form";
import { UserecipeContext } from "../context/RecipesContext";
import { Slide, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateRecipes() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data, setdata } = UserecipeContext();
  const Navigate = useNavigate();
  function recipeHandle(recipe) {
    recipe.id = crypto.randomUUID();
    setdata([...data, recipe]);
    toast.success("Recipe added", {
      autoClose: 500,
      theme: "colored",
      transition: Slide,
    });
    localStorage.setItem("recipe", JSON.stringify([...data, recipe]));
    Navigate("/recipe");
    reset();
  }
  return (
    <div className="w-full h-full flex items-start justify-between gap-6 flex-wrap sm:flex-nowrap">
      <div className="sm:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1635661988046-306631057df3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="recipe"
          className="w-full object-cover hidden sm:block"
        />
      </div>
      <div className="sm:w-1/2">
        <h1 className="text-4xl text-blue-400 mb-5">Create Recipe</h1>
        <form onSubmit={handleSubmit(recipeHandle)}>
          <div className="bg-gray-900 p-5 mb-5">
            <label htmlFor="recipename" className="text-sm font-bold">
              Recipe Name
            </label>
            <input
              {...register("recipes", { required: "Recipe name required!!" })}
              type="text"
              id="recipename"
              className="w-full border-gray-700 border p-2 my-2"
              placeholder="Recipe titles"
            />
            <p className="text-sm text-red-600">
              {errors.recipes ? errors.recipes.message : ""}
            </p>
            <label htmlFor="time" className="text-sm font-bold">
              Total time
            </label>
            <input
              {...register("time", { required: "Time required!!" })}
              type="number"
              id="time"
              className="w-full border-gray-700 border p-2 my-2"
              placeholder="minutes"
              min={0}
              max={10}
            />
            <p className="text-sm text-red-600">
              {errors.time ? errors.time.message : ""}
            </p>

            {/* //radio button */}
            <label htmlFor="serving" className="text-sm font-bold">
              Servings
            </label>
            <div className="flex gap-4 text-white flex-wrap">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="duration"
                  value="1-2"
                  {...register("serving", { required: "Serving required" })}
                />
                1–2min
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="duration"
                  value="3-4"
                  {...register("serving", { required: "Serving required" })}
                />
                3–4min
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="duration"
                  value="5-6"
                  {...register("serving", { required: "Serving required" })}
                />
                5–6min
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="duration"
                  value="7+"
                  {...register("serving", { required: "Serving required" })}
                />
                7+min
              </label>
            </div>
            <p className="text-sm text-red-600">
              {errors.serving ? errors.serving.message : ""}
            </p>

            <label htmlFor="description" className="text-sm font-bold">
              Description
            </label>
            <textarea
              {...register("description")}
              id="description"
              className="w-full border-gray-700 border p-2 my-2 h-[20vh] resize-none"
              placeholder="Recipe description"
            />

            <label htmlFor="url" className="text-sm font-bold">
              Image URL
            </label>
            <input
              {...register("image", { required: "Image required!!" })}
              type="url"
              id="url"
              className="w-full border-gray-700 border p-2 my-2"
              placeholder="Recipe image url"
            />
            <p className="text-sm text-red-600">
              {errors.image ? errors.image.message : ""}
            </p>
          </div>
          <div className="bg-gray-900 p-5">
            <label htmlFor="ingredients" className="text-sm font-bold">
              Ingredients
            </label>
            <input
              {...register("ingredients", {
                required: "ingredients required!!",
              })}
              type="text"
              id="ingredients"
              className="w-full border-gray-700 border p-2 my-2"
              placeholder="Recipe titles"
            />
            <button className="bg-green-950 py-2 px-5 rounded">
              Create Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipes;
