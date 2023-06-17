import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const KEY = 'b5edf42d0c828c3abea97e9ad1ce315b';

const BASE_PARAMS = {
  params: {
    language: 'en-US',
    api_key: KEY,
  },
  headers: {
    accept: 'application/json',
  },
};

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300/';

export async function getMovies(action, id = null, params = {}) {
  const searchParams = structuredClone(BASE_PARAMS);
  searchParams.params = {
    ...searchParams.params,
    ...params,
  };
  const { data } = await axios.get(
    `${BASE_URL}${searchEndpoint(action, id)}`,
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
