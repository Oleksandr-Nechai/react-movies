import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';

// import { ListActors, Actor } from './ListReviews.styled';

function Reviews() {
  const [reviews, setReviews] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const movieInfo = await getMovies('movieReviews', movieId);
      setReviews({ ...movieInfo });
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews?.results && (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id}>
              <h2>{`${review.author}`}</h2>
              <p>{`${review.content}`}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Reviews;
