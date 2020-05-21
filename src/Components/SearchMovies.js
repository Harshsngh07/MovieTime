import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies(props) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1&include_adult=false`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form className="form">
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="ex. Harry Potter"
          value={query}
          onChange={handleChange}
        />
        <button className="button" type="button" onClick={searchMovies}>
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
