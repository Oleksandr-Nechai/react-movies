import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  MovieGallery,
  Film,
  Poster,
  Image,
  Title,
} from './MoviesList.styled';

import { IMAGE_BASE_URL } from 'services/api';
import { formatDate } from 'services/formatDate';

import Section from 'components/Section';

import defaultImage from 'images/no_poster.jpg';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <Section>
      <MovieGallery>
        {movies.map(({ id, poster_path, title, release_date }) => (
          <Film key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Poster>
                <Image
                  src={
                    poster_path
                      ? `${IMAGE_BASE_URL}w300/${poster_path}`
                      : defaultImage
                  }
                  alt={`Poster ${title}`}
                />
              </Poster>
              <Title>
                <p>{title}</p>
                <p>
                  {release_date
                    ? formatDate(release_date)
                    : '--.--.--'}
                </p>
              </Title>
            </Link>
          </Film>
        ))}
      </MovieGallery>
    </Section>
  );
}

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
    }).isRequired
  ).isRequired,
};
