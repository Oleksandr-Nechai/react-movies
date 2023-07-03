import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { getMovies } from 'services/api';
import { validationRequest, findMovies } from 'services/notifications';

function useMovieData(action) {
  const [movieInfo, setMovieInfo] = useState(null);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  const movieId = slug ? slug.match(/[a-zA-Z0-9]+$/)[0] : null;

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setVisible(true);
        const data = await getMovies({
          action: `${action}`,
          movieId,
          controller: { signal: controller.signal },
        });

        setMovieInfo({ ...data });
        if (action === 'trending') {
          findMovies('trending');
        }
      } catch (e) {
        if (axios.isCancel(e)) {
          return;
        }
        setError(e.message);
        validationRequest(e.message);
        setMovieInfo(null);
      } finally {
        setVisible(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [action, movieId]);
  return [movieInfo, visible, error];
}

export { useMovieData };
