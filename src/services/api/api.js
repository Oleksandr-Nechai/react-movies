import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const KEY = 'b5edf42d0c828c3abea97e9ad1ce315b';

const BASE_PARAMS = {
  timeout: 5000,
  params: {
    language: 'en-US',
    api_key: KEY,
  },
  headers: {
    accept: 'application/json',
  },
};

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

export async function getMovies({
  action,
  movieId = null,
  controller = {},
  params = {},
}) {
  const searchParams = {
    ...BASE_PARAMS,
    params: { ...BASE_PARAMS.params, ...params },
    ...controller,
  };
  const { data } = await axios.get(
    `${BASE_URL}${searchEndpoint(action, movieId)}`,
    searchParams
  );
  return data;
}

function searchEndpoint(action, id) {
  switch (action) {
    case 'trending':
      return '/trending/movie/day';
    case 'search':
      return '/search/movie';
    case 'movieDetails':
      return `/movie/${id}`;
    case 'movieCredits':
      return `/movie/${id}/credits`;
    case 'movieReviews':
      return `/movie/${id}/reviews`;
    default:
      return;
  }
}
