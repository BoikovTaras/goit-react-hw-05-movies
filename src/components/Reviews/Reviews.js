import React from 'react';
import { useState, useEffect } from 'react';
import * as movieApi from '../Api/movie-api';
import { useParams } from 'react-router-dom';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  const [page, setPage] = useState(1);
  const loadMore = () => setPage(page + 1);

  useEffect(() => {
    movieApi.fetchMovieReviews(movieId, page).then(setReviews);
  }, []);

  return (
    <>
      <ul className={s.list}>
        {reviews && reviews.results.length > 0 ? (
          reviews.results.map(review => (
            <li className={s.item} key={review.id}>
              <h2 className={s.name}>{review.author}</h2>
              <p className={s.coment}>{review.content}</p>
            </li>
          ))
        ) : (
          <h2>We don't have any reviews for this movies</h2>
        )}
      </ul>
      {reviews && reviews.total_pages > 1 ? (
        <button onClick={loadMore}>Next Page</button>
      ) : (
        <p></p>
      )}
    </>
  );
}
