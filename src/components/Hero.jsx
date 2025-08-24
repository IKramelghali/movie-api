import React, {  useContext } from "react";
import  ImgHero  from "../images/Background.png";
import { MovieContext } from "../data/MovieContext";

function Hero() {
    const { search, setSearch } = useContext(MovieContext);

  return (
   <div className="h-[100vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{  backgroundImage: `url(${ImgHero})`,}}>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
        Find Your Favorite <span className="text-red-500">Movies</span> 🎬
      </h1>
      <p className="text-lg sm:text-xl text-gray-200 mb-6">
        Search through thousands of movies and discover something new.
      </p>

      <div className="flex">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-72 sm:w-96 px-4 py-3 rounded-l-lg text-red-50 bg-zinc-950 focus:outline-none"
        />
        <button className="bg-zinc-950 px-5 py-3 rounded-r-lg hover:bg-red-700 transition text-white">
          🔍
        </button>
      </div>
    </div>
  )
}

export default Hero