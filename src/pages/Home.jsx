import React from 'react';
import Hero from "../components/Hero";
import MovieList from '../components/MovieList';
import { MovieProvider } from "../data/MovieContext";

function Home() {
  return (
    <MovieProvider>
      <Hero/>
      <MovieList/>
    </MovieProvider>

  )
}

export default Home