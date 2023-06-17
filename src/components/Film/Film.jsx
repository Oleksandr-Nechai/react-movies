import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'services/api';
import defaultImage from 'images/no_poster.jpg';
import { Poster } from './Film.styled';
import { useRef } from 'react';

function Film({ movie }) {
  const location = useLocation();

  const x = location.state?.from ?? '/';
  const y = useRef(x);
  // console.log(movie);
  return (
    <>
      <Link to={y.current}>button back</Link>
      <Poster
        src={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : defaultImage
        }
        alt={movie.title}
      />
      <h1>{`${movie.title} (${movie?.release_date?.slice(
        0,
        4
      )})`}</h1>
      <p>{`${Math.round(movie.vote_average * 10)}%`}</p>
      <h2>Overview:</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <p>{movie?.genres?.map(genre => genre.name).join(', ')}</p>
      <h2>Additional Information</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Film;
