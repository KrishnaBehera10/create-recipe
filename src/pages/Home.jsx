import buger from "../asset/burger.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/create-recipes");
  }
  return (
    <div className="min-w-full main-h-full flex gap-5 justify-between items-center flex-wrap-reverse sm:flex-nowrap">
      <div>
        <h1 className="text-6xl font-bold mb-10 md:w-1/2">
          Turkey Burger with sweet potato fries
        </h1>
        <p className="text-md mb-10">
          Would you rather cook for a dinner party or be served? Comment below!
        </p>
        <button
          className="bg-zinc-800 px-5 py-2 cursor-pointer rounded hover:bg-green-950"
          onClick={handleNavigate}
        >
          Create recipes
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={buger}
          alt="recipe"
          className="w-1/2 md:w-[50vw]  h-auto object-contain "
        />
      </div>
    </div>
  );
}

export default Home;
