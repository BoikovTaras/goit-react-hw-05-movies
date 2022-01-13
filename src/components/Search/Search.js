import React from 'react';
import { useState, useEffect } from 'react';
import * as movieApi from '../Api/movie-api';
import { useHistory, useLocation } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import s from './Search.module.css';

export default function Search() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [reqwest, setReqwest] = useState(null);
  const [page, setPage] = useState(1);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setResult(sortOrder);
  }, []);

  useEffect(() => {
    result && movieApi.fetchMovieReqwest(result, page).then(setReqwest);
  }, [result, page]);

  const searchInput = e => {
    setQuery([e.target.value.toLowerCase()]);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const sortOrder = new URLSearchParams(location.search).get('query');

  const searchButton = event => {
    event.preventDefault();
    if (query === '') {
      alert('Enter your search term');
      return;
    }
    setResult(query);
    setQuery('');
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <div className={s.box}>
        <form className={s.form} onSubmit={searchButton}>
          <input
            className={s.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search movies"
            value={query}
            onInput={searchInput}
          />
          <button type="submit" className={s.search}></button>
        </form>
      </div>
      <div className="container">
        <ul className="list">
          {reqwest &&
            reqwest.results.map(result => <MovieList info={result} />)}
        </ul>
        {reqwest && reqwest.total_pages > 1 ? (
          <button type="button" className={s.button} onClick={nextPage}>
            <span>Next page</span>
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
