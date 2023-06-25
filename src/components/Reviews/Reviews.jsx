import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovies } from 'services/api';
import { validationRequest } from 'services/notifications';

import Loader from 'components/Loader';
import BadRequest from 'components/BadRequest';

import { ListReviews, ItemReview, Author } from './Reviews.styled';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setVisible(true);
        const { results } = await getMovies('movieReviews', movieId);
        setReviews([...results]);
      } catch ({ message }) {
        setError(message);
        validationRequest(message);
        setReviews([]);
      } finally {
        setVisible(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {visible && <Loader visible={visible} />}
      {reviews?.length > 0 && (
        <ListReviews>
          {reviews.map(({ id, author, content }) => (
            <ItemReview key={id}>
              <Author>{`${author}`}</Author>
              <p>{`${content}`}</p>
            </ItemReview>
          ))}
        </ListReviews>
      )}
      {reviews?.length === 0 && (
        <BadRequest
          error={error ?? 'There are no reviews for this movie yet.'}
        />
      )}
    </>
  );
}

export default Reviews;
