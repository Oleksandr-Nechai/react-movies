import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovies } from 'services/api';
import {
  showLoading,
  loadingRemove,
  validationRequest,
} from 'services/notifications';

import Film from 'components/Film';
import BadRequest from 'components/BadRequest';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        showLoading();
        const movieInfo = await getMovies('movieDetails', movieId);
        setMovie({ ...movieInfo });
      } catch ({ message }) {
        setError(message);
        validationRequest(message);
        setMovie(null);
      } finally {
        loadingRemove();
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {movie && <Film movie={movie} />}
      {error && <BadRequest error={error} />}
    </>
  );
}

export default MovieDetails;
