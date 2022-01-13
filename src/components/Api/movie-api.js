const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '17eedf810bb0a5ea8359fbd3e80679ce';

async function fetchMovieError(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchMovieTrending() {
  return fetchMovieError(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function fetchMovieReqwest(query, page) {
  return fetchMovieError(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`,
  );
}

export function fetchMovieDetails(id) {
  return fetchMovieError(
    `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`,
  );
}

export function fetchMovieCredits(id) {
  return fetchMovieError(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`,
  );
}

export function fetchMovieReviews(id, page) {
  return fetchMovieError(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=${page}`,
  );
}
