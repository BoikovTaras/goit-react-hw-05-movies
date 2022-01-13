import React from 'react';
import { useState, useEffect } from 'react';
import * as movieApi from '../Api/movie-api';
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import s from './MovieCard.module.css';

export default function MovieCard() {
  const [info, setInfo] = useState(null);
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    movieApi.fetchMovieDetails(movieId).then(setInfo);
  }, [movieId]);

  const prevLocation = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {info && (
        <div className="container">
          <button className={s.button} type="button" onClick={prevLocation}>
            <span>Back</span>
          </button>
          <div className={s.card}>
            <img
              src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
              alt={`${info.title}`}
            />
            <div className={s.info}>
              <h2 className={s.title}>{`${info.title}`}</h2>
              <h3 className={s.diteils}>Overview</h3>
              <p>{`${info.overview}`}</p>
              <h3 className={s.diteils}>Genres</h3>
              <ul className={s.list}>
                {info.genres.map(genre => (
                  <li className={s.item} key={genre.id}>{`${genre.name}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={s.additional}>
            <h3 className={s.diteils}>Additional infomation</h3>
            <ul className={s.list}>
              <li className={s.item}>
                <Link className={s.link} to={`${url}/cast`}>
                  <p>Cast</p>
                </Link>
              </li>
              <li className={s.item}>
                <Link className={s.link} to={`${url}/reviews`}>
                  <p>Reviews</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/movies/:movieId/cast">
                <Cast />
              </Route>
              <Route exact path="/movies/:movieId/reviews">
                <Reviews />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </>
  );
}
