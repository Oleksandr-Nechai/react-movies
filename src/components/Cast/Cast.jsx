import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovies, IMAGE_BASE_URL } from 'services/api';
import { validationRequest } from 'services/notifications';

import Loader from 'components/Loader';
import BadRequest from 'components/BadRequest';

import {
  ListActors,
  Actor,
  Poster,
  Image,
  Title,
} from './Cast.styled';

import defaultImage from 'images/no-photo.jpg';

function Cast() {
  const [actors, setActors] = useState(null);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setVisible(true);
        const { cast } = await getMovies('movieCredits', movieId);
        setActors([...cast]);
      } catch ({ message }) {
        setError(message);
        validationRequest(message);
        setActors([]);
      } finally {
        setVisible(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {visible && <Loader visible={visible} />}
      {actors?.length > 0 && (
        <ListActors>
          {actors.map(({ id, profile_path, name }) => (
            <Actor key={id}>
              <Poster>
                <Image
                  src={
                    profile_path
                      ? `${IMAGE_BASE_URL}w200/${profile_path}`
                      : defaultImage
                  }
                  alt={name}
                />
              </Poster>
              <Title>{`${name}`}</Title>
            </Actor>
          ))}
        </ListActors>
      )}
      {actors?.length === 0 && (
        <BadRequest
          error={error ?? 'We have no information about the cast.'}
        />
      )}
    </>
  );
}

export default Cast;