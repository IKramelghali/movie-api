import React from "react";

function MovieCard({ movie }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
      <img
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          Release Date: {movie.release_date}
        </p>
        <p className="text-gray-700 text-sm mb-2">
          {movie.overview.length > 100
            ? movie.overview.slice(0, 100) + "..."
            : movie.overview}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-yellow-500 font-semibold">
            ⭐ {movie.vote_average}
          </span>
          <span className="text-gray-500 text-sm">{movie.vote_count} votes</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
