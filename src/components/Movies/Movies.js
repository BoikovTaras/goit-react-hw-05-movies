import React from 'react';
import { useParams, Switch, Route } from 'react-router-dom';
import Search from '../Search/Search';
import MovieCard from '../MovieCard/MovieCard';

export default function Movies() {
  const { movieId } = useParams();

  return (
    <>
      <Switch>
        <Route exact path="/movies">
          <Search />
        </Route>
        <Route path="/movies/:movieId">{movieId && <MovieCard />}</Route>
      </Switch>
    </>
  );
}
