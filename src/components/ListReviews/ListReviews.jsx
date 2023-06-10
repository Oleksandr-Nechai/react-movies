// import { ListActors, Actor } from './ListReviews.styled';

function ListReviews({ reviews }) {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h2>{`${review.author}`}</h2>
          <p>{`${review.content}`}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListReviews;
