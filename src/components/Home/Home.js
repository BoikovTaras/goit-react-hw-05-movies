import { useState, useEffect } from 'react';
import * as movieApi from '../Api/movie-api';
import MovieList from '../MovieList/MovieList';

export default function Home() {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    movieApi.fetchMovieTrending().then(setMovie);
  }, []);

  return (
    <div className="container">
      <ul className="list">
        {movie && movie.results.map(result => <MovieList info={result} />)}
      </ul>
    </div>
  );
}
