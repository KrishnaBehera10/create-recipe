import { useParams } from "react-router";
import { UserecipeContext } from "../context/RecipesContext";
import { useForm } from "react-hook-form";
import { IoLogoJavascript, IoMdTime } from "react-icons/io";
import { MdRoomService } from "react-icons/md";
import { Slide, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";

function RecipeDetails() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const { data, setdata } = UserecipeContext();
  const filterRecipe = data.find((data) => data.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      recipes: filterRecipe?.recipes,
      time: filterRecipe?.time,
      serving: filterRecipe?.serving,
      description: filterRecipe?.description,
      image: filterRecipe?.image,
      ingredients: filterRecipe?.ingredients,
    },
  });

  function recipeHandle(recipe) {
    const index = data.findIndex((data) => data.id == id);
    const copy = [...data];
    copy[index] = { ...copy[index], ...recipe };
    localStorage.setItem("recipe", JSON.stringify(copy));
    setdata(copy);
    toast.success("Update recipe", {
      autoClose: 500,
      theme: "colored",
      transition: Slide,
    });
  }

  function remove() {
    const remove = data.filter((data) => data.id != id);
    setdata(remove);
    toast.success("Delete recipe", {
      autoClose: 500,
      theme: "colored",
      transition: Slide,
    });
    localStorage.setItem("recipe", JSON.stringify(remove));
    Navigate("/recipe");
  }

  const [fav, setfav] = useState(
    JSON.parse(localStorage.getItem("favourite")) || []
  );

  function favourite() {
    localStorage.setItem("favourite", JSON.stringify([...fav, filterRecipe]));
    setfav([...fav, filterRecipe]);
  }

  function unfavourite() {
    const remove = fav.filter((data) => data.id != filterRecipe?.id);
    setfav(remove);
    localStorage.setItem("favourite", JSON.stringify(remove));
  }

  return (
    <div
      className={`w-full min-h-full flex  ${
        filterRecipe ? " sm:justify-between" : "justify-start"
      } items-start gap-6 flex-wrap sm:flex-nowrap bg-zinc-900 p-3`}
    >
      {filterRecipe && (
        <div id="left" className="w-full min-h-[50vh] sm:w-1/2 overflow-hidden">
          <div className="w-full h-[30vh] sm:h-[40vh] relative">
            <img
              src={filterRecipe?.image}
              alt="recipe"
              className="w-full h-full object-cover rounded-2xl"
            />
            {fav.find((data) => data.id == filterRecipe?.id) ? (
              <GoHeartFill
                className="absolute text-red-500 top-5 right-5 text-2xl cursor-pointer"
                onClick={unfavourite}
              />
            ) : (
              <GoHeart
                className="absolute text-red-500 top-5 right-5 text-2xl cursor-pointer"
                onClick={favourite}
              />
            )}
          </div>
          <div>
            <p className="text-4xl mt-4 mb-2 overflow-hidden text-ellipsis">
              {filterRecipe?.recipes}
            </p>
            <p className="text-3xl my-2  overflow-hidden text-ellipsis">
              {filterRecipe?.ingredients}
            </p>
            <p className="text-sm  overflow-hidden text-ellipsis">
              {filterRecipe?.description}
            </p>
            <div className="flex items-center gap-x-2 mt-2 text-yellow-700">
              <p className="flex items-center gap-1 whitespace-nowrap ">
                <IoMdTime />
                <span className="font-medium text-sm">
                  {filterRecipe?.time} mins
                </span>
              </p>
              <p className="flex items-center gap-1 whitespace-nowrap">
                <MdRoomService />
                <span className="font-medium text-sm">
                  {filterRecipe?.serving} mins serving
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      <div id="right" className="sm:w-1/2">
        <h1 className="text-4xl text-blue-400 mb-5 p-5">Update Recipe</h1>
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
            <input
              type="submit"
              className="bg-green-950 py-2 px-5 rounded mr-5 mb-5 cursor-pointer"
              value=" Update Recipe"
            />

            <input
              className="bg-red-950 py-2 px-5 rounded cursor-pointer"
              onClick={remove}
              type="button"
              value="Remove Recipe"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecipeDetails;
