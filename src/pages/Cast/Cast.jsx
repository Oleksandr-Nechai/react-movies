import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';
import ActorsList from 'components/ActorsList';

function Cast() {
  const [actors, setActors] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const movieInfo = await getMovies('movieCredits', movieId);
      setActors({ ...movieInfo });
    }
    fetchData();
  }, [movieId]);

  return <main>{actors?.cast && <ActorsList cast={actors.cast} />}</main>;
}

export default Cast;
