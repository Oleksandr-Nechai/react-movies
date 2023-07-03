import { IMAGE_BASE_URL } from 'services/api';

import Loader from 'components/Loader';
import BadRequest from 'components/BadRequest';

import { useMovieData } from 'hooks';

import { ListActors, Actor, Poster, Image, Title } from './Cast.styled';

import defaultImage from 'images/no-photo.jpg';

function Cast() {
  const [movieInfo, visible, error] = useMovieData('movieCredits');

  const cast = movieInfo ? movieInfo.cast : null;

  return (
    <>
      {visible && <Loader visible={visible} />}
      {cast?.length > 0 && (
        <ListActors>
          {cast.map(({ id, profile_path, name }) => (
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
      {(cast?.length === 0 || error) && (
        <BadRequest error={error ?? 'We have no information about the cast.'} />
      )}
    </>
  );
}

export default Cast;
