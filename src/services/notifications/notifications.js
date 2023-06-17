import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const adaptiveFontSize =
  Math.round(window.innerWidth * 0.0153) + 'px';

const messageOptions = {
  timeout: 2500,
  width: '30vw',
  fontSize: adaptiveFontSize,
  distance: '35px',
  borderRadius: '10px',
  cssAnimationStyle: 'zoom',
};
const loadingOptions = {
  svgSize: '160px',
  svgColor: '#0000FF',
};

export function findMovies(query) {
  return Notify.success(
    `Hooray! We found ${query} movies.`,
    messageOptions
  );
}

export function validationRequest(
  msg = 'Change search.Please try again.'
) {
  return Notify.failure(msg, messageOptions);
}

export function showLoading() {
  return Loading.hourglass(loadingOptions);
}

export function loadingRemove() {
  return Loading.remove();
}
