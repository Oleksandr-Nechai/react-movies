import { useState, useEffect } from 'react';
import { getMovies } from 'services/api';
import TrendingMoviesList from 'components/TrendingMoviesList';

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
    trendingMovies.length && (
      <main>
        <TrendingMoviesList trendingMovies={trendingMovies} />
      </main>
    )
  );
}

export default Home;
