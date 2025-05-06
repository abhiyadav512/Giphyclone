import { useContext, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import { Gifstate } from "../context/gif-context";
import GifSearch from "./gif-search";

const Header = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [categories, setCategories] = useState([]);

  const { gf, filter, setFilter, favorite } = Gifstate();

  const fetchGifCategories = async () => {
    try {
      const res = await gf.categories();
      setCategories(res.data);
      // console.log(`categories`, result.data);
    } catch (error) {
      console.error(`categories`, error);
    }

    // try {
    //     const res = await fetch("/categories.json");
    //     const { data } = await res.json();
    //     setCategories(data);
    // } catch (error) {
    //     console.error(`categories`, error);
    // }
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex justify-between items-center gap-4 mb-2">
        <div>
          <Link to={"/"} className="flex gap-2 items-center">
            <img src="/logo.svg" alt="Giphy logo" width={35} />
            <h1 className="font-bold text-4xl cursor-pointer">GIPHY</h1>
          </Link>
        </div>
        <div className="flex gap-2 items-center font-bold">
          {categories?.slice(0, 5).map((category) => {
            return (
              <Link
                className="px-4 py-1 transition ease-in-out hover:gradient border-b-4 hidden lg:block"
                key={category.name}
                to={`${category.name_encoded}`}
              >
                {category.name}
              </Link>
            );
          })}

          <button onClick={() => setShowCategory(!showCategory)}>
            <IoMdMore
              size={35}
              className={`py-0.5 transition ease-in-out hover:gradient ${
                showCategory ? "gradient" : ""
              } bg-gradient border-b-4 cursor-pointer hidden lg:block`}
            />
          </button>

          {favorite.length > 0 && (
            <div className="bg-gray-600 h-9 px-6 pt-1 rounded cursor-pointer">
              <Link to={"/favorite"}>Favorite</Link>
            </div>
          )}

          <div
            onClick={() => setShowCategory(!showCategory)}
            className="relative w-9 h-9"
          >
            <FiX
              size={35}
              className={`block lg:hidden absolute  duration-300 ${
                showCategory ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
              }`}
            />
            <HiBars3BottomRight
              size={35}
              className={`block lg:hidden absolute  duration-300 ${
                showCategory ? "opacity-0 -rotate-180" : "opacity-100 rotate-0"
              }`}
            />
          </div>
          {showCategory && (
            <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20 -mt-2">
              <span className="text-2xl font-extrabold">Categories</span>
              <hr className='bg-gray-100 opacity-50 my-5"' />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {categories?.map((category) => {
                  return (
                    <Link
                      onClick={() => setShowCategory(false)}
                      className="transition ease-in-out hover:font-bold font-semibold  "
                      key={category.name}
                      to={`/${category.name_encoded}`}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <GifSearch />
    </nav>
  );
};

export default Header;
