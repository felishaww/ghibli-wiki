import './App.css';
import { useState } from 'react';
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";

export default function App(){
  const[movie, setMovie] = useState(null);
  return (
    <div>
      <h1>
        Studio Ghibli Movies
      </h1>
      <MovieList setter={setMovie}/>
      <MovieDetail movie={movie}/>
    </div>
  );

}
