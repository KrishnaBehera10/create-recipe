import { NavLink, Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { RiCreativeCommonsSaLine, RiMenuLine } from "react-icons/ri";
import { useEffect, useState } from "react";

function Nav() {
  const [open, setopen] = useState(false);

  useEffect(() => {
    function sideBar() {
      if (window.innerWidth > 640) {
        setopen(false);
      }
    }
    window.addEventListener("resize", sideBar);
    return () => window.removeEventListener("resize", sideBar);
  }, []);
  return (
    <div className="flex justify-between items-center relative pb-10 ">
      <Link to="/" className="text-4xl">
        Cook <span className="text-3xl">team</span>
      </Link>
      <button onClick={() => setopen(!open)} className="sm:hidden">
        {open ? (
          <RxCross1 className="text-2xl" />
        ) : (
          <RiMenuLine className="text-2xl" />
        )}
      </button>
      <nav className="hidden sm:flex items-center gap-x-5">
        <NavLink
          to="/"
          className={(obj) => (obj.isActive ? "text-red-600" : "")}
        >
          Home
        </NavLink>
        {/* <NavLink
          to="/about"
          className={(obj) => (obj.isActive ? "text-red-600" : "")}
        >
          About
        </NavLink> */}
        <NavLink
          to="/recipe"
          className={(obj) => (obj.isActive ? "text-red-600" : "")}
        >
          Recipe
        </NavLink>
        <NavLink
          to="/favourite"
          className={(obj) => (obj.isActive ? "text-red-600" : "")}
        >
          Favourite
        </NavLink>
        <NavLink
          to="/create-recipes"
          className={(obj) =>
            obj.isActive
              ? "bg-zinc-800 px-5 py-2 rounded text-red-600 whitespace-nowrap"
              : ""
          }
        >
          Create Recipes
        </NavLink>
      </nav>

      {open && (
        <nav className="fixed top-0 left-0 flex flex-col gap-y-5 bg-gray-900 font-medium py-10 px-2 h-screen w-[70vw] z-10">
          <NavLink
            to="/"
            onClick={() => setopen(false)}
            className={(obj) => (obj.isActive ? "text-red-600" : "")}
          >
            Home
          </NavLink>
          {/* <NavLink
            to="/about"
            onClick={() => setopen(false)}
            className={(obj) => (obj.isActive ? "text-red-600" : "")}
          >
            About
          </NavLink> */}
          <NavLink
            to="/recipe"
            onClick={() => setopen(false)}
            className={(obj) => (obj.isActive ? "text-red-600" : "")}
          >
            Recipe
          </NavLink>
          <NavLink
            to="/favourite"
            onClick={() => setopen(false)}
            className={(obj) => (obj.isActive ? "text-red-600" : "")}
          >
            Favourite
          </NavLink>
          <NavLink
            to="/create-recipes"
            onClick={() => setopen(false)}
            className={(obj) =>
              obj.isActive ? "bg-zinc-800  p-2 rounded text-red-600 " : ""
            }
          >
            Create Recipes
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default Nav;
