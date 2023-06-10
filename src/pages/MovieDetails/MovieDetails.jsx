import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';
import Film from 'components/Film';

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const movieInfo = await getMovies('movieDetails', movieId);
      setMovie({ ...movieInfo });
    }
    fetchData();
  }, [movieId]);

  return <main>{movie.release_date && <Film movie={movie} />}</main>;
}

export default MovieDetails;
