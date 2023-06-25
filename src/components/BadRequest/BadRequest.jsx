import PropTypes from 'prop-types';

import { Wrapper, ErrorMessage } from './BadRequest.styled';
import movieNotFound from 'images/movie_not_found.jpg';

function BadRequest({ error }) {
  return (
    <Wrapper>
      <img src={movieNotFound} alt="Movie not found.jpg" />
      <ErrorMessage>
        {error ?? 'Sorry, your query returned no matches.'}
      </ErrorMessage>
    </Wrapper>
  );
}

export default BadRequest;

BadRequest.propTypes = {
  error: PropTypes.string,
};
