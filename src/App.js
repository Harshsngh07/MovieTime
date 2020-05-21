import React from "react";
import "./App.css";
import Movie from "./assets/movie.png";
import SearchMovies from "./Components/SearchMovies";

function App() {
  return (
    <div className="container">
      <img className="logo" src={Movie} alt="movieTime" />
      <h1 className="title">MovieTime</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
