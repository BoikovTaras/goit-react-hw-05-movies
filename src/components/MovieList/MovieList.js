import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';
export default function MovieList({ info }) {
  const location = useLocation();

  return (
    <li className={s.card} key={info.id}>
      <Link
        to={{
          pathname: `/movies/${info.id}`,
          state: { from: location },
        }}
        id={info.id}
        className={s.link}
      >
        <img
          className={s.image}
          src={`https://image.tmdb.org/t/p/w200${info.poster_path}`}
          alt={info.original_title}
        />
        <h3 className={s.name}>{info.original_title}</h3>
      </Link>
    </li>
  );
}
