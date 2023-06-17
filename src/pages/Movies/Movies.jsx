import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovies } from 'services/api';
import {
  findMovies,
  validationRequest,
  showLoading,
  loadingRemove,
} from 'services/notifications';

import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';
import BadRequest from 'components/BadRequest';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listMovies, setListMovies] = useState(null);
  const [error, setError] = useState('');

  const onSubmitForm = name => {
    setSearchParams({ movie: name });
  };

  useEffect(() => {
    const movieQuery = searchParams.get('movie');

    if (!movieQuery) {
      setListMovies(null);
      return;
    }

    async function fetchData() {
      try {
        showLoading();
        const { results } = await getMovies('search', null, {
          query: movieQuery,
        });
        if (!results.length) {
          setError('');
          validationRequest();
          setListMovies([]);
          return;
        }

        setListMovies(results);
        findMovies(movieQuery);
      } catch ({ message }) {
        setError(message);
        validationRequest(message);
        setListMovies([]);
      } finally {
        loadingRemove();
      }
    }
    fetchData();
  }, [searchParams]);

  return (
    <>
      <Searchbar onSubmitForm={onSubmitForm} />
      {listMovies?.length > 0 && <MoviesList movies={listMovies} />}
      {listMovies?.length === 0 && <BadRequest error={error} />}
    </>
  );
}

export default Movies;
