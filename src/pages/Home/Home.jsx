import { useState, useEffect } from 'react';
import { getMovies } from 'services/api';
import MoviesList from 'components/MoviesList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const x = await getMovies('trending');
      setTrendingMovies(x.results);
    }
    fetchData();
  }, []);

  return (
    trendingMovies.length && <MoviesList movies={trendingMovies} />
  );
}

export default Home;
