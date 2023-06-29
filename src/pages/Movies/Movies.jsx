import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

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
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const onSubmitForm = name => {
    setSearchParams({ movie: name });
  };

  useEffect(() => {
    const movieQuery = searchParams.get('movie');

    if (!movieQuery) {
      setListMovies(null);
      return;
    }

    const controller = new AbortController();

    async function fetchData() {
      try {
        showLoading();
        const { results } = await getMovies({
          action: 'search',
          params: { query: movieQuery },
          controller: { signal: controller.signal },
        });

        if (!results.length) {
          setError(null);
          validationRequest();
          setListMovies([]);
          return;
        }

        setListMovies(results);
        setName(movieQuery);
        findMovies(movieQuery);
      } catch (e) {
        if (axios.isCancel(e)) {
          return;
        }
        setError(e.message);
        validationRequest(e.message);
        setListMovies([]);
      } finally {
        loadingRemove();
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [searchParams]);

  return (
    <>
      <Searchbar onSubmitForm={onSubmitForm} />
      {listMovies?.length > 0 && (
        <MoviesList
          movies={listMovies}
          name={`to the ${name} movies`}
        />
      )}
      {listMovies?.length === 0 && <BadRequest error={error} />}
    </>
  );
}

export default Movies;
