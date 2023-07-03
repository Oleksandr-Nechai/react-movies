import Loader from 'components/Loader';
import BadRequest from 'components/BadRequest';

import { useMovieData } from 'hooks';

import { ListReviews, ItemReview, Author } from './Reviews.styled';

function Reviews() {
  const [movieInfo, visible, error] = useMovieData('movieReviews');

  const results = movieInfo ? movieInfo.results : null;

  return (
    <>
      {visible && <Loader visible={visible} />}
      {results?.length > 0 && (
        <ListReviews>
          {results.map(({ id, author, content }) => (
            <ItemReview key={id}>
              <Author>{`${author}`}</Author>
              <p>{`${content}`}</p>
            </ItemReview>
          ))}
        </ListReviews>
      )}
      {(results?.length === 0 || error) && (
        <BadRequest
          error={error ?? 'There are no reviews for this movie yet.'}
        />
      )}
    </>
  );
}

export default Reviews;
