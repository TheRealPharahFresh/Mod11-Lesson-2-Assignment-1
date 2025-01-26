import React, { useState } from 'react';

const MovieList = () => {
  const [showMovieList, setShowMovieList] = useState(false);

  const [movies, setMovies] = useState([
    { name: 'Training Day', details: 'A rookie gets placed with a dirty undercover cop', showDetails: false },
    { name: 'Gladiator 2', details: 'The Sequel to Gladiator one', showDetails: false },
    { name: 'Fence', details: 'A movie about family sacrifice and pain', showDetails: false },
  ]);

  const toggleMovieList = () => {
    setShowMovieList(!showMovieList);
  };

  const toggleDetails = (index) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie, i) =>
        i === index ? { ...movie, showDetails: !movie.showDetails } : movie
      )
    );
  };

  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div>
     
      <button onClick={toggleMovieList}>
        {showMovieList ? 'Hide Movie List' : 'Show Movie List'}
      </button>

      {showMovieList && (
        <div>
          <h1>Movie List</h1>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <p>{movie.name}</p>
                <button onClick={() => toggleDetails(index)}>
                  {movie.showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                {movie.showDetails && <p>{movie.details}</p>}
                <button onClick={() => removeMovie(index)}>Remove Movie</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieList;
