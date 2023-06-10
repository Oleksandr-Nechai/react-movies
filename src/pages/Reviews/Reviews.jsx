import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';
import ListReviews from 'components/ListReviews';

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
    <main>{reviews?.results && <ListReviews reviews={reviews.results} />}</main>
  );
}

export default Reviews;
