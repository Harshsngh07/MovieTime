import React from "react";

export default function SearchMovies() {
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
        />
        <button className="button" type="button">
          Search
        </button>
      </form>
    </div>
  );
}
