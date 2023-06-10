import { useLocation } from 'react-router-dom';
import { Link } from './TrendingMoviesList.styled';

function TrendingMoviesList({ trendingMovies }) {
  const location = useLocation();

  return (
    <ul>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TrendingMoviesList;
