import React, {  useState,useContext } from "react";
import MovieCard from "./MovieCard";
import ReactPaginate from "react-paginate";
import { MovieContext } from "../data/MovieContext";


function MovieList() {
  const { movies, search } = useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of movies per page
  console.log(search);
  
  const displayedMovies = search
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    : movies;

  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const currentMovies = displayedMovies.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(displayedMovies.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };


  if (currentMovies.length === 0) {
    return <p className="text-center mt-6">No movies found 😢</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Popular Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="flex gap-2"
          pageClassName="px-3 py-1 border rounded hover:bg-red-500 hover:text-white cursor-pointer"
          activeClassName="bg-red-500 text-white"
          previousClassName="px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer"
          nextClassName="px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer"
          breakClassName="px-3 py-1"
        />
      </div>
    </div>
  );
}

export default MovieList;
