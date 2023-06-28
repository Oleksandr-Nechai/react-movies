import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    const controller = new AbortController();
    async function fetchData() {
      try {
        setVisible(true);
        const { results } = await getMovies({
          action: 'movieReviews',
          movieId,
          controller: { signal: controller.signal },
        });
        setReviews([...results]);
      } catch (e) {
        if (axios.isCancel(e)) {
          return;
        }
        setError(e.message);
        validationRequest(e.message);
        setReviews([]);
      } finally {
        setVisible(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
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
