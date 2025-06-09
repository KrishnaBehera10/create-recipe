import { IoMdTime } from "react-icons/io";
import { MdRoomService } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function RecipeCard({
  description,
  id,
  image,
  ingredients,
  recipes,
  serving,
  time,
}) {
  const Navigate = useNavigate();
  function RecipeNavigate() {
    Navigate(`/recipe/details/${id}`);
  }
  return (
    <div
      className="bg-white text-black w-full h-[40vh] rounded overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={RecipeNavigate}
    >
      <img src={image} alt="" className="w-full h-[25vh] object-cover" />
      <div className="pl-3 pt-3">
        <p className="overflow-hidden whitespace-nowrap text-ellipsis text-2xl font-medium">
          {recipes.slice(0, 15)}...
        </p>
        <p className="overflow-hidden whitespace-nowrap text-clip font-medium">
          {description.slice(0, 10)}
        </p>
        <div className="flex items-center gap-x-2 mt-2 text-yellow-700">
          <p className="flex items-center gap-1 whitespace-nowrap ">
            <IoMdTime />
            <span className="font-medium text-sm">{time} mins</span>
          </p>
          <p className="flex items-center gap-1 whitespace-nowrap">
            <MdRoomService />
            <span className="font-medium text-sm">{serving} mins serving</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
