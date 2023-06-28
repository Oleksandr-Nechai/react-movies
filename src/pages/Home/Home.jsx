import { useState, useEffect } from 'react';
import axios from 'axios';

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
    const controller = new AbortController();
    async function fetchData() {
      try {
        showLoading();
        const { results } = await getMovies({
          action: 'trending',
          controller: { signal: controller.signal },
        });
        setTrendingMovies([...results]);
        findMovies('trending');
      } catch (e) {
        if (axios.isCancel(e)) {
          return;
        }
        setError(e.message);
        validationRequest(e.message);
        setTrendingMovies([]);
      } finally {
        loadingRemove();
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
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
