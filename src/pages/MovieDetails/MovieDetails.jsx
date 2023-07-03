import { useMovieData } from 'hooks';

import Film from 'components/Film';
import Loader from 'components/Loader';
import BadRequest from 'components/BadRequest';

function MovieDetails() {
  const [movieInfo, visible, error] = useMovieData('movieDetails');

  return (
    <>
      {visible && <Loader visible={visible} gap={'100px'} />}
      {movieInfo && <Film movie={movieInfo} />}
      {error && <BadRequest error={error} />}
    </>
  );
}

export default MovieDetails;
