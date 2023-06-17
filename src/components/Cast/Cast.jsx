import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies, IMAGE_BASE_URL } from 'services/api';

import { ListActors, Actor } from './Cast.styled';

import defaultImage from 'images/no-photo.jpg';

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

  return (
    <>
      {actors?.cast && (
        <ListActors>
          {actors.cast.map(actor => (
            <Actor key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${actor.profile_path}`
                    : defaultImage
                }
                alt={actor.name}
              />

              <p>{`${actor.name}`}</p>
            </Actor>
          ))}
        </ListActors>
      )}
    </>
  );
}

export default Cast;
