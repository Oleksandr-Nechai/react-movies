import { useState, useEffect } from 'react';

import { getMovies } from 'services/api';
import {
  findMovies,
  validationRequest,
  showLoading,
  loadingRemove,
} from 'services/notifications';

import MoviesList from 'components/MoviesList';
import BadRequest from 'components/BadRequest';
import Section from 'components/Section';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        showLoading();
        const { results } = await getMovies('trending');
        setTrendingMovies([...results]);
        findMovies('trending');
      } catch ({ message }) {
        setError(message);
        validationRequest(message);
        setTrendingMovies([]);
      } finally {
        loadingRemove();
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Section>
        <h1>Trending movies today</h1>
      </Section>
      {trendingMovies?.length > 0 && (
        <MoviesList movies={trendingMovies} />
      )}
      {trendingMovies?.length === 0 && <BadRequest error={error} />}
    </>
  );
}

export default Home;
