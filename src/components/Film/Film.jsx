import { useRef, useState, useEffect, Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';

import { IMAGE_BASE_URL } from 'services/api';

import defaultImage from 'images/no_poster.jpg';

import {
  Wraper,
  Poster,
  ButtonGoBack,
  MovieInfo,
  Score,
  MoreInformation,
  ListLink,
  ButtonMoreInfo,
} from './Film.styled';

import Section from 'components/Section';

function Film({ movie }) {
  const [isLinkEnabled, setLinkEnabled] = useState(true);
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from.location ?? '/');
  const labelButtonRef = useRef(
    location.state?.from.label ?? 'to the home page'
  );
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleButtonClick = () => {
    setLinkEnabled(false);
    timeoutRef.current = setTimeout(() => {
      setLinkEnabled(true);
    }, 2000);
  };

  const {
    vote_average = 0,
    backdrop_path,
    poster_path,
    title,
    release_date,
    overview,
    genres,
  } = movie;

  const score = Math.round(vote_average * 10);

  return (
    <Section>
      <Wraper
        backdrop={
          backdrop_path
            ? `${IMAGE_BASE_URL}w1280/${backdrop_path}`
            : defaultImage
        }
      >
        <Poster>
          <img
            src={
              poster_path
                ? `${IMAGE_BASE_URL}w300/${poster_path}`
                : defaultImage
            }
            alt={title}
          />
        </Poster>
        <ButtonGoBack
          to={backLinkHref.current}
        >{`Go back ${labelButtonRef.current}`}</ButtonGoBack>
        <MovieInfo>
          <h1>{`${title} 
          (${release_date?.slice(0, 4) || '---'})`}</h1>
          <p>
            User score: <Score score={score}> {score}%</Score>
          </p>
          <h2>Overview:</h2>
          <p>{overview || 'No data available'}</p>
          <h2>Genres</h2>
          <p>
            {genres?.map(genre => genre.name).join(', ') || 'No data available'}
          </p>
        </MovieInfo>
      </Wraper>
      <MoreInformation>
        <h2>Additional Information</h2>
        <ListLink>
          <li>
            <ButtonMoreInfo
              to="cast"
              onClick={handleButtonClick}
              style={isLinkEnabled ? {} : { pointerEvents: 'none' }}
            >
              Cast
            </ButtonMoreInfo>
          </li>
          <li>
            <ButtonMoreInfo
              to="reviews"
              onClick={handleButtonClick}
              style={isLinkEnabled ? {} : { pointerEvents: 'none' }}
            >
              Reviews
            </ButtonMoreInfo>
          </li>
        </ListLink>
      </MoreInformation>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
}

export default Film;

Film.propTypes = {
  movie: PropTypes.shape({
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
