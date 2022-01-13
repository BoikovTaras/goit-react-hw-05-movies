import React from 'react';
import { useState, useEffect } from 'react';
import * as movieApi from '../Api/movie-api';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieApi.fetchMovieCredits(movieId).then(setCast);
  }, []);

  return (
    <ul className="list">
      {cast &&
        cast.cast.map(actor => (
          <li className={s.card} key={actor.id}>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            ></img>
            <h3 className={s.name}>{actor.original_name}</h3>
          </li>
        ))}
    </ul>
  );
}
