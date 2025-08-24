// MovieContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export function MovieProvider({children}) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(function () {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=c82ab0405fb981cfd52454edfc40eb87")
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <MovieContext.Provider value={{ movies, search, setSearch }}>
      {children}
    </MovieContext.Provider>
  );
}
