import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
  const { slug } = useParams();
  const movieId = slug.match(/[a-zA-Z0-9]+$/)[0];

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        showLoading();
        const movieInfo = await getMovies({
          action: 'movieDetails',
          movieId,
          controller: { signal: controller.signal },
        });

        setMovie({ ...movieInfo });
      } catch (e) {
        if (axios.isCancel(e)) {
          return;
        }
        setError(e.message);
        validationRequest(e.message);
        setMovie(null);
      } finally {
        loadingRemove();
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {movie && <Film movie={movie} />}
      {error && <BadRequest error={error} />}
    </>
  );
}

export default MovieDetails;
