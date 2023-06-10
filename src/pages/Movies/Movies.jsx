import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Searchbar from 'components/Searchbar';
import { getMovies } from 'services/api';
import TrendingMoviesList from 'components/TrendingMoviesList';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [listMovies, setListMovies] = useState(null);

  const onSubmitForm = name => {
    setSearchParams({ movie: name });
  };
  useEffect(() => {
    const c = searchParams.get('movie');

    if (!c) {
      return;
    }

    async function fetchData() {
      const x = await getMovies('search', null, {
        query: c,
      });
      setListMovies(x);
    }
    fetchData();
  }, [searchParams]);

  return (
    <>
      <Searchbar onSubmitForm={onSubmitForm} />
      {listMovies?.results && (
        <main>
          <TrendingMoviesList trendingMovies={listMovies.results} />
        </main>
      )}
    </>
  );
}

export default Movies;
